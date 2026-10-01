#!/usr/bin/env python3
"""Fix the upstream commit that left incomplete UTF-8 byte sequences in demo files.

The bug: a commit truncated multi-byte Unicode characters at byte 2 of 3, leaving
the trailing byte as ASCII '?' (0x3F). Examples:
  '⌘' (U+2318 = E2 8C 98)   -> E2 8C 3F
  '⌫' (U+232B = E2 8C AB)   -> E2 8C 3F
  '⌃' (U+2303 = E2 8C 83)   -> E2 8C 3F
  '—' (U+2014 = E2 80 94)   -> E2 80 3F
  '⌥' (U+2325 = E2 8C A5)   -> E2 8C 3F
  '⇧' (U+21E7 = E2 87 A7)   -> E2 87 3F
  '✔' (U+2714 = E2 9C 94)   -> E2 9C 3F
  '·' (U+00B7 = C2 B7)      -> C2 3F
  '—' (U+2014)              -> E2 80 3F

Strategy: find any incomplete multi-byte sequence (lead byte + continuation byte
+ 0x3F), drop the 0x3F (and the lead byte if there is no intended visible
character), replace with ASCII '?' so the file remains valid UTF-8. This loses
the visual fidelity of the original character but is the safest automatic fix.
"""
import re
import pathlib

ROOT = pathlib.Path("apps/docs/demos")

# Match a UTF-8 leading byte (>= 0xC2), followed by ONE 0x80-0xBF byte, followed
# by 0x3F ('?'). This is the truncation signature. We turn it into '?'.

# But there are also cases where the lead byte was correct but only ONE
# continuation byte is followed by 0x3F — same pattern.
PAT_TWO = re.compile(rb"[\xc2-\xf4][\x80-\xbf]\?")  # incomplete 2-byte sequence
# A 3-byte sequence would be lead+cont+cont, but here we only have lead+cont+?
# so the same PAT_TWO also catches lead(cont?)

# Replace with ASCII '?'
PAT_TWO = re.compile(rb"[\xc2-\xf4][\x80-\xbf]\x3f")  # explicit hex


def fix(b: bytes) -> bytes:
    return PAT_TWO.sub(b"?", b)


fixed = []
for f in list(ROOT.rglob("*.vue")) + list(ROOT.rglob("*.ts")) + list(ROOT.rglob("*.md")):
    raw = f.read_bytes()
    if raw.startswith(b"\xff\xfe"):
        raw = raw[2:].decode("utf-16-le").encode("utf-8")
    elif raw.startswith(b"\xfe\xff"):
        raw = raw[2:].decode("utf-16-be").encode("utf-8")
    new = fix(raw)
    if new != raw:
        f.write_bytes(new)
        fixed.append(f)

for f in fixed:
    print("fixed:", f)
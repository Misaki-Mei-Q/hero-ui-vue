#!/usr/bin/env python3
import re
import pathlib

ROOT = pathlib.Path("apps/docs/demos")

# Source bytes: [' <high-byte(s)> ? ]
# Goal: restore the trailing letter that was lost in truncation.
# Look at file context: the next character (when present) is typically the
# letter shown between <pub>-..</pub> in Kbd body. Easier—keep the visible
# letter from the body: but we can't easily without parsing Vue. Use
# heuristics: pattern is [' X? ] where X is one multibyte char (\xe2\x8c is
# the U+2318 prefix). Drop the multibyte and the ?; insert nothing.

# Simpler approach: just convert ["['⌘X?]"] into ["['X']"] by:
#   - keeping the trailing single-letter that's currently after '?]' if any
#   - but in our broken files there is no trailing letter.
# We'll fall back to 'N' for solos and 'D' for the only double.

# Pattern: [' <highbytes> ? ]
PAT_SOLO = re.compile(rb"\['[\x80-\xff]+\?\?\]")  # looks for ['XXX?]  where XXX is multibyte then ??]
# That won't match either; the broken pattern has only ONE '?', not two

# OK actually file shows: b'\xe2\x8c\x3f' = bytes that are 0xE2 0x8C 0x3F
# 0xE2 is a UTF-8 leading byte for 3-byte sequence (0xE2 0x8C 0x98 = U+2318 ⌘)
# 0x3F is ASCII '?'
# So the truncation dropped the last byte of the codepoint AND the apostrophe after

# Real broken bytes: 27 E2 8C 3F 5D   = '⌘ ?]
# Fix: drop everything between the apostrophe and the closing bracket,
# leaving: ['N'] (we pick 'N' as a generic placeholder letter)

PAT_SOLO = re.compile(rb"\['[\xc0-\xff][\x80-\xff][\x80-\xff]?\?\]")
PAT_DOUBLE = re.compile(rb"\['[\xc0-\xff][\x80-\xff][\x80-\xff]?\?,\s*'[\xc0-\xff][\x80-\xff][\x80-\xff]?\?\]")


def fix(b: bytes) -> bytes:
    b = PAT_SOLO.sub(rb"['N']", b)
    b = PAT_DOUBLE.sub(rb"['D', 'D']", b)
    return b


for f in list(ROOT.rglob("*.vue")) + list(ROOT.rglob("*.ts")):
    raw = f.read_bytes()
    if raw.startswith(b"\xff\xfe"):
        raw = raw[2:].decode("utf-16-le").encode("utf-8")
    elif raw.startswith(b"\xfe\xff"):
        raw = raw[2:].decode("utf-16-be").encode("utf-8")
    new = fix(raw)
    if new != raw:
        f.write_bytes(new)
        print("fixed:", f)
"""Verify the npm scope @misaki-mei is owned by the current npm user.

Run after the user has created the organisation and clicked the verification
email from npmjs.com/org/create.
"""
import shutil
import subprocess
import sys

npm_exe = shutil.which("npm")
if not npm_exe:
    print("npm not found on PATH")
    sys.exit(2)

CMD_WHOAMI = [npm_exe, "whoami"]
CMD_LIST = [npm_exe, "access", "list", "packages", "@misaki-mei"]

try:
    user = subprocess.check_output(CMD_WHOAMI, text=True, shell=False).strip()
except subprocess.CalledProcessError:
    print("npm whoami failed -- run `npm login` first")
    sys.exit(1)

print(f"logged in as: {user}")

try:
    pkgs = subprocess.check_output(CMD_LIST, text=True, shell=False).strip()
except subprocess.CalledProcessError:
    print("scope @misaki-mei is not registered yet, or the verifying email was not clicked")
    sys.exit(3)

print("scope @misaki-mei exists and is accessible:")
if pkgs:
    print(pkgs)
else:
    print("(no packages yet -- ready to publish)")
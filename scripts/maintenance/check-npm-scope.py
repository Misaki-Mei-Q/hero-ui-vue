# Verify the npm scope @misaki-mei is owned by the current npm user.
# Run after the user has clicked the verification email from npmjs.com/org/create.

import subprocess
import sys

CMD_WHOAMI = ["npm", "whoami"]
CMD_LIST = ["npm", "access", "list", "packages", "@misaki-mei"]

try:
    user = subprocess.check_output(CMD_WHOAMI, text=True).strip()
except subprocess.CalledProcessError as e:
    print("npm whoami failed -- run `npm login` first")
    sys.exit(1)

print(f"logged in as: {user}")

try:
    pkgs = subprocess.check_output(CMD_LIST, text=True).strip()
except subprocess.CalledProcessError:
    print("scope @misaki-mei is not registered yet, or the verifying email was not clicked")
    sys.exit(2)

print("scope @misaki-mei exists and is accessible:")
print(pkgs)
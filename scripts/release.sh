#!/bin/sh

set -e

# Local Release Workflow
#
# References:
#
# - https://git-scm.com/docs/git-commit

VERSION_MANIFEST=.yarn/versions/*.yml

if compgen -G $VERSION_MANIFEST >/dev/null; then
  echo "[READY] version manifest found"
else
  echo "[ERROR] missing version manifest"
  exit 1
fi

RELEASE=$(yq .releases.$(jq -r .name ./package.json) $VERSION_MANIFEST)
echo "[READY] creating release chore commit for $RELEASE"

git add $VERSION_MANIFEST
git commit --allow-empty -S -s -m "release(chore): $RELEASE"

#!/usr/bin/env bash
set -e

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1
[ -z "$PLAYER" ] && echo "Missing \$PRODUCER environment variable" && exit 1

echo
echo \$CONTRACT is $CONTRACT
echo \$PLAYER is $PLAYER
echo
echo
echo --------------------------------------------
echo 'Game is initializing....'
echo
echo 'Please wait....'
echo --------------------------------------------
echo
echo
echo 
echo
echo
./scripts/create.sh
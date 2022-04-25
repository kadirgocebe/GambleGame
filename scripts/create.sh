#!/usr/bin/env bash
set -e

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1
[ -z "$PLAYER" ] && echo "Missing \$PRODUCER environment variable" && exit 1

echo
echo --------------------------------------------
echo 'Calling the createGame() funciton on the contract'
echo 'Please wait...'
echo --------------------------------------------
echo --------------------------------------------
echo 'You can find the GAME ID below'
echo --------------------------------------------
echo
echo
echo \$CONTRACT is $CONTRACT
echo \$PLAYER is $PLAYER
echo 

near call $CONTRACT createGame --accountId $PLAYER --amount 5

./scripts/play.sh


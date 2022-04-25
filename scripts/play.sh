#!/usr/bin/env bash
set -e

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1
[ -z "$PLAYER" ] && echo "Missing \$PRODUCER environment variable" && exit 1

echo
echo --------------------------------------------
echo 'To play the Game call the play() function on the contract'
echo --------------------------------------------
echo --------------------------------------------
echo 'You need to take <gameid> from console above and change it.'
echo --------------------------------------------
echo --------------------------------------------
echo 'Also you need to enter a <selected-number> before using script'
echo --------------------------------------------
echo
echo
echo 
echo --------------------------------------------
echo 'Enter This Code Below with necessary changes...! '
echo --------------------------------------------
echo 
echo
echo
echo ----------********************--------------
echo near call $CONTRACT play "'"'{"id":"<gameid>" "selectedNumber" :<selected-number> }'"'" --accountId $PLAYER 
echo ----------********************--------------
echo
echo
echo 
echo --------------------------------------------
echo 'If you Wish to VIEW the game please the code below... '
echo --------------------------------------------
echo ----------********************--------------
echo near view $CONTRACT viewGame "'"'{"id": "<gameid>"}'"'" --account_id $PLAYER 
echo ----------********************--------------



echo #!/usr/bin/env bash
echo
echo --------------------------------------------
echo "WELCOME...!"
echo "This is a Script to play GambleGame"
echo "Terminal will Build and Deploy the Contract for you"
echo "Please Be Patient..."
echo --------------------------------------------
echo
echo "Building the contract"
echo
yarn build

echo --------------------------------------------
echo
echo "Deploying the contract"
echo
near dev-deploy 
echo
echo
echo --------------------------------------------
echo "Please run the following commands respectively..."
echo --------------------------------------------
echo
echo ----------********************--------------
echo 'export CONTRACT=<Your-Dev-ID>'
echo ----------********************--------------
echo 'export PLAYER=<YOUR ACCOUNT>.testnet'
echo ----------********************--------------
echo './scripts/start.sh'
echo ----------********************--------------
echo
echo
exit 0

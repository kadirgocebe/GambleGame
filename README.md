#### GAMBLE GAME Smart Contract Game Developed by NEAR
==================

A smart contract game written in AssemblyScript for NEAR Environment by Kadir Gocebe


## What Does Code Do?
===========

This is a basic Guess the Number Gamble Game
 
1- Game generate a random number between 1 - 100

2- Player tries to find it in 5 attept

3- Every attempt cost 1 NEAR and total amount of 5 Near will deposit when creating the game 

4- If player guess the random number then he/she will win the game and take money back 

5- If player cannot guess the right number than he/she will lose the money

## Before Start
===========
* Make sure you have "yarn"  "near-cli" and "node" on your computer. 

## Installition
===========
* Clone this repository to your computer.
```
git clone https://github.com/kadirgocebe/GambleGame.git
```
* Change directory to the deployed folder
```
cd GambleGame
```
* Login to your near account
```
near login
```
* Build and deploy the contract
```
yarn
yarn build
near dev-deploy
```
* Export the development account to the $CONTRACT
```
export CONTRACT=<YOUR_DEV_ACCOUNT_HERE>
```

## How to Play?
===========
* Create a game and deposit 5 NEAR 
```
near call $CONTRACT createGame --accountId <YOUR_DEV_ACCOUNT_HERE> --amount 5
```
- You can see the game id from the console and use it for play 

* Play the game
```
near call $CONTRACT play '{"id": <gameid>, "selectedNumber": <selected-number>}' --account_id <YOUR_DEV_ACCOUNT_HERE>
```
- Remember you need to write Game id as "string" and your selected number as "integer"
- You have 5 attemp to guess the right number
- If you can you will get your money back to your account
- If you can't than money will be lost
 

* You can view the games with view command
```
near view $CONTRACT viewGame '{"gameId": <gameId>}' --accountId <YOUR_DEV_ACCOUNT_HERE>
```

## GOOD LUCK !
==================
# NCD PROJECT
# GambleGame Project

This is the read me file for Near Project GambleGame  by KADIR GOCEBE

# WHAT DOES PROJECT DO? 

1- Program will generate a random number between 1 and 100 

2- User will try to guess the number in 10 attepmts

3- Each attempt cost 1 NEAR for user

4- In every wrong answer program will give guidance and hints about random number

5 If user can guess the number he/she will get money back 

6- If user cannot guess the number he/she will lose the money

# GOOD LUCK !


## Installition

* Clone this repository to your computer.
```
https://github.com/kadirgocebe/GambleGame.git

then type

- cd GambleGame
- yarn
```
* Login 
```
 - near login
```
* Build and deploy the contract
```
- yarn build:release
- yarn deploy
```
* Export the development account to the $CONTRACT
```
-export CONTRACT=<YOUR_DEV_ACCOUNT_HERE>
```

## How to Play?

* Create a Game
```
near call $CONTRACT createGame --accountId <YOUR_DEV_ACCOUNT_HERE>
```

* Start the game
```
near call $CONTRACT startGame '{"gameId": <gameId>}' --accountId <YOUR_DEV_ACCOUNT_HERE>
```
* Now you can start guessing
```
near call $CONTRACT makeGuess '{"gameId": <gameId>}' --accountId <YOUR_DEV_ACCOUNT_HERE> --amount <amountToDeopsit>

 Remember the cost 1 GUESS = 1 NEAR 
 You Have 10 lives to Guess
```
* Look for the games
```
near view $CONTRACT getGame --accountId <YOUR_DEV_ACCOUNT_HERE>
```
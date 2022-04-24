import { context, ContractPromiseBatch, logging, math, u128 } from 'near-sdk-as';
import { Game, games, State } from './model';


//view methods

export function viewGame(id: string): Game {
  return games.getSome(id);
}


//create game method

export function createGame(): string {
  // deposit check
  assert(context.attachedDeposit == u128.fromString('5000000000000000000000000'), 'Please deposit 5 NEAR to create a game');
  const game = new Game();
  games.set(game.id, game);

  return game.id; // after creation method returning the game ID to use it in play method
}


//play method

export function play(id: string, selectedNumber: i32): string { //it takes game id as string and player guess number

  // check whether game is initialized
  assert(games.contains(id), 'Game id not found');
/* Hash the selected number
Because random number turned into a has before so we hash the selected number too 
if selected number has and random number hash is equal than it means numbers are equal too
*/
  let hashedSelectedNumber = math.hash(selectedNumber);
  logging.log(hashedSelectedNumber);
  // find the game
  let game = games.getSome(id);

  // selectedNumber must be between 1-10
  assert(selectedNumber <= 10, 'Your number must be in the range of 1 - 10');
  assert(selectedNumber >= 1, 'Your number must be in the range of 1 - 10');
  let message = ''; // we create message to show later

 

  //we assgin the player guess into a number to use it later
  let gameNumber =  game.hashedNumber;


  if (hashedSelectedNumber.toString() == game.hashedNumber.toString()) { //if guess it true then win
    message = winGame(game, game.player, selectedNumber);
  } else {  //else keep guessing
			message = 'Wrong Number - Keep Guessing!';
  		
}
  game.roundsPlayed++; 		//check the rounds that played
  if (game.roundsPlayed > 4) {
    game.state = State.Completed;
    loseGame(game, game.player, gameNumber); 	//If the guess count is expired then lose
    return `Sorry!, You cannot guessed the number! You loose all the money!`;
  }

games.set(game.id, game);
return message;
}

//win the game

function winGame(game: Game, player: string, number: i32): string {
  game.state = State.Completed;

  // transfer NEAR to the player
  const amount_to_receive = game.gameAmount;
  const to_winner = ContractPromiseBatch.create(player).transfer(amount_to_receive); 

  games.set(game.id, game);
  return `Congratulations: ${player} You find the number which is ${number} and received ${amount_to_receive} Ⓝ`;
}

//lose the game

function loseGame(game: Game, player: string, number: Uint8Array): string {

  const amount_to_receive = game.gameAmount;
  const to_house =  ContractPromiseBatch.create("kadirg.testnet").transfer(amount_to_receive);

  games.set(game.id, game);
  return `Sorry ${player} the number was ${number} and you CANNOT GUESS the number and you loose ${amount_to_receive} Ⓝ`;

}



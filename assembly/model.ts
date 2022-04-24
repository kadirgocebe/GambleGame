import { RNG, context, u128, PersistentUnorderedMap, math } from 'near-sdk-as';

export enum State {
  Created,
  InProgress,
  Completed
}

@nearBindgen
export class Game { //Creating variables
  id: string;
  state: State;
  player: string;
  roundsPlayed: u8;
  hashedNumber: Uint8Array;
  gameAmount: u128;

  constructor() {
    this.id = context.blockIndex.toString().slice(4, 8); 
    /*This gives a unique ID to the created game
    This ID is taken from block index which is exactly the last four digit of 
    the created block fo example index of block is = 07452369 then game ID will be "2369"
    */

    //create random Number
    let rng = new RNG<u8>(1, 10);
    let roll = rng.next();

    //hash the random number so no one can see what is the number
    let choosedNumber = new Uint8Array(roll + 1).byteLength;
    this.hashedNumber = math.hash(choosedNumber);

    this.state = State.Created;
    this.player = context.sender;
    this.roundsPlayed = 0;
    this.gameAmount = context.attachedDeposit;
  }
}

export const games = new PersistentUnorderedMap<string, Game>('g');
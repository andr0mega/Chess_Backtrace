import { getPatternPawnBlack, getPatternPawnWhite } from './movePatterns/patternPawn';
import Piece from './piece';

export default class Pawn extends Piece {
  type = 'pawn';

  getPossibleMoves(){
    if(this.color === "white"){
        return getPatternPawnWhite(this);
    }
    if(this.color === "black"){
        return getPatternPawnBlack(this);
    }
  }
}

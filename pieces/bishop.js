import { getPatternBishop } from './movePatterns/patternBishop';
import Piece from './piece';

export default class Bishop extends Piece {
  type = 'bishop';
  
  getPossibleMoves() {
    return getPatternBishop(this);
  }
}

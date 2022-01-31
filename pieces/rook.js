import { getPatternRook } from './movePatterns/patternRook';
import Piece from './piece';

export default class Rook extends Piece {
  type = 'rook';
  
  getPossibleMoves() {
    return getPatternRook(this);
  }
}

import { getPattern } from './movePatterns/PatternBishop';
import Piece from './piece';

export default class Bishop extends Piece {
  type = 'bishop';
  getPossibleMoves() {
    getPattern(this);
    return possibleFields;
  }
}

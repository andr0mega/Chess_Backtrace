import { getPatternQueen } from './movePatterns/patternQueen';
import Piece from './piece';

export default class Queen extends Piece {
  type = 'queen';
  
  getPossibleMoves() {
    return getPatternQueen(this);
  }
}

import { getPatternKing } from './movePatterns/patternKing';
import Piece from './piece';

export default class King extends Piece {
  type = 'king';

  getPossibleMoves() {
		return getPatternKing(this);
  }
}

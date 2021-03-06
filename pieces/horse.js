import { getPatternHorse } from './movePatterns/patternHorse';
import Piece from './piece';

export default class Horse extends Piece {
  type = 'horse';

  getPossibleMoves() {
    return getPatternHorse(this);
  }
}

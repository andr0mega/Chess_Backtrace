import { getPatternBishop } from './patternBishop';
import { getPatternRook } from './patternRook';

export const getPatternQueen = (queen) => {
  const possibleFieldsRook = getPatternRook(queen);
  const possibleFieldsBishop = getPatternBishop(queen);
  return possibleFieldsRook.concat(possibleFieldsBishop);
};

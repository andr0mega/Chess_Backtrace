import { getOccupiedFields } from '../../board/board';

export const getPatternKing = (king) => {
  let possibleFields = [];
  for (let x = 1; x <= 8; x++) {
    for (let y = 1; y <= 8; y++) {
      const offsetX = x - king.posX;
      const offsetY = y - king.posY;
      if (offsetX <= 1 && offsetX >= -1 && offsetY <= 1 && offsetY >= -1) {
        possibleFields.push({ posX: x, posY: y });
      }
    }
  }
  const possibleFieldsOccupied = getOccupiedFields().filter((field) => {
    const offsetX = field.posX - king.posX;
    const offsetY = field.posY - king.posY;
    return offsetX <= 1 && offsetX >= -1 && offsetY <= 1 && offsetY >= -1;
  });
  possibleFieldsOccupied.forEach((piece) => {
    if (piece.color === king.color) {
      possibleFields = possibleFields.filter((field) => {
        return !(field.posX === piece.posX && field.posY === piece.posY);
      });
    }
  });
  return possibleFields;
};

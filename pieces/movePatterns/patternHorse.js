import { getOccupiedFields } from '../../board/board';

export const getPatternHorse = (horse) => {
  let possibleFields = [];
  for (let x = 1; x <= 8; x++) {
    for (let y = 1; y <= 8; y++) {
      const distance = (x - horse.posX) * (y - horse.posY);
      if (distance === 2 || distance === -2) {
        possibleFields.push({ posX: x, posY: y });
      }
    }
  }
  const possibleFieldsOccupied = getOccupiedFields().filter((field) => {
    const distance = (field.posX - horse.posX) * (field.posY - horse.posY);
    return distance === 2 || distance === -2;
  });
  possibleFieldsOccupied.forEach((piece) => {
    if (piece.color === horse.color) {
      possibleFields = possibleFields.filter((field) => {
        return !(field.posX === piece.posX && field.posY === piece.posY);
      });
    }
  });
  return possibleFields;
};

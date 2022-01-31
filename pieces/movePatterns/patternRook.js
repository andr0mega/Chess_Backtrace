import { getOccupiedFields } from '../../board/board';

export const getPatternRook = (rook) => {
  let possibleFields = [];
  for (let x = 1; x <= 8; x++) {
    for (let y = 1; y <= 8; y++) {
      if (x === rook.posX || y === rook.posY) {
        possibleFields.push({ posX: x, posY: y });
      }
    }
  }
  const possibleFieldsOccupied = getOccupiedFields().filter((field) => {
    return field.posX === rook.posX || field.posY === rook.posY;
  });
  possibleFieldsOccupied.forEach((piece) => {
    possibleFields = possibleFields.filter((field) => {
      return !(rook.posX === field.posX && rook.posY === field.posY);
    });
    if (piece.posX < rook.posX) {
      possibleFields = possibleFields.filter((field) => {
        if (piece.color !== rook.color) {
          return field.posX >= piece.posX;
        }
        return field.posX > piece.posX;
      });
    }
    if (piece.posX > rook.posX) {
      possibleFields = possibleFields.filter((field) => {
        if (piece.color !== rook.color) {
          return field.posX <= piece.posX;
        }
        return field.posX < piece.posX;
      });
    }
    if (piece.posY < rook.posY) {
      possibleFields = possibleFields.filter((field) => {
        if (piece.color !== rook.color) {
          return field.posY >= piece.posY;
        }
        return field.posY > piece.posY;
      });
    }
    if (piece.posY > rook.posY) {
      possibleFields = possibleFields.filter((field) => {
        if (piece.color !== rook.color) {
          return field.posY <= piece.posY;
        }
        return field.posY < piece.posY;
      });
    }
  });
  return possibleFields;
};

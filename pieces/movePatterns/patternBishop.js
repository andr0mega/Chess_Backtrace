import { getOccupiedFields } from "../../board/board";

export const getPattern = (piece) => {
  const bishop = piece;
  let possibleFields = [];
  for (let x = 1; x <= 8; x++) {
    for (let y = 1; y <= 8; y++) {
      const distanceX = Math.abs(x - bishop.posX);
      const distanceY = Math.abs(y - bishop.posY);
      if (distanceX === distanceY) {
        possibleFields.push({ posX: x, posY: y });
      }
    }
  }
  const possibleFieldsOccupied = getOccupiedFields().filter((field) => {
    const distanceX = Math.abs(field.posX - bishop.posX);
    const distanceY = Math.abs(field.posY - bishop.posY);
    return distanceX === distanceY;
  });
  possibleFieldsOccupied.forEach((piece) => {
    possibleFields = possibleFields.filter((field) => {
      return !(bishop.posX === field.posX && bishop.posY === field.posY);
    });
    if (piece.posX < bishop.posX && piece.posY < bishop.posY) {
      possibleFields = possibleFields.filter((field) => {
        if (piece.color !== bishop.color) {
          return field.posX >= piece.posX || field.posY >= piece.posY;
        }
        return field.posX > piece.posX || field.posY > piece.posY;
      });
    }

    if (piece.posX < bishop.posX && piece.posY > bishop.posY) {
      possibleFields = possibleFields.filter((field) => {
        if (piece.color !== bishop.color) {
          return field.posX >= piece.posX || field.posY <= piece.posY;
        }
        return field.posX > piece.posX || field.posY < piece.posY;
      });
    }

    if (piece.posX > bishop.posX && piece.posY < bishop.posY) {
      possibleFields = possibleFields.filter((field) => {
        if (piece.color !== bishop.color) {
          return field.posX <= piece.posX || field.posY >= piece.posY;
        }
        return field.posX < piece.posX || field.posY > piece.posY;
      });
    }

    if (piece.posX > bishop.posX && piece.posY > bishop.posY) {
      possibleFields = possibleFields.filter((field) => {
        if (piece.color !== bishop.color) {
          return field.posX <= piece.posX || field.posY <= piece.posY;
        }
        return field.posX < piece.posX || field.posY < piece.posY;
      });
    }
  });
  return possibleFields;
};

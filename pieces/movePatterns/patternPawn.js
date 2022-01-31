import { getOccupiedFields } from '../../board/board';

export const getPatternPawnBlack = (pawn) => {
  let possibleFields = [];
  possibleFields.push({ posX: pawn.posX, posY: pawn.posY + 1 });
  if (pawn.posY === 2) {
    possibleFields.push({ posX: pawn.posX, posY: pawn.posY + 2 });
  }
  const possibleFieldsOccupied = getOccupiedFields().filter((field) => {
    return (
      (field.posX === pawn.posX + 1 && field.posY === pawn.posY + 1) ||
      (field.posX === pawn.posX - 1 && field.posY === pawn.posY + 1) ||
      (field.posX === pawn.posX && field.posY === pawn.posY + 1) ||
      (field.posX === pawn.posX && field.posY === pawn.posY + 2)
    );
  });
  possibleFieldsOccupied.forEach((piece) => {
    if (
      piece.color !== pawn.color &&
      ((piece.posX === pawn.posX + 1 && piece.posY === pawn.posY + 1) ||
        (piece.posX === pawn.posX - 1 && piece.posY === pawn.posY + 1))
    ) {
      possibleFields.push({ posX: piece.posX, posY: piece.posY });
    }
  });

  possibleFieldsOccupied.forEach((piece) => {
    if (piece.color === pawn.color) {
      possibleFields = possibleFields.filter((field) => {
        return !(field.posX === piece.posX && field.posY === piece.posY);
      });
    }
    if (piece.posX === pawn.posX && piece.posY === pawn.posY + 1) {
      possibleFields = possibleFields.filter((field) => {
        return !(
          (field.posX === piece.posX && field.posY === piece.posY) ||
          (field.posX === piece.posX && field.posY === piece.posY + 1)
        );
      });
    }
    if (piece.posX === pawn.posX && piece.posY === pawn.posY + 2) {
      possibleFields = possibleFields.filter((field) => {
        return !(field.posX === piece.posX && field.posY === piece.posY);
      });
    }
  });

  return possibleFields;
};

export const getPatternPawnWhite = (pawn) => {
  let possibleFields = [];
  possibleFields.push({ posX: pawn.posX, posY: pawn.posY - 1 });
  if (pawn.posY === 7) {
    possibleFields.push({ posX: pawn.posX, posY: pawn.posY - 2 });
  }
  const possibleFieldsOccupied = getOccupiedFields().filter((field) => {
    return (
      (field.posX === pawn.posX + 1 && field.posY === pawn.posY - 1) ||
      (field.posX === pawn.posX - 1 && field.posY === pawn.posY - 1) ||
      (field.posX === pawn.posX && field.posY === pawn.posY - 1) ||
      (field.posX === pawn.posX && field.posY === pawn.posY - 2)
    );
  });
  console.log(possibleFieldsOccupied);
  possibleFieldsOccupied.forEach((piece) => {
    if (
      piece.color !== pawn.color &&
      ((piece.posX === pawn.posX + 1 && piece.posY === pawn.posY - 1) ||
        (piece.posX === pawn.posX - 1 && piece.posY === pawn.posY - 1))
    ) {
      possibleFields.push({ posX: piece.posX, posY: piece.posY });
    }
  });

  possibleFieldsOccupied.forEach((piece) => {
    if (piece.color === pawn.color) {
      possibleFields = possibleFields.filter((field) => {
        return !(field.posX === piece.posX && field.posY === piece.posY);
      });
    }
    if (piece.posX === pawn.posX && piece.posY === pawn.posY - 1) {
      possibleFields = possibleFields.filter((field) => {
        return !(
          (field.posX === piece.posX && field.posY === piece.posY) ||
          (field.posX === piece.posX && field.posY === piece.posY - 1)
        );
      });
    }
    if (piece.posX === pawn.posX && piece.posY === pawn.posY - 2) {
      possibleFields = possibleFields.filter((field) => {
        return !(field.posX === piece.posX && field.posY === piece.posY);
      });
    }
  });

  return possibleFields;
};

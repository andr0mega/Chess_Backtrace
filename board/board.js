const occupiedFields = [];

export const occupyField = (piece) => {
  occupiedFields.push(piece);
};

export const getOccupiedFields = () => {
  return occupiedFields;
};

export const isFieldOccupied = (x, y) =>
  occupiedFields.some((piece) => piece.posX === x && piece.posY === y);

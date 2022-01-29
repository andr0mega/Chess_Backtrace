const occupiedFields = [];

export const occupyField = (piece) => {
  occupiedFields.push(piece);
}

export const getOccupiedFields = () => {
  return occupiedFields;
}
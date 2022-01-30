const occupiedFields = [];

export const occupyField = (piece) => {
  occupiedFields.push(piece);
};

export const getOccupiedFields = () => {
  return occupiedFields;
};

export const renderPieces = () => {
  occupiedFields.forEach((piece) => {
    const pieceElement = document.querySelector(
      `.piece-${piece.color}.${piece.type}`
    );
  });
};

export const isFieldOccupied = (x, y) =>
  occupiedFields.some((piece) => piece.posX === x && piece.posY === y);

export const renderPossibleFields = (possibleFields) => {
  possibleFields.forEach(field => {
    const fieldSelected = document.querySelector(`.row-${field.posY}>.field-${field.posX}`);
    fieldSelected.classList.add(".highlight-possible-field");
  })
}
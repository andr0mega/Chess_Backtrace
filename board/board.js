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

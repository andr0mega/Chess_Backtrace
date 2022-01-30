const occupiedFields = [];

export const occupyField = (piece) => {
  occupiedFields.push(piece);

  renderPieces();
};

export const getOccupiedFields = () => {
  return occupiedFields;
};

export const renderPieces = () => {
  const renderedPieces = document.querySelectorAll('.rendered-piece');

  if (renderedPieces) {
    renderedPieces.forEach((renderedPiece) => {
      renderedPiece.remove();
    });
  }

  occupiedFields.forEach((piece) => {
    const pieceElement = document.querySelector(
      `.piece-${piece.color}.${piece.type}`
    );

    const clonedPiece = pieceElement.cloneNode(true);

    clonedPiece.classList.add('rendered-piece');

    clonedPiece.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });

    const fieldPlace = document.querySelector(
      `.row-${piece.posY}>.field-${piece.posX}`
    );

    fieldPlace.appendChild(clonedPiece);
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
import { getOccupiedFields } from './board';

export const renderPossibleFields = (possibleFields) => {
  possibleFields.forEach((field) => {
    const fieldSelected = document.querySelector(
      `.row-${field.posY}>.field-${field.posX}`
    );
    fieldSelected.classList.add('highlight-possible-field');
  });
};

export const renderPieces = () => {
  const renderedPieces = document.querySelectorAll('.rendered-piece');

  if (renderedPieces) {
    renderedPieces.forEach((renderedPiece) => {
      renderedPiece.remove();
    });
  }

  getOccupiedFields().forEach((piece) => {
    const pieceElement = document.querySelector(
      `.piece-${piece.color}.${piece.type}`
    );

    const clonedPiece = pieceElement.cloneNode(true);

    clonedPiece.classList.add('rendered-piece');

    clonedPiece.addEventListener('click', (e) => {
      e.stopPropagation();
      unRenderPossibleFields();
      renderPossibleFields(piece.getPossibleMoves());
    });

    const fieldPlace = document.querySelector(
      `.row-${piece.posY}>.field-${piece.posX}`
    );

    fieldPlace.appendChild(clonedPiece);
  });
};

export const unRenderPossibleFields = () => {
  const highlightPossibleFields = document.querySelectorAll(
    '.highlight-possible-field'
  );
  if (highlightPossibleFields) {
    highlightPossibleFields.forEach((highlightPossibleField) => {
      highlightPossibleField.classList.remove('highlight-possible-field');
    });
  }
};

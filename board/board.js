import { renderPieces } from './render';

const occupiedFields = [];

export const occupyField = (piece) => {
  occupiedFields.push(piece);

  renderPieces();
};

export const getOccupiedFields = () => occupiedFields;

export const isFieldOccupied = (x, y) =>
  occupiedFields.some((piece) => piece.posX === x && piece.posY === y);

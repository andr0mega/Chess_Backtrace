import { getOccupiedFields } from '../board/board';
import Piece from './piece';

export default class Rook extends Piece {
  type = 'rook';
  getPossibleMoves() {
    let possibleFields = [];
    for (let x = 1; x <= 8; x++) {
      for (let y = 1; y <= 8; y++) {
        if (x === this.posX || y === this.posY) {
          getOccupiedFields().forEach((field) => {
            if (
              !(
                field.posX === x &&
                field.posY === y &&
                field.color === this.color
              )
            ) {
              possibleFields.push({ posX: x, posY: y });
            }
          });
        }
      }
    }
    const possibleFieldsOccupied = getOccupiedFields().filter((field) => {
      return (
        (field.posX === this.posX || field.posY === this.posY) && field !== this
      );
    });
    possibleFieldsOccupied.forEach((piece) => {
      if (piece.posX < this.posX) {
        possibleFields = possibleFields.filter((field) => {
          return field.posX > piece.posX;
        });
      }
      if (piece.posX > this.posX) {
        possibleFields = possibleFields.filter((field) => {
          return field.posX < piece.posX;
        });
      }
      if (piece.posY < this.posY) {
        possibleFields = possibleFields.filter((field) => {
          return field.posY > piece.posY;
        });
      }
      if (piece.posY > this.posY) {
        possibleFields = possibleFields.filter((field) => {
          return field.posY < piece.posY;
        });
      }
      if (piece.color !== this.color) {
        possibleFields.push({ posX: piece.posX, posY: piece.posY });
      }
    });
    return possibleFields;
  }
}

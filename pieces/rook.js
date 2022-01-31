import { getOccupiedFields } from '../board/board';
import Piece from './piece';

export default class Rook extends Piece {
  type = 'rook';
  getPossibleMoves() {
    let possibleFields = [];
    for (let x = 1; x <= 8; x++) {
      for (let y = 1; y <= 8; y++) {
        if (x === this.posX || y === this.posY) {
          possibleFields.push({ posX: x, posY: y });
        }
      }
    }
    const possibleFieldsOccupied = getOccupiedFields().filter((field) => {
      return field.posX === this.posX || field.posY === this.posY;
    });
    possibleFieldsOccupied.forEach((piece) => {
      possibleFields = possibleFields.filter((field) => {
        return !(this.posX === field.posX && this.posY === field.posY);
      });
      if (piece.posX < this.posX) {
        possibleFields = possibleFields.filter((field) => {
          if (piece.color !== this.color) {
            return field.posX >= piece.posX;
          }
          return field.posX > piece.posX;
        });
      }
      if (piece.posX > this.posX) {
        possibleFields = possibleFields.filter((field) => {
          if (piece.color !== this.color) {
            return field.posX <= piece.posX;
          }
          return field.posX < piece.posX;
        });
      }
      if (piece.posY < this.posY) {
        possibleFields = possibleFields.filter((field) => {
          if (piece.color !== this.color) {
            return field.posY >= piece.posY;
          }
          return field.posY > piece.posY;
        });
      }
      if (piece.posY > this.posY) {
        possibleFields = possibleFields.filter((field) => {
          if (piece.color !== this.color) {
            return field.posY <= piece.posY;
          }
          return field.posY < piece.posY;
        });
      }
    });
    return possibleFields;
  }
}

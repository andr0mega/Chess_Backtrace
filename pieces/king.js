import { getOccupiedFields } from '../board/board';
import Piece from './piece';

export default class King extends Piece {
  type = 'king';

  getPossibleMoves() {
    let possibleFields = [];
    for (let x = 1; x <= 8; x++) {
      for (let y = 1; y <= 8; y++) {
        const offsetX = x - this.posX;
        const offsetY = y - this.posY;
        if (offsetX <= 1 && offsetX >= -1 && offsetY <= 1 && offsetY >= -1) {
          possibleFields.push({ posX: x, posY: y });
        }
      }
    }
    const possibleFieldsOccupied = getOccupiedFields().filter((field) => {
      const offsetX = field.posX - this.posX;
      const offsetY = field.posY - this.posY;
      return offsetX <= 1 && offsetX >= -1 && offsetY <= 1 && offsetY >= -1;
    });
    possibleFieldsOccupied.forEach((piece) => {
      if (piece.color === this.color) {
        possibleFields = possibleFields.filter((field) => {
          return !(field.posX === piece.posX && field.posY === piece.posY);
        });
      }
    });
    return possibleFields;
  }
}

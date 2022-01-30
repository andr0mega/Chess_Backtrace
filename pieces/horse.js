import { getOccupiedFields } from '../board/board';
import Piece from './piece';

export default class Horse extends Piece {
  type = 'horse';

  getPossibleMoves() {
    let possibleFields = [];
    for (let x = 1; x <= 8; x++) {
      for (let y = 1; y <= 8; y++) {
        const distance = (x - this.posX) * (y - this.posY)
        if (distance === 2 || distance === -2) {
          possibleFields.push({ posX: x, posY: y });
        }
      }
    }
    const possibleFieldsOccupied = getOccupiedFields().filter((field) => {
      const distance = (field.posX - this.posX) * (field.posY - this.posY)
      return distance === 2 || distance === -2
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

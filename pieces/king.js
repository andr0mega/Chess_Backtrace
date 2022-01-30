import { getOccupiedFields } from '../board/board';
import Piece from './piece';

export default class King extends Piece {

  possibleMoves() {
    const possibleFields = [];
    for (let x = 1; x <= 8; x++) {
      for (let y = 1; y <= 8; y++) {
        const offsetX = x - this.posX;
        const offsetY = y - this.posY;
        if (offsetX <= 1 && offsetX >= -1 && offsetY <= 1 && offsetY >= -1) {
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
  }
}

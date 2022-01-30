import { isFieldOccupied, occupyField } from '../board/board';
import Bishop from '../pieces/bishop';
import Horse from '../pieces/horse';
import King from '../pieces/king';
import Pawn from '../pieces/pawn';
import Queen from '../pieces/queen';
import Rook from '../pieces/rook';

const pieces = [
  { color: 'white', type: 'pawn' },
  { color: 'white', type: 'horse' },
  { color: 'white', type: 'bishop' },
  { color: 'white', type: 'rook' },
  { color: 'white', type: 'queen' },
  { color: 'white', type: 'king' },
  { color: 'black', type: 'pawn' },
  { color: 'black', type: 'horse' },
  { color: 'black', type: 'bishop' },
  { color: 'black', type: 'rook' },
  { color: 'black', type: 'queen' },
  { color: 'black', type: 'king' }
];

const dragState = {
  get isDragging() {
    return this._isDragging;
  },
  set isDragging(value) {
    this._isDragging = value;
    if (value) {
      document.body.classList.add('dragging');
    } else {
      document.body.classList.remove('dragging');
    }
  },
  originX: 0,
  originY: 0,
  mouseX: 0,
  mouseY: 0,
  dragElement: null
};

export default () => {
  dragState.isDragging = false;
  window.addEventListener('mouseup', resetDragging);
  window.addEventListener('mousemove', trackElement);

  pieces.forEach((piece) => {
    const pieceElement = document.querySelector(
      `.piece-${piece.color}.${piece.type}`
    );
    pieceElement.addEventListener('mousedown', (event) =>
      initDragOnElement(event, piece.type, piece.color)
    );
  });
};

const initDragOnElement = (event, type, color) => {
  dragState.isDragging = true;
  event.target.classList.add('dragging');

  const { left, top } = event.target.getBoundingClientRect();

  const clonedElement = event.target.cloneNode(true);
  clonedElement.classList.add('cloned-element');
  clonedElement.style.transform = `translate3d(${left}px, ${top}px, 0)`;

  dragState.originX = left;
  dragState.originY = top;

  dragState.dragElement = { type, color };

  document.body.appendChild(clonedElement);
};

const trackElement = (e) => {
  if (dragState.isDragging) {
    const clonedElements = document.querySelectorAll('.cloned-element');
    clonedElements.forEach((el) => {
      const elementX = e.clientX - 50;
      const elementY = e.clientY - 50;
      el.style.transform = `translate3d(${elementX}px, ${elementY}px, 0)`;
    });

    dragState.mouseX = e.clientX;
    dragState.mouseY = e.clientY;
  }
};

const resetDragging = () => {
  dragState.isDragging = false;

  document
    .querySelectorAll('.cloned-element')
    .forEach(
      (el) =>
        (el.style.transform = `translate3d(${dragState.originX}px, ${dragState.originY}px, 0)`)
    );

  if (dragState.dragElement && dragState.mouseX && dragState.mouseY) {
    placePiece(dragState.dragElement, {
      mouseX: dragState.mouseX,
      mouseY: dragState.mouseY
    });
  }

  dragState.dragElement = null;

  setTimeout(() => {
    dragState.originX = 0;
    dragState.originY = 0;
    dragState.mouseX = 0;
    dragState.mouseY = 0;
    document
      .querySelectorAll('.dragging')
      .forEach((el) => el.classList.remove('dragging'));

    document
      .querySelectorAll('.cloned-element')
      .forEach((el) => document.body.removeChild(el));
  }, [300]);
};

const placePiece = ({ color, type }, { mouseX, mouseY }) => {
  const fieldPosition = calculateFieldPosition(mouseX, mouseY);

  if (fieldPosition) {
    if (!isFieldOccupied(fieldPosition.fieldX, fieldPosition.fieldY)) {
      switch (type) {
        case 'pawn':
          occupyField(
            new Pawn(fieldPosition.fieldX, fieldPosition.fieldY, color)
          );
          break;

        case 'horse':
          occupyField(
            new Horse(fieldPosition.fieldX, fieldPosition.fieldY, color)
          );
          break;

        case 'bishop':
          occupyField(
            new Bishop(fieldPosition.fieldX, fieldPosition.fieldY, color)
          );
          break;

        case 'rook':
          occupyField(
            new Rook(fieldPosition.fieldX, fieldPosition.fieldY, color)
          );
          break;
        case 'queen':
          occupyField(
            new Queen(fieldPosition.fieldX, fieldPosition.fieldY, color)
          );
          break;
        case 'king':
          occupyField(
            new King(fieldPosition.fieldX, fieldPosition.fieldY, color)
          );
          break;

        default:
          break;
      }
    }
  }
};

const calculateFieldPosition = (x, y) => {
  const fieldRect = document
    .querySelector('#chess-board')
    .getBoundingClientRect();

  const fieldX = x - fieldRect.left;
  const fieldY = y - fieldRect.top;

  const positionX = fieldX / (fieldRect.width / 8);
  const positionY = fieldY / (fieldRect.height / 8);

  if (positionX > 0 && positionX < 8 && positionY > 0 && positionY < 8) {
    return {
      fieldX: Math.ceil(positionX),
      fieldY: Math.ceil(positionY)
    };
  }
  return null;
};

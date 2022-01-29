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
  }
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
  }
};

const resetDragging = () => {
  dragState.isDragging = false;
  document
    .querySelectorAll('.dragging')
    .forEach((el) => el.classList.remove('dragging'));

  // document
  //   .querySelectorAll('.cloned-element')
  //   .forEach((el) => el.classList.add('placing'));

  // setTimeout(() => {
    document
      .querySelectorAll('.cloned-element')
      .forEach((el) => document.body.removeChild(el));
  // }, [300]);
};

import './styles/style.css';
import './styles/drag.css';
import initDrag from './ui/drag';
import { unRenderPossibleFields } from './board/render';

document.addEventListener("click", unRenderPossibleFields)

initDrag();



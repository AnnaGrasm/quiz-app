import { getElementsAll } from './getElement.js';

export function answerButton() {
  const allButtonShow = getElementsAll('button-show');

  const answer = getElementsAll('text-answer');

  allButtonShow.forEach((buttonShow, index) => {
    buttonShow.addEventListener('click', () => {
      answer[index].classList.toggle('card__answer--display');

      if (buttonShow.innerHTML === 'show answer') {
        buttonShow.innerHTML = 'hide answer';
      } else {
        buttonShow.innerHTML = 'show answer';
      }
    });
  });
}

export function answerButton() {
  const allButtonShow = document.querySelectorAll('[data-js="button-show"]');

  const answer = document.querySelectorAll('[data-js="text-answer"]');

  allButtonShow.forEach((buttonShow, index) => {
    buttonShow.addEventListener('click', () => {
      answer[index].classList.toggle('card__answer--display');

      if (buttonShow.innerHTML === 'show answer') {
        buttonShow.innerHTML = 'hide';
      } else {
        buttonShow.innerHTML = 'show answer';
      }
    });
  });
}

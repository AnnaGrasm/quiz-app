export function answerButton() {
  const allButtonShow = document.querySelectorAll('[data-js="button-show"]');

  const answer = document.querySelector('[data-js="text-answer"]');

  allButtonShow.forEach(buttonShow => {
    buttonShow.addEventListener('click', () => {
      answer.classList.add('card__answer--display');
      buttonShow.classList.toggle('card-display--none');
    });
  });
}

/* 
const buttonHide = document.querySelectorAll('[data-js="button-hide"]');

buttonShow.addEventListener('click', () => {
    answer.classList.add('card__answer--display');
    buttonShow.classList.add('card-display--none');
  });
  
  buttonHide.addEventListener('click', () => {
    answer.classList.remove('card__answer--display');
    buttonShow.classList.remove('card-display--none');
  }); */

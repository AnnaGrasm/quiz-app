const button = document.querySelector('[data-js="button-answer"]');
const answer = document.querySelector('[data-js="text-answer"]');

        function onButtonClick (){
            answer.classList.toggle('card__answer--display')
        }

        button.addEventListener("click", onButtonClick)
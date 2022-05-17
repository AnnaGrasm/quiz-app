const buttonShow = document.querySelector('[data-js="button-show"]');
const buttonHide = document.querySelector('[data-js="button-hide"]');
const answer = document.querySelector('[data-js="text-answer"]');



       

        buttonShow.addEventListener("click", () =>{
            answer.classList.add('card__answer--display');
            buttonShow.classList.add('card-display--none') 
        })

        buttonHide.addEventListener("click", () => {
            answer.classList.remove('card__answer--display');
            buttonShow.classList.remove('card-display--none') 
        })

       
       
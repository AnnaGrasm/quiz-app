const button = document.querySelector('[data-js="button-answer"]');
const answer = document.querySelector('[data-js="text-answer"]');
const bookmark = document.querySelector('[data-js="js-bookmark"]')

        function onButtonClick (){
            answer.classList.toggle('card__answer--display')
        }

        button.addEventListener("click", onButtonClick)

        function onBookmark (){
            bookmark.classList.add('card__bookmark-icon--active')
        }
        bookmark.addEventListener("click", onBookmark)
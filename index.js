const buttonShow = document.querySelector('[data-js="button-show"]');
const buttonHide = document.querySelector('[data-js="button-hide"]');
const answer = document.querySelector('[data-js="text-answer"]');

const bookmark =document.querySelector('[data-js="js-bookmark"]');


const homeIcon = document.querySelector('[data-js="nav__icon-home"]');
const homeSite = document.querySelector('[data-js="home-js"]');

const bookmarkIcon = document.querySelector('[data-js="nav__icon-bookmark"]');
const bookmarkSite = document.querySelector('[data-js="bookmark-js"]');

const createIcon = document.querySelector('[data-js="nav__icon-create"]');
const createSite = document.querySelector('[data-js="create-js"]');

const profileIcon = document.querySelector('[data-js="nav__icon-profile"]');
const profileSite = document.querySelector('[data-js="profile-js"]');



       

        buttonShow.addEventListener("click", () =>{
            answer.classList.add('card__answer--display');
            buttonShow.classList.add('card-display--none') 
        })

        buttonHide.addEventListener("click", () => {
            answer.classList.remove('card__answer--display');
            buttonShow.classList.remove('card-display--none') 
        })

       bookmark.addEventListener('click', () => {
           bookmark.classList.toggle('card__bookmark-icon--active')
       })
       
       homeIcon.addEventListener('click', () =>{
        homeSite.classList.toggle("home")
       })

       bookmarkIcon.addEventListener('click', () =>{
        bookmarkSite.classList.add("bookmark")
       })


import { bookmarks } from './js/bookmarks.js';
import { answerButton } from './js/answerButton.js';

bookmarks();
answerButton();

const homeIcon = document.querySelector('[data-js="nav__icon-home"]');
const homeSite = document.querySelector('[data-js="home-js"]');

const bookmarkIcon = document.querySelector('[data-js="nav__icon-bookmark"]');
const bookmarkSite = document.querySelector('[data-js="bookmark-js"]');

const createIcon = document.querySelector('[data-js="nav__icon-create"]');
const createSite = document.querySelector('[data-js="create-js"]');

const profileIcon = document.querySelector('[data-js="nav__icon-profile"]');
const profileSite = document.querySelector('[data-js="profile-js"]');

//sections
homeIcon.addEventListener('click', () => {
  bookmarkSite.classList.remove('section--active');
  createSite.classList.remove('section--active');
  profileSite.classList.remove('section--active');
  homeSite.classList.add('section--active');
});

bookmarkIcon.addEventListener('click', () => {
  homeSite.classList.remove('section--active');
  createSite.classList.remove('section--active');
  profileSite.classList.remove('section--active');
  bookmarkSite.classList.add('section--active');
});

createIcon.addEventListener('click', () => {
  homeSite.classList.remove('section--active');
  bookmarkSite.classList.remove('section--active');
  profileSite.classList.remove('section--active');
  createSite.classList.add('section--active');
});

profileIcon.addEventListener('click', () => {
  homeSite.classList.remove('section--active');
  bookmarkSite.classList.remove('section--active');
  createSite.classList.remove('section--active');
  profileSite.classList.add('section--active');
});

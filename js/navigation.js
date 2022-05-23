import { getElement } from './getElement.js';

export function navigation() {
  const homeIcon = getElement('nav__icon-home');
  const homeSite = getElement('home-js');

  const bookmarkIcon = getElement('nav__icon-bookmark');
  const bookmarkSite = getElement('bookmark-js');

  const createIcon = getElement('nav__icon-create');
  const createSite = getElement('create-js');

  const profileIcon = getElement('nav__icon-profile');
  const profileSite = getElement('profile-js');

  function homeIconActive() {
    homeIcon.classList.add('nav-icon--active');
    bookmarkIcon.classList.remove('nav-icon--active');
    createIcon.classList.remove('nav-icon--active');
    profileIcon.classList.remove('nav-icon--active');
  }

  function bookmarkIconActive() {
    homeIcon.classList.remove('nav-icon--active');
    bookmarkIcon.classList.add('nav-icon--active');
    createIcon.classList.remove('nav-icon--active');
    profileIcon.classList.remove('nav-icon--active');
  }

  function createIconActive() {
    homeIcon.classList.remove('nav-icon--active');
    bookmarkIcon.classList.remove('nav-icon--active');
    createIcon.classList.add('nav-icon--active');
    profileIcon.classList.remove('nav-icon--active');
  }

  function profileIconActive() {
    homeIcon.classList.remove('nav-icon--active');
    bookmarkIcon.classList.remove('nav-icon--active');
    createIcon.classList.remove('nav-icon--active');
    profileIcon.classList.add('nav-icon--active');
  }

  homeIcon.addEventListener('click', () => {
    homeIconActive();
    homeSite.classList.remove('section--active');
    bookmarkSite.classList.remove('section--active');
    createSite.classList.remove('section--active');
    profileSite.classList.remove('section--active');
    homeSite.classList.add('section--active');
  });

  bookmarkIcon.addEventListener('click', () => {
    bookmarkIconActive();
    homeSite.classList.remove('section--active');
    createSite.classList.remove('section--active');
    profileSite.classList.remove('section--active');
    bookmarkSite.classList.add('section--active');
  });

  createIcon.addEventListener('click', () => {
    createIconActive();
    homeSite.classList.remove('section--active');
    bookmarkSite.classList.remove('section--active');
    profileSite.classList.remove('section--active');
    createSite.classList.add('section--active');
  });

  profileIcon.addEventListener('click', () => {
    profileIconActive();
    homeSite.classList.remove('section--active');
    bookmarkSite.classList.remove('section--active');
    createSite.classList.remove('section--active');
    profileSite.classList.add('section--active');
  });
}

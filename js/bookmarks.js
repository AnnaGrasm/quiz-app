import { getElementsAll } from './getElement.js';

export function bookmarks() {
  const allBookmarkButtons = getElementsAll('js-bookmark');

  allBookmarkButtons.forEach(bookmarkButton => {
    bookmarkButton.addEventListener('click', () => {
      bookmarkButton.classList.toggle('card__bookmark-icon--active');
    });
  });
}

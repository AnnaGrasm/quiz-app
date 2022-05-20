export function bookmarks() {
  // a NodeList with 3 bookmarkButtons:
  const allBookmarkButtons = document.querySelectorAll(
    '[data-js="js-bookmark"]'
  );

  allBookmarkButtons.forEach(bookmarkButton => {
    bookmarkButton.addEventListener('click', () => {
      bookmarkButton.classList.toggle('card__bookmark-icon--active');
    });
  });
}

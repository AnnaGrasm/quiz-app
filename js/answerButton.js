export function answerButton() {
  const cardsContainer = document.querySelector('[data-js="card-section"]');

  const cards = [
    {
      question: 'What is git?',
      answer: 'Git is a tool to work with code.',
      tags: ['git', 'shell'],
    },
    {
      question: 'What is CSS?',
      answer: 'Cascading style sheets. Google it.',
      tags: ['CSS', 'basic', 'web'],
      isBookmarked: true,
    },
    {
      question: 'What is JS?',
      answer: 'Cascading style sheets. Google it.',
      tags: ['JS', 'basic', 'web'],
      isBookmarked: true,
    },
    {
      question: 'What is HTML?',
      answer: 'HTML is Hypertext Markup Language. Google it.',
      tags: ['HTML', 'basic', 'web'],
    },
  ];

  renderCards();

  function renderCards() {
    cardsContainer.innerHTML = '';
    cards.forEach(card => {
      const cardElement = document.createElement('div');
      cardElement.className = 'card__content';
      cardElement.innerHTML = `
    <h2 class="card__heading">Question</h2>
      <p class="card__question">${card.question}</p>
      <button class="card__bookmark${
        card.isBookmarked ? ' card__bookmark--active' : ''
      }" 
        data-js="bookmark">
      </button>
      <button data-js="card-button" class="button" >Toggle answer</button>
      <div data-js="answer" hidden class="card__question">
            <h2 class="card__heading">Answer</h2>
            <p class="card-answer__content">
            ${card.answer}
            </p>
            <ul role="list" class="card__tag-list">
          ${card.tags.map(tag => `<li class="card__tag">${tag}</li>`).join('')}
        </ul>
          </div>
    `;
      cardsContainer.append(cardElement);

      const answerButton = cardElement.querySelector('[data-js=card-button]');
      const answerElement = cardElement.querySelector('[data-js=answer]');

      answerButton.addEventListener('click', () => {
        answerElement.toggleAttribute('hidden');
      });

      const bookmarkElement = cardElement.querySelector('[data-js=bookmark]');
      bookmarkElement.addEventListener('click', () => {
        card.isBookmarked = !card.isBookmarked;
        bookmarkElement.classList.toggle('card__bookmark--active');
      });
    });
  }
}

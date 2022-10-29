const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle('show', entry.isIntersecting);
  },
  {
    threshold: 1
  });
});

const lastCardObesrver = new IntersectionObserver(entries => {
  const lastCard = entries[0];
  if (!lastCard.isIntersecting) return;
  loadNewCards();

  lastCardObesrver.unobserve(lastCard.target);

  const newLastCard = document.querySelector('.card:last-child');
  lastCardObesrver.observe(newLastCard);
}, {
  // load before last 100px are visible
  rootMargin: '100px'
});

const lastCard = document.querySelector('.card:last-child');
lastCardObesrver.observe(lastCard);

cards.forEach(card => observer.observe(card));

const loadNewCards = () => {
  const cardContainer = document.querySelector('.card-container');

  for(let i = 0; i < 10; i++) {
    const card = document.createElement('div');
    card.textContent = 'Standard card';
    card.classList.add('card');
    observer.observe(card);
    cardContainer.append(card);
  }
};
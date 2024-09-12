document.addEventListener('DOMContentLoaded', () => {
  function openModal(title, description, imageSrc) {
      const modal = document.querySelector('#modal-1');
      modal.querySelector('#modal-title').textContent = title;
      modal.querySelector('#modal-description').textContent = description;
      modal.querySelector('#modal-image').src = imageSrc;
      modal.classList.add('show');
  }

  function closeModal() {
      const modal = document.querySelector('#modal-1');
      modal.classList.remove('show');
  }

  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
      card.addEventListener('click', () => {
          const title = card.querySelector('.project-name').textContent;
          const description = card.getAttribute('data-description');
          const imageSrc = card.querySelector('img').src;
          openModal(title, description, imageSrc);
      });
  });

  document.querySelector('.modal-close').addEventListener('click', closeModal);

  document.querySelector('#modal-1').addEventListener('click', (e) => {
      if (e.target === e.currentTarget) {
          closeModal();
      }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  function openModal(title, description, imageSrc) {
      const modal = document.querySelector('#modal-2');
      modal.querySelector('#modal-title2').textContent = title;
      modal.querySelector('#modal-description2').textContent = description;
      modal.querySelector('#modal-image2').src = imageSrc;
      modal.classList.add('show');
  }

  function closeModal() {
      const modal = document.querySelector('#modal-2');
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

  document.querySelector('.modal-close2').addEventListener('click', closeModal);

  document.querySelector('#modal-2').addEventListener('click', (e) => {
      if (e.target === e.currentTarget) {
          closeModal();
      }
  });
});

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('copy', function(e) {
    e.preventDefault();
    alert('Kopyalama işlemi devre dışı bırakıldı.');
});
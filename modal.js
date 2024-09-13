const modal = document.getElementById('modal-1');
const modalClose = document.querySelector('.modal-close');
const contactButton = document.querySelector('.contact-button img');
const playButton = document.getElementById('play-button');

function openModal() {
  modal.classList.add('show');
}

function closeModal() {
  modal.classList.remove('show');
}

function handleContactClick() {
  openModal();
}

function redirectToMainPage() {
  window.location.href = 'main.html';
}

document.addEventListener('DOMContentLoaded', function() {
  contactButton.addEventListener('click', handleContactClick);

  playButton.addEventListener('click', redirectToMainPage);

  modalClose.addEventListener('click', closeModal);

  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeModal();
    }
  });
});

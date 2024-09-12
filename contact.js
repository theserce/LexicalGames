const signUpButton = document.getElementById('contact-right');
const signInButton = document.getElementById('contact-left');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('copy', function(e) {
    e.preventDefault();
    alert('Kopyalama işlemi devre dışı bırakıldı.');
});
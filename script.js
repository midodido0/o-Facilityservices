const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;

    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    })
    .then(function(response) {
        if (response.ok) {
            formStatus.textContent = 'Danke, ' + name + '! Ihre Nachricht wurde gesendet.';
            formStatus.style.color = '#4a7c59';
            form.reset();
        } else {
            formStatus.textContent = 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.';
            formStatus.style.color = 'red';
        }
    })
    .catch(function() {
        formStatus.textContent = 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.';
        formStatus.style.color = 'red';
    });
});
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.querySelector('#main-nav ul');

menuToggle.addEventListener('click', function() {
    mainNav.classList.toggle('show');
});
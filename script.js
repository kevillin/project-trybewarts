const buttonHeader = document.querySelector('#button-header');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const buttonSubmit = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');
const comments = document.querySelector('#textarea');
const counter = document.querySelector('#counter');

buttonHeader.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    window.alert('Olá, Tryber!');
  } else window.alert('Email ou senha inválidos.');
});

buttonSubmit.disabled = true;

agreement.addEventListener('click', () => {
  if (agreement.checked) {
    buttonSubmit.disabled = false;
  }
});

comments.addEventListener('input', () => {
  counter.innerText = 500 - comments.value.length;
});

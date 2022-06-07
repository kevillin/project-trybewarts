const buttonHeader = document.querySelector('#button-header');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const textArea = document.querySelector('textarea');

buttonHeader.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    window.alert('Olá, Tryber!');
  } else window.alert('Email ou senha inválidos.');
});



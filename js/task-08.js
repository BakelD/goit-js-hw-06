const formEl = document.querySelector('form.login-form');
const emailEl = formEl.querySelector('[name="email"]');
const passwordEl = formEl.querySelector('[name="password"]');

formEl.addEventListener('submit', e => {
  e.preventDefault();

  const { email, password } = e.target.elements;

  const emailValue = email.value;
  const passwordValue = password.value;

  if (!emailValue || !passwordValue) {
    alert('all fields must be filled in');
    return;
  }

  displayData({ emailValue, passwordValue });

  emailEl.value = '';
  passwordEl.value = '';
});

function displayData(obj) {
  console.log(obj);
}

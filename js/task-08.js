const formEl = document.querySelector('form.login-form');
const emailEl = formEl.querySelector('[name="email"]');
const passwordEl = formEl.querySelector('[name="password"]');

formEl.addEventListener('submit', e => {
  e.preventDefault();

  const { email: emailValue, password: passwordValue } = e.target.elements;

  const email = emailValue.value;
  const password = passwordValue.value;

  if (!email || !password) {
    alert('all fields must be filled in');
    return;
  }

  displayData({ email, password });

  emailEl.value = '';
  passwordEl.value = '';
});

function displayData(obj) {
  console.log(obj);
}

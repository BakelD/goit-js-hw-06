const formEl = document.querySelector('form.login-form');
const emailEl = formEl.querySelector('[name="email"]');
const passwordEl = formEl.querySelector('[name="password"]');

formEl.addEventListener('submit', e => {
  e.preventDefault();

  const email = emailEl.value;
  const password = passwordEl.value;

  if (!email || !password) {
    alert('all fields must be filled in');
    return;
  }

  displayData({ email, password });

  emailEl.value = '';
  passwordEl.value = '';
});

function displayData(obj) {
  for (const prop in obj) {
    console.log(`${prop} -> ${obj[prop]}`);
  }
}

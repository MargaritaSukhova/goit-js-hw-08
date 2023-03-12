import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const formData = {};

formEl.addEventListener('input', throttle(handleFormInput, 500));
formEl.addEventListener('submit', handleFormSubmit);

function handleFormInput(event) {
  // formData[event.target.name] = event.target.value;
  formData.email = formEl.elements.email.value;
  formData.message = formEl.elements.message.value;
  console.log(formData);
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}
// console.log(localStorage.getItem(LOCALSTORAGE_KEY));

if (localStorage.getItem(LOCALSTORAGE_KEY) !== null) {
  const savedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  formEl.elements.email.value = savedData.email || '';
  formEl.elements.message.value = savedData.message || '';
} else {
  formEl.elements.email.value = '';
  formEl.elements.message.value = '';
}

function handleFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

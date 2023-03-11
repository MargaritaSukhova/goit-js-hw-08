// import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener(
  'input',
  (onFormInput = event => {
    console.log(event.elements);
  })
);

// function onFormInput(event) {
//   console.log(event.elements);
// }

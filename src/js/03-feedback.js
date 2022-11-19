import '../css/common.css';
import '../css/03-feedback.css';
const  throttle = require('lodash.throttle');


const form =  document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);
// refs.inputMessage.addEventListener('input', onInputMessage);

let formData = {};
form.addEventListener ('input', throttle (event => {
  formData[event.target.name] = event.target.value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify (formData))
}, 500));

function onFormSubmit (event) {
    event.preventDefault();
    const {email, message} = event.target;
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();
    console.log ({
      email: emailValue,
      message: messageValue,
    });

    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
}

const load = key => {
    try {
      const savedInputs = localStorage.getItem(key);
      return savedInputs ? JSON.parse(savedInputs) : undefined;
    } catch (error) {
      console.error(error.message);
    }
  };
  
  const storageData = load('feedback-form-state');
  if (storageData) {
    formData = storageData;
    const keys = Object.keys(formData);
    for (const key of keys) {
      form.elements[key].value = formData[key];
    }
  }


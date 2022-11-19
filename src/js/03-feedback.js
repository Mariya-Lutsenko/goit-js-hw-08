import '../css/common.css';
import '../css/03-feedback.css';
const  throttle = require('lodash.throttle');


const refs = {
 form: document.querySelector('.feedback-form'),
 inputEmail: document.querySelector('.feedback-form input'),
 inputMessage: document.querySelector('.feedback-form textarea'),   
}

refs.form.addEventListener('submit', onFormSubmit);
// refs.inputMessage.addEventListener('input', onInputMessage);

const formData = {};
refs.form.addEventListener ('input', throttle (event => {
    const formData = {email: refs.inputEmail.value, message: refs.inputMessage.value};
    console.log (formData);
    localStorage.setItem('feedback-form-state', JSON.stringify (formData))
}, 500));

function onFormSubmit (event) {
    event.preventDefault();
    console.log({email: refs.inputEmail.value, message: refs.inputMessage.value});
    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
}

const load = key => {
    try {
      const savedInputs = localStorage.getItem(key);
      return savedInputs === null ? undefined : JSON.parse(savedInputs);
    } catch (error) {
      console.error(error.message);
    }
  };
  
  const storageData = load('feedback-form-state');
  if (storageData) {
    refs.email.value = storageData.email;
    refs.message.value = storageData.message;
  }


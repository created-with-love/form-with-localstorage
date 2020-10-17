import throttle from 'lodash.throttle';
import './css/common.css';
import './css/localstrg.css';
import './css/feedback.css'
// import createFeedbackMsg from './templates/feedback-msg.hbs'
import { createFeedbackMsg } from './createMessage.js'
import { deleteMessage } from './createMessage.js'


const refs = {
  form: document.querySelector('.js-feedback-form'),
  textarea: document.querySelector('.js-feedback-form  textarea'),
  input: document.querySelector('.js-feedback-form  input'),
  feedbackList: document.querySelector('.feedback-list'),
  inputName : document.querySelector('.input-name'),
  submitBtn: document.querySelector('.submit-btn'),
  id: 1,
};

refs.form.addEventListener('submit', onFormSubmit);

populateForm();


 const feedbacklist = document.querySelector('.feedback-list');
 let messagesCount = feedbacklist.childElementCount +1;
/*
 * - Останавливаем поведение по умолчанию
 * - Убираем сообщение из хранилища
 * - Очищаем форму
 */
function onFormSubmit(evt) {
  evt.preventDefault();
  const feedbackCounter = document.querySelector('.feedback-counter');
  messagesCount +=1

  if (messagesCount > 0) {
    feedbackCounter.textContent = null;
  }

 
  const newMessage = createFeedbackMsg(refs.inputName.value, refs.textarea.value, refs.id);
  refs.feedbackList.insertAdjacentHTML('beforeend', newMessage);
  refs.id += 1;

  console.log('Отправляем форму');
  evt.currentTarget.reset();
  // маштабирую очистку моего хранилища перебором сета ключей
  formDataKeys.forEach(item => localStorage.removeItem(item))
}

/*
 * - Получаем значение из хранилища
 * - Если там что-то было, обновляем DOM
 */

const formData = {};
// создаю массив ключей обьекта formData;
const formDataKeys = new Set();

refs.form.addEventListener('input', throttle((e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(e.target.name, e.target.value);
  formDataKeys.add(e.target.name)
}), 500));



// эту функцию нужно масштабировать. Придумать перебор по ключам обьекта formDataKeys 
function populateForm() {
  const userName = localStorage.getItem('name');
  const message = localStorage.getItem('message');

  if (userName) {
    refs.input.value = userName;
  }
  if(message) {
    refs.textarea.value = message;
  }


}





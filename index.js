import throttle from 'lodash.throttle';
import './css/common.css';
import './css/localstrg.css';

const refs = {
  form: document.querySelector('.js-feedback-form'),
  textarea: document.querySelector('.js-feedback-form  textarea'),
  input: document.querySelector('.js-feedback-form  input'),
};

refs.form.addEventListener('submit', onFormSubmit);

populateForm();

/*
 * - Останавливаем поведение по умолчанию
 * - Убираем сообщение из хранилища
 * - Очищаем форму
 */
function onFormSubmit(evt) {
  evt.preventDefault();

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

console.log(refs.form)
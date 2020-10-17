export function createFeedbackMsg(name, message, id) {

// узнаю текущее время для передачи его около имени в отзыве
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    
  return `
  <li class="feedback-message" id="message-${id}">
    <form class="feedback-message__form">
        <label class="feedback-message__item">
            <span>Пользователь:</span>
            <input type="text" name="name" class="input-name input-name-${id}" value="${name}" readonly />
            </br>
            <span>Оставил отзыв: ${today}</span>
        </label>

        <label class="feedback-message__item">
            <textarea name="message" rows="6" class="textarea textarea-${id} ta" readonly>
            ${message}
            </textarea>
        </label>
    </form>
    <div class="controls controls-${id}">
      <button type="button" class="message-btn edit ${id} edit-${id}">Редактировать</button>
      <button type="button" class="message-btn delete ${id}">Удалить</button>
    </div>
</li>`;
}



export function deleteMessage(id) {
    const currentMessage = document.querySelector(`#message-${id}`);
    currentMessage.remove();
}





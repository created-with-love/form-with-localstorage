const inputName = document.querySelector('.input-name');
const submitBtn = document.querySelector('.submit-btn');
const feedbacklist = document.querySelector('.feedback-list');
import { deleteMessage } from './createMessage.js'


inputName.addEventListener('focus', () => {
    inputName.value = '';

    
})

inputName.addEventListener('blur', () => {
    if (inputName.value === '') {
        inputName.value = "Анонимус";
    }
})

feedbacklist.addEventListener('click', onDeleteBtnClick);
feedbacklist.addEventListener('click', onEditBtnClick);
feedbacklist.addEventListener('click', onSaveBtnClick);

function onDeleteBtnClick(e) {
    if (e.target.nodeName !== 'BUTTON') return;
    
    // console.log(e.target.classList[2]);
    if (e.target.classList.contains('delete')) {
        deleteMessage(e.target.classList[2]);

             const feedbackCounter = document.querySelector('.feedback-counter');
           const feedbacklist1 = document.querySelector('.feedback-list');
            let messagesCount1 = feedbacklist1.childElementCount +1;

            if (messagesCount1 <= 1) {
                feedbackCounter.textContent = "Здесь еще нет отзывов, Вы можете оставить первый";
        }
        

    }


  
}

function onEditBtnClick(e) {
    if (e.target.nodeName !== 'BUTTON') return;
    console.log(e.target.classList)
    
     if (e.target.classList.contains('edit')) {
         const currentMessageID = (e.target.classList[2]);
         const currentControlsBox = document.querySelector(`.controls-${currentMessageID}`)
         
         const currentinputName = document.querySelector(`.input-name-${currentMessageID}`);
         const currentTextArea = document.querySelector(`.textarea-${currentMessageID}`);
         currentTextArea.style = "background-color: white;";

        const currentEditBtn = document.querySelector(`.edit-${currentMessageID}`);
        currentEditBtn.style = "display: none;"
         
         currentinputName.style = "background-color: white; border: 1px solid black; border-radius: 2px"
         currentinputName.removeAttribute('readonly');
         currentTextArea.removeAttribute('readonly');
         
        currentControlsBox.insertAdjacentHTML('afterbegin', createSaveBtn(currentMessageID))
    }

}


function createSaveBtn(id) {
    return `
    <button type="button" class="message-btn save ${id} save-${id}">Сохранить</button>
    `
}

function onSaveBtnClick(e) {
    if (e.target.nodeName !== 'BUTTON') return;

    const currentMessageID = (e.target.classList[2]);
    const currentinputName = document.querySelector(`.input-name-${currentMessageID}`);
    const currentTextArea = document.querySelector(`.textarea-${currentMessageID}`);
    const currentEditBtn = document.querySelector(`.edit-${currentMessageID}`);


    if (e.target.classList.contains('save')) {
        currentinputName.setAttribute('readonly', true);
        currentTextArea.setAttribute('readonly', true);
        currentinputName.style = "background-color: blanchedalmond; border: 0;"
        
        const currentSaveBtn = document.querySelector(`.save-${currentMessageID}`);
        currentSaveBtn.remove();
    
        currentTextArea.style = "background-color: rgb(242, 235, 226);";
        currentEditBtn.style = "display: inline-block;"
    }
    


}



// счетчик отзывов

// const feedbacklist = document.querySelector('.feedback-list');
console.log(feedbacklist)
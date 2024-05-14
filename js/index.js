import ValidateInput from '../class/ValidateInput.js';

const form = document.getElementById('app');
const cancelBtn = document.querySelector('.cancel-btn');

const input = new ValidateInput(app,{
        type: 'text',
        value: '',
        placeholder: 'Введите имя ....'
});

const input2 = new ValidateInput(app,{
    type: 'text',
    value: '',
    placeholder: 'Введите ваш логин ....'
});


form.addEventListener('submit',(event) => {
    event.preventDefault();
    input.validateInput();
    input2.validateInput();
    if(input.validateInput() && input2.validateInput()){
        alert('Messages are sent');
        input.value = '';
        input2.value = '';
    }
});

cancelBtn.addEventListener('click', () => {
    input.deleteLabelError();
    input2.deleteLabelError();
    input.value = '';
    input2.value = '';
});





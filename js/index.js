import ValidateInput from '../class/ValidateInput.js';

const form = document.getElementById('app');
const cancelBtn = document.querySelector('.cancel-btn');

const name = new ValidateInput(app,{
        type: 'text',
        value: '',
        placeholder: 'Введите имя ....'
});

const login = new ValidateInput(app,{
    type: 'text',
    value: '',
    placeholder: 'Введите ваш логин ....'
});


form.addEventListener('submit',(event) => {
    event.preventDefault();
    name.validateInput();
    login.validateInput();
    if(name.validateInput() && login.validateInput()){
        alert('Messages are sent');
        name.value = '';
        login.value = '';
    }

});

cancelBtn.addEventListener('click', () => {
    name.deleteLabelError();
    login.deleteLabelError();
    name.value = '';
    login.value = '';
});





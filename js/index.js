import ValidateInput from '../class/ValidateInput.js';
import PasswordValidInput from '../class/PasswordValidInput.js';
import LoginValidInput from '../class/LoginValidInput.js';

const form = document.getElementById('app');

const cancelBtn = document.querySelector('.cancel-btn');

const name = new ValidateInput(app,{
        type: 'text',
        value: '',
        placeholder: 'Введите имя ....'
});

const login = new LoginValidInput(app,{
    type: 'text',
    value: '',
    placeholder: 'Введите ваш логин'
});

const password = new PasswordValidInput(app,{
    type: 'password',
    value: '',
    placeholder: 'Введите ваш пароль ....'
});

password.checkValue();

form.addEventListener('submit',(event) => {
    event.preventDefault();
    const validName = name.validateInput();
    const validLogin = login.validateInput();
    const validPassword = password.validateInput();

    if(validName && validLogin && validPassword){
        alert('Messages are sent');
        name.value = '';
        login.value = '';
    }

});

cancelBtn.addEventListener('click', () => {
    name.deleteLabelError();
    login.deleteLabelError();
    password.deleteLabelError();
    name.value = '';
    login.value = '';
    password.value = '';
});





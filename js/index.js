import {ValidateInput} from '../Class/validateInp.js'

const app = document.getElementById('app');

const input = new ValidateInput(app,{
    type: 'text',
    value: '',
    placeholder: 'Имя'
});


if(input.value == ''){
    input.appendError('Введите имя');
}

input.value = 'Vasya';
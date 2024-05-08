import {ValidateInput} from '../Class/validateInp.js'

const app = document.getElementById('app');

const input = new ValidateInput(app,{
    type: 'text',
    value: '',
    placeholder: 'Имя'
});
const input2 = new ValidateInput(app,{
    type: 'text',
    value: '',
    placeholder: 'sdfsfd'
});

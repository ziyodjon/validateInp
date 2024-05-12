import {ValidateInput} from '../Class/validateInp.js'

const app = document.getElementById('app');

const input = new ValidateInput(app,{
    type: 'text',
    value: 'ddd',
    placeholder: 'Имя'
});
const input2 = new ValidateInput(app,{
    type: 'text',
    value: 'eee',
    placeholder: 'Another'
});

input.createError('Type your name here','top');


input2.createError('Type your name','bottom');

//input.updateLabelText('Changed text here');

input.type = 'text';

input.value = 'test';
input2.value = 'test2';
input.placeholder = 'Hello motto';
input2.placeholder = 'Hello motto2';

console.log(input.placeholder);






import ErrorInput from './ErroInp.js';

export default class ValidateInput extends ErrorInput{

    constructor(container,inptObj){
        super(container,inptObj);
        
        this.input.addEventListener('input',() =>{
            this.validateInput(this.value);
        });
    }

    

    validateInput(input) {

        if (input === '') {
          this.createError('Введите текст....');
          this.input.classList.add('error');
        }  else {
          this.deleteLabelError();
        }

      }
}

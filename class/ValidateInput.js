import ErrorInput from './ErroInp.js';

export default class ValidateInput extends ErrorInput{

    constructor(container,inptObj){
        
        super(container,inptObj);
        
        this.input.addEventListener('input',() =>{
            this.validateInput(this.value);
        });
    }

    validateInput() {
        if (this.chekValue()) {
          this.createError(this.placeholder);
          this.input.classList.add('error');
          return false;
        }  else {
            this.input.classList.remove('error');
            this.deleteLabelError();
        }

        return true;

    }

    chekValue(){
        return this.value === '';  
    }
}

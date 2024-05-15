import ErrorInput from './ErroInp.js';

export default class ValidateInput extends ErrorInput{

    constructor(container,inptObj){
        
        super(container,inptObj);
        
        this.input.addEventListener('input',() =>{
            this.validateInput();
        });
    }

    validateInput() {
        
        if (this.checkValue()) {
          this.createError(this.placeholder);
          this.input.classList.add('error');
          return false;
        } else {
            this.input.classList.remove('error');
            this.deleteLabelError();
            return true;
        }

    }

    checkValue(){
        console.log('check father');
        return this.value === '';  
    }
}

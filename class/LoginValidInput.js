import ValidateInput from "./ValidateInput.js";

export default class LoginValidInput extends ValidateInput{
    constructor(container,inptObj){
        super(container,inptObj);
        this.errorLabel = 'Введите ваш логин';
    }


    checkValue(){

        if(this.value === '' || this.value.length < 3){
            return true;
        }
        return false;
    }
    

}
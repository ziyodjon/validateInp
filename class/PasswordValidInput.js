import ValidateInput from "./ValidateInput.js";

export default class PasswordValidInput extends ValidateInput{
    constructor(container,inptObj){
        super(container,inptObj);
        this.errorLabel = 'Введите не меньше 6 знаков и не больше 15 знаков';
    }


    checkValue(){

        if(this.value === '' || this.value.length < 6 || this.value.length > 15){
            return true;
        }
        return false;
    }
    

}
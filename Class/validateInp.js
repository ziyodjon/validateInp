export class ValidateInput{
    
   

    constructor(container,inptObj){

        this.container = container;
        this.type = inptObj.type;
        this.value = inptObj.value;
        this.placeholder = inptObj.placeholder;

        const input = document.createElement('input');
        input.type = this.type;
        input.value = this._inputValue;
        input.placeholder = this.placeholder;
        this.container.append(input);

    }
    

    appendError(text){
        const label = document.createElement('label');
        label.textContent = text;
        label.classList.add('error');
        
        this.container.append(label);
    }

    preappendError(text){
        const label = document.createElement('label');
        label.textContent = text;
        label.classList.add('error');

        this.container.prepend(label);
    }

    

    



}
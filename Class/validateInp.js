export default class ValidateInput{

    constructor(container,inptObj){

        this.inputWrapper = document.createElement('div');
        this.inputWrapper.classList.add('inputWrapper');
        this.input = document.createElement('input');
                
        this.container = container;
        this.type = inptObj.type;
        this.value = inptObj.value;
        this.placeholder = inptObj.placeholder;

        this.inputWrapper.append(this.input);
        this.container.append(this.inputWrapper);
    }

    get type (){
        if(this.input.type){
            return this.input.type;
        }
    }

    set type(value){
        this.input.type = this.type;
        if(this.input.type){
            this.input.type = value;
        }      
    }

    get value (){
        if(this.input.value){
            return this.input.value;
        }
    }

    set value(value){
        this.input.value = this.value;
        if(this.input.value){
            this.input.value = value;
        }      
    }

    get placeholder (){
        if(this.input.placeholder){
            return this.input.placeholder;
        }
    }

    set placeholder(value){
        this.input.placeholder = this.placeholder;
        if(this.input.placeholder){
            this.input.placeholder = value;
        }      
    }


    createLabelError(text){
        this.deleteLabelError();
        this.label = document.createElement('label');
        this.label.textContent = text;
        this.label.classList.add('error');

        return this.label; 
    }

    deleteLabelError(){
        if(this.label){
            this.label.remove();
        }
    }
    
    createError(text,position = 'bottom'){
        
        this.labelError = this.createLabelError(text);
        
        if(position === 'bottom'){;
            this.inputWrapper.append(this.labelError);
        }
        
        if(position === 'top'){
            this.inputWrapper.prepend(this.labelError);
        }
        
    }

    updateLabelText(text){
        if(this.label){
            this.label.textContent = text;
        }
    }

}
export class ValidateInput{

    _type ='';

    constructor(container,inptObj){

        this.container = container;
        this.label = document.createElement('label');
        this.type = inptObj.type;
        this.value = inptObj.value;
        this.placeholder = inptObj.placeholder;

        this.inputWrapper = document.createElement('div');
        this.inputWrapper.classList.add('inputWrapper');
        this.input = document.createElement('input');
        this.input.type = this.type;
        this.input.value = this.value;
        this.input.placeholder = this.placeholder;
        this.inputWrapper.append(this.input);
        this.container.append(this.inputWrapper);

    }

    get type (){
        return this._type;
    }

    set type(value){
        if(value === 'button'){
            console.log(value);
            this.updateLabelText('Hello moto');
            return this._type = value;
        }        
    }

    createLabelError(text){
        this.deleteLabelError();
        this.label.textContent = text;
        this.label.classList.add('error');

        return this.label; 
    }

    deleteLabelError(){
        if(this.label){
            this.label.remove();
            //this.label = null;
        }
    }
    
    createError(text,position = 'bottom'){
        
        this.labelError = this.createLabelError(text);
        
        if(position === 'bottom'){;
            this.deleteLabelError();
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
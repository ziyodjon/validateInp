export class ValidateInput{

    constructor(container,inptObj){

        this.container = container;
        this.type = inptObj.type;
        this.value = inptObj.value;
        this.placeholder = inptObj.placeholder;

        const input = document.createElement('input');
        input.type = this.type;
        input.value = this.value;
        input.placeholder = this.placeholder;
        this.container.append(input);

        input.addEventListener('input',(event) => {
            //event.target.style.background = ""; 
            console.log('object');
        });

        input.addEventListener('focusout',(event) => {
            console.log(event.target.parentNode);
            this.appendError('Введите имя'); 
            event.target.style.background = "pink";           
        });


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
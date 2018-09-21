import { errorInputFieldClassName } from 'Tools/constants';

export default class InputTools {
    constructor() {
        this.handleRequiredValidation = this.handleRequiredValidation.bind(this);
        this.handleSetErrorClassname = this.handleSetErrorClassname.bind(this);
    }

    handleRequiredValidation(e) {
        const inputName = e.target.name;
        const inputValue = e.target.value;

        if (!inputValue) {
            this.handleSetErrorClassname(inputName, false);
        }
        else {
            this.handleSetErrorClassname(inputName);
        }
    }

    handleSetErrorClassname(inputName, isInputValid = true) {
        if (isInputValid) {
            document.getElementsByName(inputName)[0].classList.remove(errorInputFieldClassName);
        }
        else {
            document.getElementsByName(inputName)[0].classList.add(errorInputFieldClassName);
        }
    }
}

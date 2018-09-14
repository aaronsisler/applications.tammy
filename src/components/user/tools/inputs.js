import { requiredInputFieldClassName } from 'Tools/constants';

export default class InputTools {
    handleRequiredValidation(e) {
        const inputName = e.target.name;
        const inputValue = e.target.value;

        if (!inputValue) {
            document.getElementsByName(inputName)[0].classList.add(requiredInputFieldClassName);
        }
        else {
            document.getElementsByName(inputName)[0].classList.remove(requiredInputFieldClassName);
        }
    }
}

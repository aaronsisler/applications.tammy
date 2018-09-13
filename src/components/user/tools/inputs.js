import { requiredInputFieldClassName } from '../../../tools/constants';

export const handleRequiredValidation = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    if (!inputValue) {
        document.getElementsByName(inputName)[0].classList.add(requiredInputFieldClassName);
    }
    else {
        document.getElementsByName(inputName)[0].classList.remove(requiredInputFieldClassName);
    }
}

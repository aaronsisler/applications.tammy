import { clearApplication } from 'Actions/helpers/application';

export const startClearApplication = () => (dispatch) => {
    dispatch(clearApplication())
}

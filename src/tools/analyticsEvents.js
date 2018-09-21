import { ANALYTICS_CATEGORIES, ANALYTICS_ACTIONS } from '../tools/constants';

export const closeModalEvent = {
    category: ANALYTICS_CATEGORIES.navigate,
    action: ANALYTICS_ACTIONS.closeModal,
}

export const navigateByButtonEvent = {
    category: ANALYTICS_CATEGORIES.navigate,
    action: ANALYTICS_ACTIONS.navigateByButton,
}

export const openModalEvent = {
    category: ANALYTICS_CATEGORIES.navigate,
    action: ANALYTICS_ACTIONS.openModal,
}

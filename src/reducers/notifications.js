const notificationsReducerDefaultState = [];

const notificationsReducer = (state = notificationsReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_NOTIFICATIONS':
            return action.notifications;
        default:
            return state;
    }
};

export default notificationsReducer;


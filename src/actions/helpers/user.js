export const setUser = (user) => ({
    type: 'SET_USER',
    user,
});

export const editUser = (updates) => ({
    type: 'EDIT_USER',
    updates,
});

export const clearUser = () => ({
    type: 'CLEAR_USER'
});

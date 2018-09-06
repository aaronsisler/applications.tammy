export const setUser = (user) => ({
    type: 'SET_USER',
    user,
});

export const editUser = (userId, updates) => ({
    type: 'EDIT_USER',
    userId,
    updates,
});

export const clearUser = () => ({
    type: 'CLEAR_USER'
});

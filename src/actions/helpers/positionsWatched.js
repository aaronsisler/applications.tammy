export const addSubscription = (positionId, subscriptionLevel) => ({
    type: 'ADD_SUBSCRIPTION',
    positionId,
    subscriptionLevel
});

export const removeSubscription = (positionId) => ({
    type: 'REMOVE_SUBSCRIPTION',
    positionId
});

export const setPositionsWatched = (positionsWatched) => ({
    type: 'SET_POSITIONS_WATCHED',
    positionsWatched
});

export const setSubscriptionLevel = (positionId, subscriptionLevel) => ({
    type: 'SET_SUBSCRIPTION_LEVEL',
    positionId,
    subscriptionLevel
});

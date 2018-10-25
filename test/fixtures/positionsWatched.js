import positions from './positions';

const positionsWatchedDatabase = [
    {
        positionId: 'firstPositionId',
        notificationLevel: 'ALL',
    },
    {
        positionId: 'secondPositionId',
        notificationLevel: 'REQUIRED',
    },
];

const [position1, position2] = positions;
const [positionWatch1, positionWatch2] = positionsWatchedDatabase;

const positionsWatchedStore = [
    { ...position1, ...positionWatch1 },
    { ...position2, ...positionWatch2 }
];

export const defaultPositionsWatchedState = {
    positionsWatchedStore
}

export {
    positionsWatchedDatabase,
    positionsWatchedStore,
};

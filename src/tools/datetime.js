// Used to get the priority for database ordering when pushing new records
export const getPriority = () => {
    const date = new Date();
    return -(date.getTime());
}

// Get filtered positions watched
export default (positionsWatched, { text = '' }) => positionsWatched
    .filter((positionWatched) => {
        const titleMatch = positionWatched.title.toLowerCase().includes(text.toLowerCase());
        const jobIdMatch = positionWatched.jobId.toLowerCase().includes(text.toLowerCase());
        return jobIdMatch || titleMatch;
    })

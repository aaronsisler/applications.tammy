// Get filtered positions
export default (positions, { text = '' }) => positions
        .filter((position) => {
            const titleMatch = position.title.toLowerCase().includes(text.toLowerCase());
            const jobIdMatch = position.jobId.toLowerCase().includes(text.toLowerCase());
            return jobIdMatch || titleMatch;
        })

// Get filtered positions
export default (positions, { text }) => positions.filter((position) => position.title.toLowerCase().includes(text.toLowerCase()));

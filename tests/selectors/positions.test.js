import selectPositions from '../../src/selectors/positions';
import positions from '../fixtures/positions';

describe('selectPositions() method', () => {
    const [{ jobId }, { title }] = positions;

    it('should return all positions watched if no text filter', () => {
        const result = selectPositions(positions, {});
        expect(result).toEqual(positions);
    })

    it('should filter positions by title', () => {
        const result = selectPositions(positions, { text: title });
        expect(result).toEqual([positions[1]]);
    })

    it('should filter positions by job id', () => {
        const result = selectPositions(positions, { text: jobId });
        expect(result).toEqual([positions[0]]);
    })

    it('should filter out all positions if neither title or job id are matched', () => {
        const result = selectPositions(positions, { text: 'non matching' });
        expect(result).toEqual([]);
    })
})

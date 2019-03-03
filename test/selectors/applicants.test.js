import selectPositions from 'Selectors/positions';
import applicants from '../fixtures/applicants';

describe('selectPositions() method', () => {
    const [applicant] = applicants;
    const { lastName } = applicant.user;

    it('should return all applicants watched if no text filter', () => {
        const result = selectPositions(applicants, {});
        expect(result).toEqual(applicants);
    })

    it('should filter applicants by last name', () => {
        const result = selectPositions(applicants, { text: lastName });
        expect(result).toEqual([applicants[0]]);
    })

    it('should filter applicants by first name', () => {
        const result = selectPositions(applicants, { text: 'New First Name' });
        expect(result).toEqual([applicants[1]]);
    })

    it('should filter out all applicants if neither first or last name are matched', () => {
        const result = selectPositions(applicants, { text: 'non matching' });
        expect(result).toEqual([]);
    })
})

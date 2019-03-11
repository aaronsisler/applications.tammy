import selectApplicants from 'Selectors/applicants';
import applicants from '../fixtures/applicants';

describe('selectApplicants()', () => {
    const [applicant] = applicants;
    const { lastName } = applicant.user;

    it('should return all applicants watched if no text filter', () => {
        const result = selectApplicants(applicants, {});
        expect(result).toEqual(applicants);
    })

    it('should use default empty applicants array', () => {
        const result = selectApplicants(undefined, {});
        expect(result).toEqual([]);
    })

    it('should filter applicants by last name', () => {
        const result = selectApplicants(applicants, { text: lastName });
        expect(result).toEqual([applicants[0]]);
    })

    it('should filter applicants by first name', () => {
        const result = selectApplicants(applicants, { text: 'New First Name' });
        expect(result).toEqual([applicants[1]]);
    })

    it('should filter out all applicants if neither first or last name are matched', () => {
        const result = selectApplicants(applicants, { text: 'non matching' });
        expect(result).toEqual([]);
    })
})

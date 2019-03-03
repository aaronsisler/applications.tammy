import { getPriority } from 'Tools/datetime';

describe('datetime tools', () => {
    describe('getPriority()', () => {
        it('should return a negative number', () => {
            const result = getPriority();

            expect(result).toBeLessThan(0);
        });

        it('should return a value less than now milliseconds', () => {
            const now = -(new Date().getTime());
            const result = getPriority();

            expect(result).toBeLessThanOrEqual(now);
        });
    });
});

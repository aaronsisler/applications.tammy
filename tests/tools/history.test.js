import history from 'Tools/history';

describe('history', () => {
    describe('history object', () => {
        it('should be exported', () => {
            expect(history).toBeInstanceOf(Object);
        });

        it('should contain the push function', () => {
            expect(history.push).toBeInstanceOf(Function);
        });
    });
});

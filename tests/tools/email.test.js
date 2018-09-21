import { isEmailValid } from 'Tools/email';

describe('isEmailValid() method', () => {
    it('should return true if email is valid', () => {
        const result = isEmailValid('johnny.appleseed@gmail.com');
        expect(result).toBe(true);
    })

    it('should return false if email is NOT valid', () => {
        const result = isEmailValid('notvalidemailaddress.com');
        expect(result).toBe(false);
    })
})

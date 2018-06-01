import { validate } from 'email-validator';

export const isEmailValid = (emailAddress) => validate(emailAddress);

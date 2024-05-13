import { checkPassword } from './PasswordChecker.js';
import { describe, test } from 'node:test';
import * as assert from 'node:assert';

describe('PasswordChecker', () => {
    const sut = checkPassword;

    test('should throw an error if the password is not a string', () => {
        assert.throws(() => sut(123), { message: 'Password must be a string' });
    });

    test('should return an error message if the password is less than 8 characters long', () => {
        assert.throws(() => sut('abc'), { message: 'The password must be at least 8 characters long' });
    });

    test('should return an error message if the password does not contain a digit', () => {
        assert.throws(() => sut('abcdEFGH'), { message: 'The password must contain at least one digit' });
    });

    test('should return an error message if the password does not contain a lowercase letter', () => {
        assert.throws(() => sut('ABC12345'), { message: 'The password must contain at least one lowercase letter' });
    });

    test('should return an error message if the password does not contain an uppercase letter', () => {
        assert.throws(() => sut('abc12345'), { message: 'The password must contain at least one uppercase letter' });
    });

    test('should return an error message if the password does not contain a special character', () => {
        assert.throws(() => sut('Abc12345'), { message: 'The password must contain at least one special character' });
    });

});
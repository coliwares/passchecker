import {checkPassword} from './PasswordChecker.js';
import {describe, test} from 'node:test';
import * as assert from 'node:assert';

describe('PasswordChecker', () => {
    const sut = checkPassword;
    test('throws an error is password is not a string', () => {
        assert.throws(() => sut(123), Error);        
    });
});
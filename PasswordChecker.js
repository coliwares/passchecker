/**
 * Checks if a password meets certain criteria.
 *
 * @param {string} password - The password to be checked.
 * @returns {string|undefined} - Returns an error message if the password does not meet the criteria, or undefined if the password is valid.
 * @throws {Error} - Throws an error if the password is not a string.
 */
export function checkPassword(password) {
    if (typeof password !== 'string') {
        throw new Error('Password must be a string');
    }
    if (password.length < 8) {
        return 'The password must be at least 8 characters long';
    }
    if (password.length > 20) {
        return 'The password must be at most 20 characters long';
    }
    if (!/[a-z]/.test(password)) {
        return 'The password must contain at least one lowercase letter';
    }
    if (!/[A-Z]/.test(password)) {
        return 'The password must contain at least one uppercase letter';
    }
    if (!/[0-9]/.test(password)) {
        return 'The password must contain at least one digit';
    }
    if (!/[^a-zA-Z0-9]/.test(password)) {
        return 'The password must contain at least one special character';
    }
}
/**
 * Checks if a password meets certain criteria without using regular expressions.
 * @param {string} password - The password to be checked.
 * @returns {string|undefined} - Returns an error message if the password does not meet the criteria, or undefined if the password is valid.
 * @throws {Error} - Throws an error if the password is not a string.
 */
export function checkPasswordWithoutRegEx(password) {
    if (typeof password !== 'string') {
        throw new Error('Password must be a string');
    }
    if (password.length < 8) {
        return 'The password must be at least 8 characters long';
    }
    if (password.length > 20) {
        return 'The password must be at most 20 characters long';
    }
    let hasLowercase = false;
    let hasUppercase = false;
    let hasDigit = false;
    let hasSpecialChar = false;
    const specialChars = "!@#$%^&*()_+{}[]|\\:;'<>?,./";
    
    for (let i = 0; i < password.length; i++) {
        const char = password[i];
        if (char >= 'a' && char <= 'z') {
            hasLowercase = true;
        } else if (char >= 'A' && char <= 'Z') {
            hasUppercase = true;
        } else if (char >= '0' && char <= '9') {
            hasDigit = true;
        } else if (specialChars.includes(char)) {
            hasSpecialChar = true;
        }
    }
    
    if (!hasLowercase) {
        return 'The password must contain at least one lowercase letter';
    }
    if (!hasUppercase) {
        return 'The password must contain at least one uppercase letter';
    }
    if (!hasDigit) {
        return 'The password must contain at least one digit';
    }
    if (!hasSpecialChar) {
        return 'The password must contain at least one special character';
    }
}
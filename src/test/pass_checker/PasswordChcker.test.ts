import { PasswordChecer, PasswordErrors } from "../../app/pass_checker/PasswordChecker"

describe('Password Checker test suite', () => {
    let sut: PasswordChecer;

    beforeEach(()=> {
        sut = new PasswordChecer();


    })

    test('Password with less than 8 characters is invalid', () => {
        const actual = sut.checkPassword('1234567')
        expect(actual.valid).toBe(false)
        expect(actual.reasons).toContain(PasswordErrors.SHORT)
    })

    test('Password with more than 8 characters is valid', () => {
        const actual = sut.checkPassword('12345679Ab')
        expect(actual.valid).toBe(true)
        expect(actual.reasons).not.toContain(PasswordErrors.SHORT)
    })

    test('Password with no uppercase is invalid', () => {
        const actual = sut.checkPassword('12345abcd')
        expect(actual.valid).toBe(false)
        expect(actual.reasons).toContain(PasswordErrors.NO_UPPER_CASE)
    })
    
    test('Password with uppercase is valid', () => {
        const actual = sut.checkPassword('12345abcD')
        expect(actual.valid).toBe(true)
        expect(actual.reasons).not.toContain(PasswordErrors.NO_UPPER_CASE)
    })

    test('Password with no lowercase is invalid', () => {
        const actual = sut.checkPassword('12345ABCD')
        expect(actual.valid).toBe(false)
        expect(actual.reasons).toContain(PasswordErrors.NO_LOWER_CASE)
    })

    test('Password with lowercase is valid', () => {
        const actual = sut.checkPassword('12345aBCD')
        expect(actual.valid).toBe(true)
        expect(actual.reasons).not.toContain(PasswordErrors.NO_LOWER_CASE)
    })

    test('complex password is valid', () => { 
        const actual = sut.checkPassword('12345abcD')
        expect(actual.valid).toBe(true)
    })

    test('Admin password with no number is invalid', () => { 
        const actual = sut.checkAdminPassword('asdfABCD')
        expect(actual.valid).toBe(false)
        expect(actual.reasons).toContain(PasswordErrors.NO_NUMBER)
    })

    test('Admin password with no number is valid', () => { 
        const actual = sut.checkAdminPassword('asdfABC7D')
        expect(actual.valid).toBe(true)
        expect(actual.reasons).not.toContain(PasswordErrors.NO_NUMBER)
    })


})
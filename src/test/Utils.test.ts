import { getStringInfo, toUpperCase } from '../app/Utils';
describe('Utils test suite', () => { 
    test('should return uppercase', () => { 
        const result = toUpperCase('abc')

        expect(result).toBe('ABC')
    })

    describe('To UpperCase examples', () => { 
        test.each([
            { input: 'abc', expected: 'ABC',},
            { input: 'My String', expected: 'MY STRING'},
            { input: 'def', expected: 'DEF'}])
        ('$input toUpperCase should be $expected', ({input, expected}) => {
            const actual = toUpperCase(input)
            expect(actual).toBe(expected)
        })
    })    

    describe("getStringInfo for arg My String should", () => {
        let actual;
        beforeEach(()=>{
            actual = getStringInfo('My String');
        })

        test('return right length', () => {
            expect(actual.characters.length).toBe(9)
            expect(actual.characters).toHaveLength(9)
        })

        test('return rigth lower case', () => {
            expect(actual.lowerCase).toBe('my string')
        })

        test('should first', () => { 
            expect(actual.characters).toContain<string>('M')
            
        })

        test('return extra info', () => { 
            expect(actual.extraInfo).not.toBe(undefined)
            expect(actual.extraInfo).not.toBeUndefined()
            expect(actual.extraInfo).toBeDefined()
            expect(actual.extraInfo).toBeTruthy()    
        })
    })
})
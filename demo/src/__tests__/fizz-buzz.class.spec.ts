import { FizzBuzz } from "../fizz-buzz.class";

describe('FizzBuzz', () => {

    let fizzBuzzUnderTest: FizzBuzz;

    beforeEach(() => {
        fizzBuzzUnderTest = new FizzBuzz();
    })

    it('should return "Fizz" for 33', () => {
        const fizzBuzzResult = fizzBuzzUnderTest.getFizzBuzzForNumber(33)
        expect(fizzBuzzResult).toBe("Fizz");
    })

    it('should return 43 for 43', () => {
        const fizzBuzzResult = fizzBuzzUnderTest.getFizzBuzzForNumber(43)
        expect(fizzBuzzResult).toBe(43)
    })

    it('should return "Buzz" for 55', () => {
        const fizzBuzzResult = fizzBuzzUnderTest.getFizzBuzzForNumber(55)
        expect(fizzBuzzResult).toBe("Buzz")
    })

})
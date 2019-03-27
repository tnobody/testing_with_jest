import { FizzBuzzGame } from "../fizz-buzz-game.class";
import { FizzBuzz } from "../fizz-buzz.class";

describe('FizzBuzzGame', () => {

    let fizzBuzzGameUnderTest: FizzBuzzGame;
    let concreteFizzBuzz: FizzBuzz;

    beforeEach(() => {
        concreteFizzBuzz = new FizzBuzz();
        fizzBuzzGameUnderTest = new FizzBuzzGame(concreteFizzBuzz);
    })

    it('should work call fizzBuzz::getFizzBuzzForNumber with increasing numbers', () => {
        jest.spyOn(concreteFizzBuzz, "getFizzBuzzForNumber");

        fizzBuzzGameUnderTest.next("just dummy value");
        fizzBuzzGameUnderTest.next("just dummy value");
        fizzBuzzGameUnderTest.next("just dummy value");

        expect(concreteFizzBuzz.getFizzBuzzForNumber).toHaveBeenNthCalledWith(1, 1)
        expect(concreteFizzBuzz.getFizzBuzzForNumber).toHaveBeenNthCalledWith(2, 2)
        expect(concreteFizzBuzz.getFizzBuzzForNumber).toHaveBeenNthCalledWith(3, 3)
    })

    
})
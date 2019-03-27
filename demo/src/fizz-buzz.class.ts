import { divisibleBy } from "./divisible-by.function";

export class FizzBuzz {

    constructor(
        readonly fizzNum: number = 3,
        readonly fizzWord: string = "Fizz",
        readonly buzzNum: number = 5,
        readonly buzzWord: string = "Buzz",
    ) {}

    getFizzBuzzForNumber(num: number): string | number {
        const numDivisibleBy = divisibleBy(num);
        if(numDivisibleBy(this.fizzNum) && numDivisibleBy(this.buzzNum)) {
            return this.fizzWord + this.buzzWord
        }
        if(numDivisibleBy(this.fizzNum)) {
            return this.fizzWord
        }
        if(numDivisibleBy(this.buzzNum)) {
            return this.buzzWord
        }
        return num;
    }

}
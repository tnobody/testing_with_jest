import { FizzBuzz } from "./fizz-buzz.class";

export class FizzBuzzGame {

    private _score: number = 0;

    constructor(
        readonly fizzBuzz: FizzBuzz
    ) { }

    get score() {
        return this._score;
    }

    next(value: string | number) {
        const bizzFuzzValue = this.fizzBuzz.getFizzBuzzForNumber(++this._score);
        return bizzFuzzValue === value;
    }

}
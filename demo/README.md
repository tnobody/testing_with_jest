# Demo Code

## Setup

If you just need Jest in your Javascript-Project you can run:

```bash
npm i jest -D
```

If you like to use it in a Typescript-based Project you just add:

```bash
npm i ts-jest @types/jest -D
npx ts-jest config:init
```

## Demo Usecase

This demo implements and tests the bizzFuzz game which is basically defined as:

> Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”."
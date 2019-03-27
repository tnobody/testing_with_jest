export function divisibleBy(dividend: number) {
    return (divisor: number) => dividend % divisor === 0
}
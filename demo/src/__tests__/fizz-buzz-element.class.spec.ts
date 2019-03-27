import FizzBuzzComponent from "../components/fizz-buzz.component";
import { bind } from "hyperhtml";

describe('<fizz-buzz />', () => {
    
    let fizzBuzzEl: FizzBuzzComponent;
    let eventHandlerMock: jest.Mock;
    beforeEach(() => {
        eventHandlerMock = jest.fn();
        fizzBuzzEl = new FizzBuzzComponent({
            value: '5',
            buzzWord: 'Buzz',
            fizzWord: 'Fizz',
            onSelect: eventHandlerMock,
        });
        bind(document.body)`${fizzBuzzEl}`                
    })

    it('should render 4 buttons', () => {
        const buttons = Array.from(document.querySelectorAll('button'));
        expect(buttons.length).toBe(4)
    })

    it('should render the texts of value, fizzWord, buzzWord and FizzBuzzWord in buttons', () => {
        const buttonText = Array.from(document.querySelectorAll('button')).map(b => b.textContent);
        expect(buttonText).toEqual(expect.arrayContaining([
            '5', 'Buzz', 'Fizz', 'FizzBuzz'
        ]))
    })

    it('should invoke a callback after clicking a button', () => {
        const [valBtn, fizzBtn, buzzBtn, fizzBuzzBtn] = Array.from(document.querySelectorAll('button'))
        fizzBtn.click();
        expect(eventHandlerMock).toHaveBeenCalledWith('Fizz')
    })
})
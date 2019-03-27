import { FizzBuzz } from "../fizz-buzz.class";
import { Component, wire } from 'hyperhtml'

export interface FizzBuzzComponentState {
    fizzWord: string,
    value: string,
    buzzWord: string
}

export interface FizzBuzzComponentProps extends FizzBuzzComponentState {
    onSelect: (selected: string) => void
}

export default class FizzBuzzComponent extends Component<FizzBuzzComponentState> {

    constructor(readonly props: FizzBuzzComponentProps) {
        super();   
        this.update(props);
    }

    update(state: Partial<FizzBuzzComponentState>) {
        this.setState(state);
        return this.render();
    }

    onSelect(val: string) {
        return (e: MouseEvent) => this.props.onSelect(val);
    }

    get value() {return this.state.value || ''}
    get fizzWord() {return this.state.fizzWord || ''}
    get buzzWord() {return this.state.buzzWord || ''}
    get fizzBuzzWord() {return (this.state.fizzWord || '') + (this.state.buzzWord || '')}

    handleEvent(e: MouseEvent) {
        if(this.props.onSelect) {
            this.props.onSelect((e.target! as any).textContent)
        }
    }

    render() {        
        return this.html`
            <div class="fizz-buzz">
                ${[
                    this.value,
                    this.fizzWord,
                    this.buzzWord,
                    this.fizzBuzzWord
                ].map(v => wire({v})`<button class="fizz-buzz__button" onclick=${this}>${v}</button>`)}             
            </div>
        `
    }

}

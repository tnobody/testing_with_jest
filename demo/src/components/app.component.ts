import { Component, wire } from "hyperhtml";
import FizzBuzzComponent from "./fizz-buzz.component";
import { FizzBuzzGame } from "../fizz-buzz-game.class";
import { FizzBuzz } from "../fizz-buzz.class";
import { TimerComponent } from "./timer.component";

interface AppState {
    value: string | number;
    overlay: boolean;
}

export class AppComponent extends Component<AppState> {

    onFizzBuzzSelected(selected: string): void {
        const nextValue: string | number = !isNaN(Number(selected)) ? Number(selected) : selected
        const success = this.fizzBuzzGame.next(nextValue);
        if(success) {
            this.setState({ value: this.fizzBuzzGame.score + 1 });
            this.timerEl.reset().start();
        } else {
            this.lose();
        }
    }

    lose() {
        this.timerEl.reset();
        this.setState({
            overlay: true
        })
    }

    private fizzBuzzEl = new FizzBuzzComponent({
        onSelect: v => this.onFizzBuzzSelected(v),
        buzzWord: 'Buzz',
        fizzWord: 'Fizz',
        value: '5'
    });

    private timerEl = new TimerComponent({
        time: 3000,
        onTimeout: () => {
            this.lose()
        }
    })

    private fizzBuzz: FizzBuzz;
    private fizzBuzzGame: FizzBuzzGame;

    constructor() {
        super();
        this.state = {
            value: 0,
            overlay: false
        }
        this.fizzBuzz = new FizzBuzz(3, 'Fizz', 5, "Buzz");
        this.fizzBuzzGame = new FizzBuzzGame(this.fizzBuzz);
        this.reset();
    }

    reset() {
        this.fizzBuzz = new FizzBuzz(3, 'Fizz', 5, "Buzz");
        this.fizzBuzzGame = new FizzBuzzGame(this.fizzBuzz);
        this.timerEl.start();
        this.setState({
            value: this.fizzBuzzGame.score + 1,
            overlay: false
        })
    }

    render() {
        return this.html`
            <header>
                ${this.timerEl.render()}
            </header>
            ${this.fizzBuzzEl.setState({ value: this.state.value.toString() })}
            <footer>
            </footer>
            ${this.state.overlay ? wire(this)`
            <div class="overlay animated fade jackInTheBox">
                <p>Final Score</p>
                <p>${Number(this.state.value) + 0}</p>
                <button class="footer__reset-button" onclick=${this.reset.bind(this)}>
                    <span class="material-icons">replay</span>
                </button>
            </div>
            ` : null}
        `
    }
}
import { wire } from "hyperhtml";

export interface Action {
    type: string;
}

export interface StateListener<State> {
    (state: State): void
}

export class Store<State> {
    
    listeners: StateListener<State>[] = [];
    _state: State;

    constructor(
        readonly reducer: (state: State, action: Action) => State,
        readonly initial: State
    ) {
        this._state = initial;
    }
    
    dispatch(action: Action) {
        const oldState = this._state; 
        this._state = this.reducer(this._state, action);
        if(oldState !== this._state) {
            this.listeners.forEach(listener => listener(this._state));
        }
    }

    onChange(listener: StateListener<State>) {
        this.listeners.push(listener);
    }

    connect<Props>(stateToProps: (s:State) => Props, component: (p:Props) => any) {
        
    }
}
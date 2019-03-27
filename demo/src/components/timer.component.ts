import { Component, wire } from "hyperhtml";

export interface TimerComponentState {
    progress: number,
    started: number,
    isRunning: boolean
}

export interface TimerComponentProps {
    time: number,
    onTimeout: () => void,
}

export class TimerComponent extends Component<TimerComponentState> {

    get isRunning() {
        return this.state.isRunning;
    }

    private animationFrameRequest: number | null = null;

    constructor(readonly props: TimerComponentProps) {
        super();
        this.state = {
            progress: 0,
            started: 0,
            isRunning: false
        }
    }

    start() {
        this.animationFrameRequest = requestAnimationFrame(timestamp => {
            this.setState({
                started: timestamp,
                progress: 0,
                isRunning: true
            })
            this.updateOnNextFrame()
        });
    }
    updateOnNextFrame() {
        this.animationFrameRequest = requestAnimationFrame(timestamp => {
            if (this.state.started) {
                const progress = Math.min((timestamp - this.state.started) / this.props.time, 1);
                this.setState({ progress });
                if (progress === 1) {
                    if (this.animationFrameRequest) {
                        cancelAnimationFrame(this.animationFrameRequest);
                    }
                    this.setState({ isRunning: false });
                    this.props.onTimeout();
                } else {
                    if (this.state.isRunning) this.updateOnNextFrame();
                }
            }
        })
    }

    reset() {
        this.setState({
            started: 0,
            progress: 0,
            isRunning: false
        })
        return this;
    }

    render() {
        return this.html`
             ${this.state.isRunning ? wire(this)`
            <div style=${{
                    transform: `scaleX(${1 - this.state.progress})`, background: 'green',     height: '20px'
                }}></div>` : null}
        `
    }
}
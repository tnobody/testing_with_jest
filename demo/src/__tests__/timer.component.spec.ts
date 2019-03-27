import { nextAnimationFrame, mockRequestAnimationFrame, resetRequestAnimationFrameMock } from '../__mocks__/request-animation-frame.mock';
import { TimerComponent } from "../components/timer.component";

describe(TimerComponent.name, () => {

    afterEach(() => {
        (window.requestAnimationFrame as jest.Mock).mockRestore();
    })

    let timer: TimerComponent;
    let onTimeoutPromise: Promise<void>
    beforeEach(() => {
        mockRequestAnimationFrame();
        let onTimeout: () => void = () => { };        
        onTimeoutPromise = new Promise(r => onTimeout = r);
        timer = new TimerComponent({
            time: 3,
            onTimeout
        })
    })

    afterEach(() => {
        resetRequestAnimationFrameMock();
    })

    it('should set state after starting', () => {
        timer.start();
        nextAnimationFrame();
        expect(timer.state).toEqual(expect.objectContaining({
            isRunning: true
        }))
    })

    it("should invoke request animation frame", () => {
        timer.start();
        nextAnimationFrame();
        expect(window.requestAnimationFrame).toHaveBeenCalledWith(expect.any(Function))
    })

    it("should have a valid final state ", async () => {
        timer.start();
        nextAnimationFrame()
        nextAnimationFrame()
        nextAnimationFrame()
        nextAnimationFrame()
        await onTimeoutPromise;
        expect(timer.state).toEqual(expect.objectContaining({
            progress: 1,
            isRunning: false
        }))
    })

})
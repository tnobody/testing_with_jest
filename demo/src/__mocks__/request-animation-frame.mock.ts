const observers: FrameRequestCallback[] = [];
let timestamp: number = 0

export function mockRequestAnimationFrame(initialTime = 0) {
    timestamp = initialTime;
    window.requestAnimationFrame = jest.fn().mockImplementation((observer: FrameRequestCallback) => {
        observers.push(observer);
    })
}

export function nextAnimationFrame(offset: number = 1) {
    timestamp += offset;
    if(observers.length) {
        const observer = observers.pop()!;
        observer(timestamp);
    }
}

export function resetRequestAnimationFrameMock() {
    (window.requestAnimationFrame as jest.Mock).mockReset();
    timestamp = 0;
}
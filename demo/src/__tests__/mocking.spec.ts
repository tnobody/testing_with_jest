describe("mocking and spying", () => {

    function callMeLater(cb: () => void) {
        console.log('dont call us we call you')
        cb();
    }

    it("should validate invokation of a function", () => {
        const mock = jest.fn();
        callMeLater(mock);
        expect(mock).toHaveBeenCalled();
    })

    it("should spy on a method", () => {
        jest.spyOn(console, 'log');
        callMeLater(jest.fn());
        expect(console.log).toHaveBeenCalledWith('dont call us we call you')
    })

})
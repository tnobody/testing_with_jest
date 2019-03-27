describe("to be or not to be", () => {

    const objectUnderTest = {
        value: 42
    }

    it("should compare object by equality", () => {
        expect(objectUnderTest).toEqual({
            value: 42
        })
    })

    it("should compare object by identity", () => {
        expect(objectUnderTest).toBe(objectUnderTest);
    })

    it('should compare with nested object matchers', () => {
        expect(objectUnderTest).toEqual(expect.objectContaining({
            value: expect.any(Number)
        }))
    })

})
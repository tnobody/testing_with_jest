it("should demonstrate matchers", () => {
    expect(true).toBeTruthy();
    expect(true).not.toBeFalsy();
    expect("Hello World").toMatch(/Hello/);
    expect(undefined).toBeUndefined();
    expect(1).toBeDefined();
    expect(['Jest', 'Test']).toContain('Test');
    expect(1+1).toBe(2);
    expect({value: 42}).toEqual({value: 42});
    expect(Promise.resolve(42)).resolves.toBe(42)
})
describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
    expect("Hello").toEqual("Hello");
    expect(true).toBeTruthy();
  });
});
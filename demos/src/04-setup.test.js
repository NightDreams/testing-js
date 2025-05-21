describe("set A", () => {
  beforeAll(() => {
    console.log("before all tests in set A");
  });
  afterAll(() => {
    console.log("after all tests in set A");
  });
  beforeEach(() => {
    console.log("before each test in set A");
  });
  afterEach(() => {
    console.log("after each test in set A");
  });

  test("case A1 ", () => {
    expect(1 + 1).toBe(2);
  });
  test("case A2 ", () => {
    expect(1 + 3).toBe(4);
  });

  describe("set B", () => {
    test("case B1 ", () => {
      expect(1 + 1).toBe(2);
    });
    test("case B2 ", () => {
      expect(1 + 3).toBe(4);
    });
  });
});

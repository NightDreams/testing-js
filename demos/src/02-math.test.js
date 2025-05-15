const { sum, multiply, divide } = require("./02-math.js");

test("sum feature", () => {
  const rta = sum(1, 3);
  expect(rta).toBe(4);
});
test("multiply feature", () => {
  const rta = multiply(1, 4);
  expect(rta).toBe(4);
});

test("divide feature", () => {
  const rta = divide(6, 3);
  expect(rta).toBe(2);

  const rta2 = divide(5, 2);
  expect(rta2).toBe(2.5);
});

test("warning devide for zero", () => {
  const rta = divide(6, 0);
  expect(rta).toBeNull();

  const rta2 = divide(5, 0);
  expect(rta2).toBeNull();
});

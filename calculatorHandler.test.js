
const routeHandler = require("./calculatorHandlerTesting");



test("It adds two numbers", () => {
    expect(routeHandler({params: {operator: 'addition', num1: "20", num2: "45"}}, {})).toBe(65);
});

test("It subtracts two numbers", () => {
    expect(routeHandler({params: {operator: 'subtraction', num1: "20", num2: "5"}}, {})).toBe(15);
});

test("It multiplies two numbers", () => {
    expect(routeHandler({params: {operator: 'multiplication', num1: "2", num2: "5"}}, {})).toBe(10);
});

test("It divides two numbers", () => {
    expect(routeHandler({params: {operator: 'division', num1: "20", num2: "4"}}, {})).toBe(5);
});

test("It divides correctly", () => {
    expect(routeHandler({params: {operator: 'division', num1: "20", num2: "4"}}, {})).not.toBe(10);
});

const { capitalize, reverse, truncate } = require("../src/index");

describe("String Utilities", () => {
  test("capitalize should capitalize first letter", () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("")).toBe("");
    expect(capitalize(123)).toBe("");
  });

  test("reverse should reverse a string", () => {
    expect(reverse("hello")).toBe("olleh");
    expect(reverse("")).toBe("");
  });

  test("truncate should truncate long strings", () => {
    expect(truncate("hello world", 5)).toBe("hello...");
    expect(truncate("hi", 5)).toBe("hi");
    expect(truncate("hello", 5, "")).toBe("hello");
  });
});

import fs from "fs";
import path from "path";
import SutraMatrix from "../src/calculate";

interface TestCase {
  input: [number, number, number, number];
  expected: number;
}

const testCases: TestCase[] = JSON.parse(fs.readFileSync(path.join(__dirname, "../../tests/score-test.json"), "utf8"));

describe("SutraMatrix.score", () => {
  testCases.forEach(({ input, expected }) => {
    test(`score(${input}) should return ${expected}`, () => {
      expect(SutraMatrix.score(...input)).toBe(expected);
    });
  });

  test("throws an error for invalid inputs", () => {
    expect(() => SutraMatrix.score(0, 0, 0, 2)).toThrow("U, I, E, P should be binary values (0, 1, true, or false)");
  });
});

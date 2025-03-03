"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const calculate_1 = __importDefault(require("../src/calculate"));
const testCases = JSON.parse(fs_1.default.readFileSync(path_1.default.join(__dirname, "../../tests/score-test.json"), "utf8"));
describe("SutraMatrix.score", () => {
    testCases.forEach(({ input, expected }) => {
        test(`score(${input}) should return ${expected}`, () => {
            expect(calculate_1.default.score(...input)).toBe(expected);
        });
    });
    test("throws an error for invalid inputs", () => {
        expect(() => calculate_1.default.score(0, 0, 0, 2)).toThrow("U, I, E, P should be binary values (0, 1, true, or false)");
    });
});

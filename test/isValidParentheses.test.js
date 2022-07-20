import * as assert from "assert";
import {isValidParentheses} from "../tasks/arraysTasks.js";

describe("isValidParenthesesTest", () => {
    let arrTest = [
        ['()(', false],
        ['(())', true],
        ['())(()', false],
        ['a + b', true],
        ['a + b) * (a + b)', false],
        ['c / ((a + b) * 2)', true],
        ['((a + b) * (a + b)', false],
    ]
    arrTest.forEach((t) => {
        it(t[0], () => {
            assert.equal(isValidParentheses(t[0]), t[1])
        })
    })
})
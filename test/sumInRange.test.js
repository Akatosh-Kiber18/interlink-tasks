import * as assert from "assert";
import {sumInRange} from "../tasks/sumInRange.js";

describe('Plural function', () => {
    it('should work from 1 to 3', () => {
        assert.equal(sumInRange(1, 3), 6)
    })
    it('should work from 5 to 7', () => {
        assert.equal(sumInRange(5, 7), 18)
    })
})
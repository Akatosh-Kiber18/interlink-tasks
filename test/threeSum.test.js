import * as assert from "assert";
import {threeSum} from "../tasks/threeSum.js";

describe("Three Sum test`s", () => {
    it('trying [0,0,0] ', () => {
        assert.deepEqual(threeSum([0,0,0]),  [[0,0,0]])
    });
    it('trying [-1,0,1,2,-1,-4] ', () => {
        assert.deepEqual(threeSum([-1,0,1,2,-1,-4]),  [[-1,0,1],[-1,-1,2]])
    });
    it('trying [0,1,1]', () => {
        assert.deepEqual(threeSum([0,1,1]),  [])
    });
    it('trying [-1,0,1,0]', () => {
        assert.deepEqual(threeSum([-1,0,1,0]),  [[-1,0,1]])
    });
})
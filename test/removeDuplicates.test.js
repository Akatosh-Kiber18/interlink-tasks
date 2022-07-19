import * as assert from "assert";
import {removeDuplicates} from "../tasks/removeDuplicates.js";

describe ('removeDuplicates', ()=>{
    it('should ', function () {
        assert.equal(removeDuplicates([1,1,2]), ( [1,2]))
    });
    it('should ', function () {
        assert.equal(removeDuplicates([0,0,1,1,1,2,2,3,3,4]), ( [0,1,2,3,4]))
    });
})

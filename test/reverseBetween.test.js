import * as assert from "assert";
import {reverseBetween} from "../tasks/reverseBetween.js";

describe("reverseBetweenTest", ()=>{
    const testItems = [
        [
            [1,2,3,4,5], 2, 4, [1,4,3,2,5]
        ],
        [
            [5], 1, 1, [5]
        ],
        [
            [1,4,3,2,5,6,7], 4, 6, [1,6,5,2,3,4,7]
        ],
    ]
    testItems.forEach(i => {
        it(`reverseFor head = ${i[0]}, left = ${i[1]}, right = ${i[2]}`, function () {
            assert.deepEqual(reverseBetween(i[0],i[1],i[2]), i[3])
        });
    })
})
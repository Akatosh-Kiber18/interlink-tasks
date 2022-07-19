import * as assert from "assert";
import {findMedianSortedArrays} from "../findMedianSortedArrays.js";

describe("Find Median Sorted Arrays", () =>{
    it("For [1,3] , [2]", () => {
        assert.equal(findMedianSortedArrays([1,3], [2]), 2)
    })
    it("For [1,3,5] , [2,6]", () => {
        assert.equal(findMedianSortedArrays([1,3,5], [2,6]), 3)
    })
    it("For [1,3,5,4] , [2,6,9,7]", () => {
        assert.equal(findMedianSortedArrays([1,3,5,4], [2,6,9,7]), 4.5)
    })
    it("For [] , [1]", () => {
        assert.equal(findMedianSortedArrays([], [1]), 1)
    })
    it("For [2] , []", () => {
        assert.equal(findMedianSortedArrays([2], []), 2)
    })
    it("For [] , [2,3]", () => {
        assert.equal(findMedianSortedArrays([], [2,3]), 2.5)
    })
    it("For [2,3] , []", () => {
        assert.equal(findMedianSortedArrays([2,3], []), 2.5)
    })
    it("For [] , []", () => {
        assert.equal(findMedianSortedArrays([], []), null)
    })
    it("For [3] , [-2,-1]", () => {
        assert.equal(findMedianSortedArrays([3], [-2,-1]), -1)
    })
})
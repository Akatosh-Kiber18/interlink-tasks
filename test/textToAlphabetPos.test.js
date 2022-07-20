import * as assert from "assert";
import {textToAlphabetPos} from "../tasks/textToAlphabetPos.js";

describe("textToAlphabetPos", () => {
    let arr = [
        ['abc bb xyz', '1 2 3   2 2   24 25 26'],
        ['abba abb a b a','1 2 2 1   1 2 2   1   2   1' ]
    ]
    arr.forEach(e => {
        it(e[0], () => {
            assert.equal(textToAlphabetPos(e[0]), e[1])
        })
    })

})
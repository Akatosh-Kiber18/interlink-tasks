import * as assert from "assert";
import {printAlphabet} from "../tasks/printAlphabet.js";

describe("Alphabet checking" ,() => {
    it('should return Alphabet with numbers of later`s', () => {
        assert.equal(printAlphabet(), "A 1\n" +
            "B 2\n" +
            "C 3\n" +
            "D 4\n" +
            "E 5\n" +
            "F 6\n" +
            "G 7\n" +
            "H 8\n" +
            "I 9\n" +
            "J 10\n" +
            "K 11\n" +
            "L 12\n" +
            "M 13\n" +
            "N 14\n" +
            "O 15\n" +
            "P 16\n" +
            "Q 17\n" +
            "R 18\n" +
            "S 19\n" +
            "T 20\n" +
            "U 21\n" +
            "V 22\n" +
            "W 23\n" +
            "X 24\n" +
            "Y 25\n" +
            "Z 26")
    })
})
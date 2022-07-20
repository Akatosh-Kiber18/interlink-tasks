import * as assert from "assert";
import {renderField} from "../tasks/ticTacToe.js";

describe('Field Render', () => {
    let testsArr = [
        [
            [0, 0, 0,
            0, 0, 0,
            0, 0, 0,],
            "   |   |   \n" +
            "---+---+---\n" +
            "   |   |   \n" +
            "---+---+---\n" +
            "   |   |   "
        ],
        [
            [
                1, -1, 0,
                0, 1, 0,
                0, 0, -1,
            ],
            " x | 0 |   \n" +
            "---+---+---\n" +
            "   | x |   \n" +
            "---+---+---\n" +
            "   |   | 0 "
        ],
        [
            [
                1, -1, 1,
                0, 1, 0,
                -1, 0, -1,
            ],
            " x | 0 | x \n" +
            "---+---+---\n" +
            "   | x |   \n" +
            "---+---+---\n" +
            " 0 |   | 0 "
        ],
        [
            [
                1, 1, 0,
                1, 0, 1,
                -1, -1, -1,
            ],
            " x | x |   \n" +
            "---+---+---\n" +
            " x |   | x \n" +
            "---+---+---\n" +
            " 0 | 0 | 0 "
        ]
    ]
    testsArr.forEach(t => {
        it('clear field', () => {
            assert.equal(renderField(t[0]), t[1])
        });
    })
})
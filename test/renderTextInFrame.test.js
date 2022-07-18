import * as assert from "assert";
import {renderTextInFrame} from '.././renderTextInFrame.js'

describe('Plural function', () => {
    it('should work for: Hello world', () => {
        assert.equal(renderTextInFrame("Hello world"), "*******************\n" +
                                                                    "*                 *\n" +
                                                                    "*   Hello World   * \n" +
                                                                    "*                 *\n" +
                                                                    "*******************")
    })
    it('should work for: Some text for checking ', () => {
        assert.equal(renderTextInFrame("Hello world"), "******************************\n" +
                                                                    "*                            *\n" +
                                                                    "*   Some text for checking   * \n" +
                                                                    "*                            *\n" +
                                                                    "******************************")
    })
})
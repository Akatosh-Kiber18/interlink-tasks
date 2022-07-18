import * as assert from "assert";
import {plural} from '../plural.js'

describe('Plural function', () => {
    it('should work for 1', () => {
        assert.equal(plural(1, 'банан', 'банана', 'бананів'), '1 банан');
    });
    it('should work for 2 ', () => {
        // arrange
        const count = 2

        // act
        const actual = plural(count, 'апельсин', 'апельсина', 'апельсинів');

        // assert
        assert.equal(actual,'2 апельсина')
    });
    it('should work for 0', () => {
        // arrange
        const count = 0

        // act
        const actual = plural(count, 'апельсин', 'апельсина', 'апельсинів');

        // assert
        assert.equal(actual,'0 апельсинів')
    });
    it('should work for 5', () => {
        // arrange
        const count = 5

        // act
        const actual = plural(count, 'задача', 'задачі', 'задач');

        // assert
        assert.equal(actual,'5 задач')
    });

    it('should work for 12', () => {
        // arrange
        const count = 12

        // act
        const actual = plural(count, 'задача', 'задачі', 'задач');

        // assert
        assert.equal(actual,'12 задач')
    });

});
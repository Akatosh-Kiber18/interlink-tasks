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
        assert.equal(actual, '2 апельсина')
    });
    it('should work for 0', () => {
        // arrange
        const count = 0

        // act
        const actual = plural(count, 'апельсин', 'апельсина', 'апельсинів');

        // assert
        assert.equal(actual, '0 апельсинів')
    });
    it('should work for 5', () => {
        // arrange
        const count = 5

        // act
        const actual = plural(count, 'задача', 'задачі', 'задач');

        // assert
        assert.equal(actual, '5 задач')
    });
    it('should work for 22', () => {
        // arrange
        const count = 22

        // act
        const actual = plural(count, 'задача', 'задачі', 'задач');

        // assert
        assert.equal(actual, '22 задачі')
    });

    it('should work for 12', () => {
        // arrange
        const count = 12

        // act
        const actual = plural(count, 'задача', 'задачі', 'задач');

        // assert
        assert.equal(actual, '12 задач')
    });

});

describe('short', () => {
    const testCases = [
        [100, 'задач'],
        [27, 'задач'],
        [21, 'задача'],
        [23, 'задачі'],
        [17, 'задач'],
        [7, 'задач'],
        [3, 'задачі'],
        [-3, 'задачі'],
        [0, 'задач'],
        [11, 'задач'],
    ]
    testCases.forEach(c => {
        it('should work for ' + c[0], function () {
            // arrange
            const count = c[0]

            // act
            const actual = plural(count, 'задача', 'задачі', 'задач');

            // assert
            assert.equal(actual, c[0] + ' ' + c[1])
        });
    })
})
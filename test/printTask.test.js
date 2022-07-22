import * as assert from "assert";
import {printTask} from "../tasks/printTask.js";

describe('Print Task Test', () =>{
    const arr = [
        [1, {done: false, title: 'Undone task'}, '1. [ ] Undone task'],
        [2, {done: true, title: 'Done task'}, '2. [x] Done task'],
        [3, {done: false, title: 'Objects', desc: 'Learn more about this'}, '3. [ ] Objects\n' +
        '   Learn more about this'],
        [4, {done: false, title: 'Complete first course task', dueDate: new Date('2022-01-17')}, '4. [ ] Complete first course task (Jan 17)'],
    ]
arr.forEach(t => {
    it(`${t[0]} ${t[1]}`, function () {
        assert.equal(printTask(t[0],t[1]), t[2])
    });
})
})
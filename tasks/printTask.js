/*
export function printTask(index, task) {
    let output = `${index}. `;
    const isDone = task.done === false ? '[ ] ' : '[x] ';
    const title = task.title;
    const description = task.desc ? '\n'+ ' '.repeat(output.length) + task.desc : "";
    const dueDate = task.dueDate ? ` (${task.dueDate.toDateString().slice(4, -5)})` : '';

    return `${output}${isDone}${title}${description}${dueDate}`;
}
*/

class Task {

    constructor(attributes) {
        Object.assign(this, attributes);
    }


    toString() {
        let output = `${this.id}. `;
        const isDone = this.done ? '[x] ' : '[ ] ';
        const title = this.title;
        const description = this.desc ? '\n' + ' '.repeat(output.length) + this.desc : "";
        const dueDate = this.dueDate ? ` (${this.dueDate.toDateString().slice(4, -5)})` : '';
        return `${output}${isDone}${title}${description}${dueDate}`;
    }

    toggle() {
        this.done = !this.done;
    }

    isOverdue() {
        const date = new Date();
        if (this.dueDate < date) {
            return true;
        }
        return false
    }

    postpone(timeSpan) {
        this.dueDate.setDate(this.dueDate.getDate() + timeSpan.days);
    }
}

let now = new Date();
let yesterday = new Date();
yesterday.setDate(now.getDate() - 1);

let task = new Task({dueDate: yesterday});
console.log(task.isOverdue());
export const reverseBetween = function (head, left, right) {
    if (head.length === 1) {
        return head;
    }
    const leftIndex = head.indexOf(left);
    const first = head.splice(0,leftIndex);
    const rightIndex = head.indexOf(right);
    const second = head.splice(rightIndex+1, head.length);
    const reverse = head.reverse();

    return first.concat(reverse).concat(second);
};

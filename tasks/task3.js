const difference = function (a, b) {
    return a.length > b.length ? a.filter((n, i) => n !== b[i]) : []
}
let difference1;

console.log(difference1());

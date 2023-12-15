// 1 masala

var arr = [4, 10, 888, 99, 100];
var max = arr.sort((a, b) => a - b);
var maxresult = 'max - ' + arr[arr.length - 1];

var arr = [4, 10, 888, 99, 100];
var min = arr.sort((a, b) => b - a);
var minresult = 'min - ' + arr[arr.length - 1];

console.log(maxresult, minresult);

// 2 masala

var ar = ['olma', 'nok', 'banan', 'olma', 'nok', 'tarvuz']

function DeleteMeva(name) {
    let index;
    while ((index = ar.indexOf(name)) !== -1) {
        ar.splice(index, 1);
    }
    console.log(ar);
}

DeleteMeva('olma');
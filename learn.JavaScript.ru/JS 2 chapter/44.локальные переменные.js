/**
 * Created by madyarov_gt on 24.05.2016.
 */
function sum(a) {
    return function (b) {
        return a + b;
    };
}

console.log( sum(2)(5) );
console.log( sum(3)(-1) );

//
function makeBuffer() {
    var text = '';

    function buffer(piece) {
        if (arguments.length === 0) {
            return text;
        }
        text += piece;
    }
    buffer.clear = function () {
        text = "";
    };
    return buffer;
}

var buffer = makeBuffer();

buffer('замыкания');
buffer('использовать');
buffer('нужно!!');
console.log(buffer());

buffer.clear();

console.log(buffer());

//

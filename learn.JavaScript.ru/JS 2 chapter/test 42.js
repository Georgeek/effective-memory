/**
 * Created by madyarov_gt on 20.05.2016.
 */


var arr = ['test', 2, 1.5, false];

/** function find(arr, value) {
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] == value) return i;
    }
    return -1;
}
*/

if ([].indexOf) {
    var find = function (array, value) {
        return array.indexOf(value);
    } else {
        var find = function (array, value) {
            for (var i = 0; i < array.length; i++) {
                if (array[i] === value) return i;
            }
            return -1;
        }
    }
}

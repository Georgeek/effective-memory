/**
 * Created by madyarov_gt on 19.05.2016.
 */


var lastItem = goods[goods.length - 1];
console.log( lastItem );


goods.push = "PC";

var styles = ['jazz', 'blues'];
styles.push('rock-n-roll');
styles[styles.length - 2] = 'classic';
alert ( styles.shift(0) );
styles.unshift('rap','raggy');
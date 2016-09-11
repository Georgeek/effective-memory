/*jshint multistr:true */
var text = "Hey, how are you \
doing? My name is Emily.Hey, how are you \
doing? My name is Emily.Hey, how are you \
doing? My name is Raggot Emily.Hey, how are you \
doing? My name is Emily.Hey, how Raggot are you \
doing? My name is Emily.";

var myName = "Raggot";
var hits = [];

for (var i = 0; i < text.length; i++) {
    if (text[i] === "R") {
        for (var j = i; j < (myName.length + i); j++) {
            hits.push(text[j]);
        };
    };

};
if (hits.length === 0 ) {
    console.log("Your name wasn't found!");
} else {
    console.log(hits);
};
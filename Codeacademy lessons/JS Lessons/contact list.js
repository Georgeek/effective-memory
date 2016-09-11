var friends = {};
friends.steve = {
    firstName: "Steve",
    lastName: "ogorodnikov",
    number: 89500883135,
    address: ['Russia, Irkutsk, Krasnikh Madiar 80, kv 15']
};
friends.bill = {
    firstName: "Bill",
    lastName: "kartoshkin",
    number: 89500834420,
    address: ['Russia, Irkutsk, Krasnikh Madiar 80, kv 15']
};
friends.murray = {
    firstName: "Bill",
    lastName: "kartoshkin",
    number: 89500834420,
    address: ['Russia, Irkutsk, Krasnikh Madiar 80, kv 15']
};

var list = function(obj) {
    for (var properties in friends) {
    console.log(properties)
    }
};

var search = function(name) {
    for (var prop in friends) {
        if (friends[prop].firstName === name) {
            console.log("First Name: " + friends[prop].firstName + "\n");
            console.log("Last Name: " + friends[prop].lastName + "\n");
            console.log("number: " + friends[prop].number + "\n");
            console.log("Address: " + friends[prop].address + "\n");
            return friends[prop];
            }
    }
};
list(friends);
search("Bill");
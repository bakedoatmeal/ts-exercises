// Currently the function below uses a string for
// for the type of monster. Better to use an enum
// since monsters are only: lizard, flying, or ape
// Bonus points: import the monter type and monster 
// class defintions from the previous example and 
// use them here! 
// Define an enum for monster type
var MonsterType;
(function (MonsterType) {
    MonsterType[MonsterType["lizard"] = 0] = "lizard";
    MonsterType[MonsterType["flying"] = 1] = "flying";
    MonsterType[MonsterType["ape"] = 2] = "ape";
})(MonsterType || (MonsterType = {}));
// Add the types here and use the enum for type. 
function rampage(name, type, power, city) {
    var action;
    switch (type) {
        case MonsterType.lizard:
            action = 'smash';
            break;
        case MonsterType.flying:
            action = 'burn';
            break;
        case MonsterType.ape:
            action = 'flap';
            break;
    }
    var result = "".concat(name, " ").concat(action, " over ").concat(city, " causing ").concat(power * 10000, " damage!");
    return result;
}
// Use the enum here when calling the rampage function
console.log(rampage('Gojira', MonsterType.lizard, 90, 'tokyo'));
console.log(rampage('Mothra', MonsterType.flying, 40, 'Fresno'));
console.log(rampage('Kong', MonsterType.ape, 88, 'New York'));

// first lines of TS
var sum = function (a, b) {
    return a + b;
};
var answer = sum(2, 3);
console.log(answer);
// -- TYPES
// boolean
var isCool = true;
// number
var age = 56;
// string
var eyeColor = "brown";
var favouriteQuote = "I'am not old, i'am only ".concat(age, ".");
// Array
var pets = ["cat", "dog", "pig"];
var pets2 = ["lion", "dragon", "lizard"];
// Object
var wizard = {
    a: "John"
};
// null and undefined
var meh = undefined;
var noo = null;
// -- Types JS does not have but TS does allow for them
// Tuple
var basket;
basket = ["basketball", 5];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size[2];
console.log(sizeName);
var sizeValue = Size.Small;
console.log(sizeValue);
// Any - !!! BE CAREFUL
var whatever = "kasdlfj aslkdfj laksjdf";
whatever = 5;
whatever = Size.Small;
// void
var sing = function () { return console.log("lalalala"); };
var sing2 = function () { return "lalalala"; };
// never
var error = function () {
    // return "hello";
    throw Error("oops");
};
var fightRobotArmy = function (robots) {
    console.log("FIGHT!");
};
var fightRobotArmy2 = function (robots) {
    console.log("FIGHT!");
};
var dog = {};
dog.count;
// Function
var fightRobotArmy3 = function (robots) { return console.log("FIGHT!"); };
// Classes
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = "alalalalala";
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello ".concat(this.sing);
    };
    return Animal;
}());
var lion = new Animal("RAAAWWR");
console.log(lion.greet());
// console.log(lion.sing);
// Union
var confused = "hello";
confused = 5;
// confused = true;
// type inference
var x = 4;
// x = "hello";

//Simple Message Display in TypeScript
var message = "Hello World !";
console.log(message);
//Classes in TypeScript
var Display = /** @class */ (function () {
    function Display() {
    }
    Display.prototype.displayMessage = function () {
        console.log("Hello World from display Message");
    };
    return Display;
}());
var objDisplay = new Display();
objDisplay.displayMessage();
//checking the decisions
var num = 20;
if (num % 2 == 0)
    console.log("Even");
else
    console.log("Odd");
// functions in Type Script with Optional Parameter
function disp_details(name, age, mail) {
    console.log(name);
    console.log(age);
    //console.log(mail);
}
disp_details("suhail", 38);
// functions in Type Script with Rest Parameter
function rest_test() {
    var no = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        no[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < no.length; i++) {
        sum += no[i];
    }
    console.log(sum);
}
rest_test(10, 20);
rest_test(10, 20, 30, 40, 50);

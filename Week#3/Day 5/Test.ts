//Simple Message Display in TypeScript
var message: string = "Hello World !";
console.log(message);

//Classes in TypeScript

class Display {
    displayMessage(): void {
        console.log("Hello World from display Message");
    }
}

var objDisplay = new Display();
objDisplay.displayMessage();

//checking the decisions

var num: number = 20;
if (num % 2 == 0)
    console.log("Even");
else
    console.log("Odd");

// functions in Type Script with Optional Parameter

function disp_details(name: string, age: number, mail?: string) {
    console.log(name);
    console.log(age);
    //console.log(mail);
}
disp_details("suhail", 38);

// functions in Type Script with Rest Parameter

export function rest_test(...no: number[]) {
    var i;
    var sum = 0;
    for (i = 0; i < no.length; i++) {
        sum += no[i];
    }
    console.log(sum);
}
rest_test(10, 20);
rest_test(10, 20, 30, 40, 50);
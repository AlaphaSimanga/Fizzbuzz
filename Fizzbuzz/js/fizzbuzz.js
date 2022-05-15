for (let i = 1; i <= 100; i++) {
    //if a number is divisible by 3 and 5, the program should print Fizz-Buzz
    //first one because I want to check for divisibility for either 3 or 5
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("Fizz-Buzz");
    }
    //if a number is divisible by 3, the program should print Fizz
    else if (i % 3 == 0) {
        console.log("Fizz");
    }
    //if a number is divisible by 5, the program should print Buzz
    else if (i % 5 == 0) {
            console.log("Buzz");
    }
    //if the number is not divisible by 3 or 5, print in normally
    else {
        console.log(i);
    }
}

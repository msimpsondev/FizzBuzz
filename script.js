function main() {
    fizzBuzz(range);
};

function fizzBuzz(range) {
    var i = 1;
    while( i<= range) {
        if (i % 5 === 0 && i % 3 === 0) {
            document.write("FizzBuzz! ");
        } else if (i% 5 === 0) {
            document.write("Buzz! ");
        } else if (i % 3 === 0) {
            document.write("Fizz! ");
        } else {
            document.write(i + ', ');
        }
        i++;
    }
};

const range = prompt("Ender end of range, please.");
main();
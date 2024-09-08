1) Print even numbers from 10 to 30 using named functions, arrow function and variable function
    
PROGRAM :
console.log('USING NAMED FUNCTION')
function even_nums() {
    for (i = 10; i <= 30; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}
even_nums()

console.log('USING ARROW FUNCTION')
const even = (x, y) => {
    for (i = x; i <= y; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}
even(10, 30)

console.log('USING VARIABLE FUNCTION')
const evennums = function (x, y) {
    for (i = x; i <= y; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}
evennums(10, 30)

OUTPUT: 
USING NAMED FUNCTION
10
12
14
16
18
20
22
24
26
28
30

USING ARROW FUNCTION
10
12
14
16
18
20
22
24
26
28
30

USING VARIABLE FUNCTION
10
12
14
16
18
20
22
24
26
28
30


2) Check whether input is odd or not using named functions, arrow function and variable function
    

PROGRAM :

console.log('USING NAMED FUNCTION')
function odd() {
    number = +prompt('Enter the Value : ')
    if (number % 2 != 0) {
        console.log(`${number} is an odd number`)
    }
    else {
        console.log(`${number} is not a odd number`)
    }
}
odd()

console.log('USING ARROW FUNCTION')
const odd_num = (x) => {
    number = x
    if (number % 2 != 0) {
        console.log(`${number} is an odd number`)
    }
    else {
        console.log(`${number} is not a odd number`)
    }
}
odd_num(+prompt('Enter the Value : '))

console.log('USING VARIABLE FUNCTION')
const oddnum = function (x) {
    number = x
    if (number % 2 != 0) {
        console.log(`${number} is an odd number`)
    }
    else {
        console.log(`${number} is not a odd number`)
    }
}
oddnum(+prompt('Enter the Value : '))

OUTPUT: 
USING NAMED FUNCTION
Enter the Value: 7
7 is an odd number

USING ARROW FUNCTION
Enter the Value: 4
4 is not a odd number

USING VARIABLE FUNCTION
Enter the Value: 9
9 is an odd number


3) Check if the input string is palindrome or not using named functions, arrow function and variable function.

PROGRAM:

console.log('USING NAMED FUNCTION')
function check() {
    string = prompt('Enter the input string : ')
    reversed_string = ''
    for (i = string.length - 1; i >= 0; i--) {
        reversed_string += string[i]
    }
    if (reversed_string == string) {
        console.log(`${reversed_string} is a Palindrome`)
    }
    else {
        console.log(`${reversed_string} is not a Palindrome`)
    }
}
check()

console.log('USING ARROW FUNCTION')
const palindrome = (str) => {
    string = str
    reversed_string = ''
    for (i = string.length - 1; i >= 0; i--) {
        reversed_string += string[i]
    }
    if (reversed_string == string) {
        console.log(`${reversed_string} is a Palindrome`)
    }
    else {
        console.log(`${reversed_string} is not a Palindrome`)
    }
}
palindrome(prompt('Enter the input string : '))

console.log('USING VARIABLE FUNCTION')
const Palindrome = function (st) {
    string = st
    reversed_string = ''
    for (i = string.length - 1; i >= 0; i--) {
        reversed_string += string[i]
    }
    if (reversed_string == string) {
        console.log(`${reversed_string} is a Palindrome`)
    }
    else {
        console.log(`${reversed_string} is not a Palindrome`)
    }
}
Palindrome(prompt('Enter the input string : '))

OUTPUT: 
USING NAMED FUNCTION
Enter the input string: RADAR
RADAR is a Palindrome

USING ARROW FUNCTION
Enter the input string: MALAYALAM
MALAYALAM is a Palindrome

USING VARIABLE FUNCTION
Enter the input string: JAVASCRIPT
TPIRCSAVAJ is not a Palindrome

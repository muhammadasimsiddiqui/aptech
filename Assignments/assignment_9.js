// 3.   Create a external JS file and link with HTML file, and print a console message.

console.log("Hello World")


var sum_num1 = prompt("Enter the first number:");
var sum_num2 = prompt("Enter the second number:");

num1 = parseFloat(sum_num1);
num2 = parseFloat(sum_num2);

var sum = num1 + num2;

console.log("Sum:", sum);
document.write(num1, " + ",num2, " = ", sum)
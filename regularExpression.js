/* 
^: Indicates the start of a string/line
\d: Finds any digit
[abc]: Finds any character between the brackets
[^abc]: Finds any character not between the brackets
[0-9]: Finds any digit between the brackets
[^0-9]: Finds any digit not between the brackets
(x|y): Finds any of the alternatives specified
*/

//  Any Numeric Characters
//  /\d+/
var reg = /\d+/;
reg.test("123"); // true
reg.test("33asd"); // true
reg.test("5asdasd"); // true
reg.test("asdasd"); // false

//  Only Numeric Characters
//  /^\d+$/
var reg1 = /^\d+$/;
reg1.test("123"); // true
reg1.test("123a"); // false
reg1.test("a"); // false

//  Floating Numeric Characters
//  /^[0-9]*.[0-9]*[1-9]+$/
var reg2 = /^[0-9]*.[0-9]*[1-9]+$/;
reg2.test("12"); // false
reg2.test("12.2"); // true

//  Only Alphanumeric Characters
//  /[a-zA-Z0-9] /
var reg3 = /[a-zA-Z0-9]/;
reg3.test("somethingELSE"); // true
reg3.test("hello"); // true
reg3.test("112a"); // true
reg3.test("112"); // true
reg3.test("^"); // false

//  Query String
//  /([^?=&]+)(=([^&]*))/


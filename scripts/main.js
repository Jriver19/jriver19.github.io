/**
 * An expression is any valid unit of code that resolves to a value
 * An statement is a line of code
 * 
 * priority V.S. precedence
 * operator precedence -- 操作符优先级
 * take precedence
 * 
 * 1.There are pitfalls to watch out for when using Closure
 * 2.It's not important to understand this at this point, but it might serve to explain some code pattern you will likely come across from time to time
 * 
 * ----------------
 * comma ,
 * colon :
 * semicolon ;
 * Parenthesis () 单数 Parenthese(常用) Parentheses 
 * round bracket () -- parenthese
 * Square brackets []
 * Curly braces {}
 * Slash /
 * backslash \
 * double quotation mark (double quote) " 
 * single quotation mark (single quote)'  --apostrophe 省略号 It's
 * back-tick (or back quote) `  --反引号，反撇号
 * dash - used to separate parts of a sentence, often instead of a colon or in pairs instead of brackets/parentheses 
 * hyphen - used to join two words together to make a new one, as in back-up 
 * underscore _
 * dollar sign $
 * punctuation -表达符合总称 punctual 准时的
 * 
 * 
 * \n new line
 * \r carriage return
 * arrow => -->
 * nary    没有一个
 * unary   一元
 * binary  二元
 * ternary 三元
 * ...Args  rest parameter
 * ... Spread operator
 * 
 * lower camel case V.S. hyphenated
 * backgroundColor V.S. background-color
 * 
 * -----
 * eval() function is abbreviation evaluate
 * nls: native language support
 */
/**
 * Unicode 只是一个字符集，在制定的时候并没有考虑编码的问题，
 * UTF-8 UTF-16 UTF-32都是unicode的编码方式。
 * UFT-8： 一种变长的编码方案，使用 1~6 个字节来存储；
 * UFT-32：一种固定长度的编码方案，不管字符编号大小，
 *         始终使用 4 个字节来存储；
 * UTF-16：介于 UTF-8 和 UTF-32 之间，使用 2 个或者 4 个字节来存储，
 *         长度既固定又可变。
 * unicode : universal Character set: UCS ISO/IEC 10646
 * UTF : Unicode Transformation Format
 */
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/yellow_river.jpg') {
      myImage.setAttribute ('src','images/logo.jpg');
    } else {
      myImage.setAttribute ('src','images/yellow_river.jpg');
    }
}
/**
 * Define variables:
 * var 
 * let
 */
/*
JavaScript Object syntax always follow
this pattern:
 -- This is called Object literal, because
    we have literally written out the object content
const objectName = {
  member1Name: member1Value,
  member2Name: member2Value,
  member3Name: member3Value
};
*/
/**
 * The constructor function below is JavaScript version
 * of a class.
 * It doesn't return anything, or explicitly create an object,
 * it basically just define properties and methods
 * The constructor function name usually starts with a capital
 * letter - this convention is used to make constructor function
 * easier to recognize in code
 * 
 * @param {*} name 
 */
function Person(name) {
  this.name = name;
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  };
}

const person1 = new Person('Jim');
const person2 = new Person('Tim')
/**
 * JavaScript is often described as a prototype-based
 * language to provide inheritance, objects can have 
 * a prototype object, which acts as a template object
 * that it inherits methods and properties from. An object's
 * prototype object may also have a prototype object, which it
 * inherits methods and properties from, and so on, --prototype chain.
 * 
 */
person1.vaueOf();

/**
 * The way to define a new class to inherit from
 * Person
 * 
 * @param {} name 
 * @param {*} subject 
 */
function Teacher(name, subject) {
  // the call() function
  Person.call(this, name);

  this.subject = subject;
}
/**
 * JavaScript is a dynamically typed language. That means
 * you don't have to specify the data type of a variable
 * when you declare it, and data types are converted 
 * automatically as needed during script execution.
 */
/**
 * function declaration
 */
function square(number){
    return number * number;
}
/**
 * function expression
 * It is convenient when passing a function as
 * an argument to another function
 */
var square = function(number){
  return number * number;
};
var square = function square2(number){
  return number * number;
};
var x = square(6);

function map(f, a) {
  var result = []; // Create a new Array
  var i; // Declare variable
  for (i = 0; i != a.length; i++)
    result[i] = f(a[i]);
  return result;
}
var f = function(x) {
   return x * x * x; 
}
var numbers = [0, 1, 2, 5, 10];
var cube = map(f,numbers);
console.log(cube);
/**
 * Function nested
 * the inner function forms a closure, 
 * you can call the outer function and 
 * specify arguments for both the outer 
 * and inner function.
 * 
 * In the inner function forms a closure
 * Closure is one of the most powerful feature
 * of JavaScript
 */
function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}
fn_inside = outside(3); // Think of it like: 
                        //give me a function 
                        //that adds 3 to whatever 
                        //you give it
result = fn_inside(5); // returns 8

result1 = outside(3)(5); // returns 8
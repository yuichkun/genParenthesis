var genParens = require("./genParens");

var parens = genParens("func", 16);
var func = eval(parens);

var result = func()()()()()()()()()()()()()()()();
console.log(result);

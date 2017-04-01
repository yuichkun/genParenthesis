module.exports = function genParens(funcName, n) {
  var header = funcName + " = ";
  var footer = "";
  var body = "return 1;"
  for(var i = 0; i < n; i++){
    if(i != 0){
      header += "return ";
    }
    header += 'function(){\n';
    footer += '}\n';
  }
  var content = header + body + footer;
  return content;
};

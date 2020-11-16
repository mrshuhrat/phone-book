var $ = function (elementName, node = document) {
  return node.querySelector(`${elementName}`);  
}

var $$ = function (elementName, node = document) {
  return node.querySelectorAll(`${elementName}`);
}

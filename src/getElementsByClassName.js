// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var classElems = [];

  var traverse = function(elem) {
    var i = 0;

  	if (elem.classList.contains(className)) {
  		classElems.push(elem);
  	}

    while(elem.childNodes && i < elem.childNodes.length) {
      if (elem.childNodes[i].nodeType === 1) {
        traverse(elem.childNodes[i]);
      }
      
      if (elem.nextSibling) {
        elem = elem.nextSibling;
      }

      i++;
    }   
  };
  
  traverse(document.body);
  return classElems;
};

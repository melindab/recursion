// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var items = [];
  var item = '';
  var str = '';

  if (typeof obj === 'undefined' || typeof obj === 'null' || typeof obj === 'symbol') {
    return;
  }

  if (typeof obj === 'function') {
    return;
  }

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return '' + obj + '';
  }
  
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      item = stringifyJSON(obj[i]);
      items.push(item);
    }
    
    str = items.join(',');

    return '[' + str + ']';
  }

  if (typeof obj === 'object') {
    if (obj === null) {
      return 'null';
    }

    for (var prop in obj) {
      if (obj.hasOwnProperty(prop) && typeof obj[prop] !== 'function' && typeof obj[prop] !== 'undefined') {
        item = stringifyJSON(prop) + ':' + stringifyJSON(obj[prop]);
        items.push(item);
      }
    }

    str = items.join(',');

    return '{' + str + '}';
  }

};

function getProp( object, keys, defaultVal ){
    keys = Array.isArray( keys ) ? keys : keys.split('.');
    object = object[keys[0]];
    if ( object && keys.length > 1 ) {
      return getProp(object, keys.slice(1), defaultVal);
    }
    return object === undefined ? defaultVal : object;
  }
  
  console.log(getProp({}, 'x', 'DEFAULT_VAL')); // => 'DEFAULT_VAL'
  console.log(getProp({}, 'x.x', 'DEFAULT_VAL')); // => 'DEFAULT_VAL'
  console.log(getProp({x: {}}, 'x.x', 'DEFAULT_VAL')); // => 'DEFAULT_VAL'
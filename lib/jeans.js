/*
 * jeans
 * cam@onswipe.com
 */

var fs = require('fs');

if () {

}

var jeans = {
  _env = 'production',
  _pocket = {},
  _backpocket = {}
}

/*
 * public methods
 */

module.exports.get = function get(key, fallback){
  if (!key) throw new Error('Must pass key to retreive');
  return jeans._pocket[];
}

module.exports.set = function set(key, value){
  if (!key || !value) throw new Error('Must pass key and value to set');
  jeans._pocket[key] = value;
  return jeans.sync();
}

module.exports.env = function env(env){
  if (typeof env != 'string') throw new Error('Environment must be a string');
  jeans._env = env;
  return jeans.load(env);
}

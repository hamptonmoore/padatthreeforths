const isNumber = require('is-number');
const isString = require('is-string');
const isCharacter = require('is-character');

module.exports = function(str, char, len) {
    if (!isString(str) || !isNumber(len) || !isCharacter(char)){
        throw "Proper use is padatthreeforths(String, Character, Number)";
    }

    while (str.length < len){
      str = str.substring(0, Math.floor(str.length * 3 / 4)) + char + str.substring(Math.floor(str.length * 3 / 4));
    }
  
    return str;
}

const repeatString = function(word, items) {
  if (items < 0) return "ERROR"
  let string = "";
  for (let i = 0; i < items; i++) {
    string += word;
  }
  return string;
};


// Do not edit below this line
module.exports = repeatString;
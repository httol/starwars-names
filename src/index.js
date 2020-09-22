var uniqureRandomArray = require('unique-random-array');
var starWarsNames = require('./star-wars-names.json');
var getRandomItem = uniqureRandomArray(starWarsNames);

module.exports = {
  all: starWarsNames,
  random: random,
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    var randomitems = [];
    for (let index = 1; index < number; index++) {
      randomitems.push(getRandomItem());
    }
    return randomitems;
  }
}

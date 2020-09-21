var uniqureRandomArray = require('unique-random-array');
var starWarsNames = require('./star-wars-names.json');

module.exports = {
  all: starWarsNames,
  random: uniqureRandomArray(starWarsNames),
};

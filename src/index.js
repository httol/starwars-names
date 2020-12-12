import uniqureRandomArray from 'unique-random-array';
import starWarsNames from './star-wars-names.json';
var getRandomItem = uniqureRandomArray(starWarsNames);
//test
module.exports = {
  all: starWarsNames,
  random: random,
  getItemByIndex: getItemByIndex,
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    var randomitems = [];
    for (let index = 0; index < number; index++) {
      randomitems.push(getRandomItem());
    }
    return randomitems;
  }
}

function getItemByIndex(index) {
  var all = starWarsNames;
  if (index === undefined || index > all.length - 1) {
    return null;
  } else {
    return all[index];
  }
}

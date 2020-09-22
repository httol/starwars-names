var expect = require('chai').expect;
var starWars = require('./index.js');

//test
describe('starwars name', function () {
  describe('all', function () {
    it('should be an array of strings', function () {
      expect(starWars.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function (item) {
          return typeof item === 'string';
        });
      }
    });

    it('shoule contains Blark O.Bama', function () {
      expect(starWars.all).to.include('Blark O.Bama');
    });
  });

  describe('random', function () {
    it('should return a random item from the starwars names', function () {
      var randomItem = starWars.random();
      expect(starWars.all).to.include(randomItem);
    });

    it('should return an array of random item if pass number', function () {
      var randomItems = starWars.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach((item) => {
        expect(starWars.all).to.include(item);
      });
    });
  });
});

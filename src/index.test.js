import { expect } from 'chai';
import starWars from './index.js';

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

  describe('getItemByIndex', function () {
    it('shoule be return an item if pass a index number', function () {
      var item = starWars.getItemByIndex(1);
      expect(starWars.all).to.include(item);
      var nullitem = starWars.getItemByIndex();
      expect(nullitem).to.be.null;
    });
  });
});

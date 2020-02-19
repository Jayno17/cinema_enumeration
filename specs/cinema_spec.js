const assert = require('assert');
const Film = require('../film.js');
const Cinema = require('../cinema.js');

describe('cinema', function() {
  let cinema;

beforeEach(function(){
  film1 = new Film('Titanic','romance', 1997, 195);
  film2 = new Film('Sonic the Hedgehog','comedy', 2020, 110);
  film3 = new Film('1917','historical drama', 2020, 125);
  cinema = new Cinema( [ film1, film2, film3 ] );
});

it('should have a collection of films', function(){
  const actual = cinema.filmArray;
  assert.deepStrictEqual(actual, [ film1, film2, film3 ])
});

it('should be able to get a list of film titles', function(){

});
it('should be able to find a film by title', function(){

});
it('should be able to filter films by genre', function(){

});
it('should be able to check for films from a particular year', function(){

});
it('should be able to check whether all films are over a particular length', function(){

});
it('should be able to calculate the total running time of all films', function(){

});


});

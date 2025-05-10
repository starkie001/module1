let planets = ['Mercury', 'Earth', 'Mars', 'Venus', 'Saturn', 'Uranus', 'Neptune', 'Pluto']; // 8 elements, not 5 but can't leave out planets!!
planets[0] = 'Venus';
planets[3] = 'Jupiter';
planets.unshift('Mercury');
planets.pop();
console.log(planets);
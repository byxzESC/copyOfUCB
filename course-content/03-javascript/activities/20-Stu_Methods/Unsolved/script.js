var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW
constellations.splice(0, 0, "Canis Major");
planets.pop();
var galaxy = constellations.concat(planets);
star = star.toLocaleUpperCase();
console.log(star);  
// Collections

// Arrays - Ordered collection where each element has index (starting at 0)
// Arrays are called lists in Python
// Objects - unordered collection where element has key-value pair




var sports = ['football', 'tennis', 'rugby'];
console.log(sports);

// splice can remove based on index postion, add or both
var removedSport = sports.splice(1, 0, 'basketball');
console.log('removed sport:', removedSport);
console.log('sports after splice:', sports);

sports.unshift('golf');
console.log('updated sports', sports);
sports.shift();
console.log('updated sports after shift:', sports);

var numberOfElements = sports.length;
console.log('number of elements:', numberOfElements);

var firstSport = sports[0];
console.log('first sport:', firstSport);

sports.push('curling');
console.log('updated sports:', sports);
sports.pop();
console.log('updated sports after remove:', sports);



for (var currentSport of sports){
    var upperCasedSport = currentSport.toUpperCase();
    console.log(upperCasedSport);
};

// for (inital counter ; true/false condition ; increment counter)
for (var i = 0; i < sports.length ; i++) {
    var currentSport = sports[i];
    var upperCasedSport = currentSport.toUpperCase();
    console.log(upperCasedSport);
};



var movie = {
    title: "It's a Wonderful Life",
    year: 1946,
    language: 'Spanish'
};

//console.log("title:", movie.title);

movie.cast = ['James Stewart', 'Donna Reed'];
movie.language = 'English';
movie['subtitle-language'] = 'French';

delete movie.year;

movie.ratings = {
    critic: 94,
    audience: 95
};

for (var key in movie) {
    var value = movie[key];
    console.log(`The ${key} is ${value}`);
}

console.log("movie:", movie);
console.log("audience score:", movie.ratings.audience);



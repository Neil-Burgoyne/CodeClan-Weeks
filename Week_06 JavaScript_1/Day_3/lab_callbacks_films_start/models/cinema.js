const Cinema = function (films) {
  this.films = films
}

Cinema.prototype.filmTitles = function () {
  return this.films.map((film) => {
    film.title
  })
}

Cinema.prototype.filmByTitle = function (title) {
  return this.films.find((film) => {
    return film.title === title
  })
}

Cinema.prototype.filmsByGenre = function (genre) {
  return this.films.filter(film => {
    return film.genre === genre
  })
}

Cinema.prototype.hasFilmsFromYear = function (year) {
  return this.films.some(film => {
    return film.year === year
  })
}

Cinema.prototype.areAllFilmsOfMinLength = function (length) {
  return this.films.every(film => {
    return film.length > length
  })
}

Cinema.prototype.totalRunningTime = function () {
  return this.films.reduce((runningTotal, film) => {
    return runningTotal += film.length
  }, 0)
}

module.exports = Cinema
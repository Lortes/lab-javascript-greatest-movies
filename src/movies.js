
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map((eachDirector) => {
        return eachDirector.director
    })
    return allDirectors
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const moviesDramaSpilberg = moviesArray.filter((eachMovie) => {
        return eachMovie.director === "Steven Spielberg" && eachMovie.genre.includes("Drama")
    })

    if (moviesDramaSpilberg.length === 0 && moviesDramaSpilberg.director !== "Steven Spielberg") {
        return 0
    } else {
        return moviesDramaSpilberg.length;
    }

}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    const scoreAvg = moviesArray.reduce((acc, eachMovie) => {

        if (moviesArray.length === 0) {
            return 0;
        } else if (!eachMovie.score) {
            eachMovie.score = 0;
            return acc + eachMovie.score / moviesArray.length
        } else {
            return acc + eachMovie.score / moviesArray.length
        }

    }, 0)

    return Number(scoreAvg.toFixed(2))
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const moviesDrama = moviesArray.filter(eachMovie => {
        return eachMovie.genre.includes("Drama")
    })

    const scoreMoviesDrama = moviesDrama.reduce((acc, eachMovie) => {

        if (moviesDrama === 0) {
            return 0
        } else {
            return acc + eachMovie.score / moviesDrama.length
        }

    }, 0)

    return Number(scoreMoviesDrama.toFixed(2))

}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const moviesCopy = JSON.parse(JSON.stringify(moviesArray))

    const moviesOrderByYear = moviesCopy.sort((a, b) => {
        if (a.year < b.year) {
            return -1
        } else if (a.year > b.year) {
            return 1
        } else if (a.year === b.year) {
            if (a.title < b.title) {
                return -1
            } else {
                return 1
            }
        } else {
            return 0
        }
    })

    return moviesOrderByYear

}




// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesTitle = moviesArray.map((eachTitle) => {
        return eachTitle.title
    })

    moviesTitle.sort();

    /*
        const moviesOrderByTitle = moviesTitle.sort((a,b) => {
            if(a.title < b.title){
                return -1
            }else if(a.title > b.title){
                return 1
            }else{
                return 0
            }
        })
    */

    if (moviesTitle.length > 20) {
        return moviesTitle.slice(0, 20)
    }
    return moviesTitle
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const clonedList = JSON.parse(JSON.stringify(moviesArray))

    clonedList.forEach(movie => {

        let hours = 0
        let min = 0
        let arrAux = movie.duration.split('h')

        hours = arrAux[0]


        /*
        console.log(arrAux[1])
        
        
        if (arrAux.length>1) {
            let minAux = arrAux[1].split('min')
            min = minAux[0]
        }
        */


        movie.duration = hours * 60 + min

    });


    return clonedList

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null
    }

}

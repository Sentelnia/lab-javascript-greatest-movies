// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(someArr) {
    var directorArray = someArr.map(function (movie) {
        return movie.director;
    });
    return directorArray;
}


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(someArr) {


    let steven = someArr.filter(function (el) {
        return el.director === "Steven Spielberg" && el.genre.includes("Drama");

    });
    return steven.length;
}



// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(someArr){
    // Si il n'y a aucun film, la fonction retourne 0
    if (someArr.length === 0) {
        return 0;
    }
    // on réduit la rate de tout les films à un seul nombre
    let rateCumul = someArr.reduce(function (acc, value){
        return acc + value.rate;
    }, 0);
    // on calcul ensuite la moyenne de cette rate en la divisant par le nombre de films
    let average = (rateCumul / (someArr.length)).toFixed(2)
    return Number(average)
}



// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(someArr){
    // on filtre d'abord tout les films qui ont pour genre Drama
    let dramaMovies = someArr.filter(function(el) {
        return el.genre.includes("Drama");
    });
    // si il n'y a aucun film avec le genre Drama, la fonction retourne 0
    if (dramaMovies.length === 0){
        return 0;
    }
    // on réduit la rate de tout les film du genre Drama à un seul nombre
    let rateCumul = dramaMovies.reduce(function (acc, value) {
        return acc + value.rate;
    }, 0);
    // on calcul ensuite la moyenne de cette rate en la divisant par le nombre de films du genre Drama
    let average = (rateCumul / (dramaMovies.length)).toFixed(2);
    return Number(average);

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
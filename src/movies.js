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
    // on filtre d'abord tout les films qui ont une rate
    let getRate = someArr.filter(function(el) {
        return el.rate;
    });
    // on réduit la rate de tout les films à un seul nombre
    let rateCumul = getRate.reduce(function (acc, value){
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

function orderByYear(someArr){
    // on clone l'array pour ne pas toucher à l'originale
    var cloneArr = someArr.slice();
    // on met par ordre croissant d'année
    cloneArr.sort(function (a, b) {
        if (a.year < b.year) return -1;
        if (a.year > b.year) return 1;
        // si même année , on classe par ordre alphabetique
        if (a.year === b.year && a.title < b.title) return -1;
        if (a.year === b.year && a.title > b.title) return 1;     
    });
    return cloneArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(someArr){
    // on créé un clone de l'array en prévision du tri
    var cloneArray = someArr.slice();
    // on créé une nouvelle array avec juste les titres de film
    var titleArray = cloneArray.map(function (movie) {
        return movie.title;
    });
    // on classe les films par ordre alphabétique
    titleArray.sort();
    //on retourne les 20 premiers films
    return titleArray.slice(0, 20);
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(someArr){
    //on commence la fonction.map pour faire une boucle et créer une nouvelle Array
    let newArray = someArr.map(function (movie){
    //fonction pour changer les heures en min
    let duration = movie.duration;
    //array [nh, nmin]
    let durationArr = duration.split(" ");
    let min = 0;
        //si array [nh] ou [nmin]
        if (durationArr.length < 2){
            //si array[nh]
            if (durationArr[0].includes("h")) {
              // on sort le chiffre de l'indice [0](donc des heures)
                let hoursArr = durationArr[0].split('h');
                // on multiplie ce chiffre par 60 pour le rendre en min
                let hoursMin = hoursArr[0]*60;
                min += hoursMin; 
                //si array[nmin]
            } else {
                // on  sort le chiffre des minutes de l'array 
                let minArr = durationArr[0].split('min');
                min += Number(minArr[0]); 
            }
        // si array[nh, nmin]
        } else {
            // on sort le chiffre de l'indice [0](donc des heures de array [nh, nmin])
            let hoursArr = durationArr[0].split('h');
            // on multiplie ce chiffre par 60 pour le rendre en min
            let hoursMin = hoursArr[0]*60;
            // on  sort le chiffre des minutes de l'array  [nh, nmin]
            let minArr = durationArr[1].split('min');
            // on ajoute ce chiffre à la nouvelle heure convertie en min
            min += hoursMin + Number(minArr[0]);
            
        }
     
    // on retourne une nouvelle Array pour movies qui remplace les heures en min
    return  {
        title: movie.title,
        year: movie.year,
        director:movie.director,
        duration: min, 
        genre: movie.genre,
        rate: movie.rate
      }
      
    });
    return newArray;


}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
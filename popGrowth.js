const nbYear = (pop, percent, immigrants, popToReach) => {
    let years = 0;

    while (pop < popToReach) {
        pop = pop + (pop * (percent / 100)) + immigrants;
        years++;
    }

    return years;
}


console.log(nbYear(1000, 2, 50, 1200)); // --> 3

console.log(nbYear(1500, 5, 100, 5000)); // --> 15

console.log(nbYear(1500000, 2.5, 10000, 2000000)); // --> 10
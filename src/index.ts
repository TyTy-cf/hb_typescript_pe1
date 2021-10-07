/**
 * Exo 1 - fonction age
 * @param age
 */
function calcBirthDate(age: number): number {
    // const currentYear = new Date().getFullYear();
    // return currentYear - age;
    // getFullYear, permet de récupérer juste l'année en cour sur un objet Date
    return (new Date().getFullYear()) - age;
}

console.log('Résultat exo 1 : ' + calcBirthDate(21));

/**
 * Exo 2 - fonction age
 * @param arrayGrades
 *
 * arrayGrade: number[] => autre écriture pour déclarer que notre variable est un tableau
 */
function calcAverage(arrayGrades: Array<number>): number {
    let sum: number = 0;
    // for..of : parcours votre tableau, et "grade" aura directement la valeur
    for (const grade of arrayGrades) {
        sum += grade;
    }
    return sum / arrayGrades.length;
}

// calcAverage([12, 15, 19, 2, 14]);
console.log('Résultat exo 2 : ' + calcAverage([12, 15, 19, 2, 14]));
console.log('Résultat exo 2 : ' + calcAverage([18, 16, 10, 6, 13]));
console.log('Résultat exo 2 : ' + calcAverage([20, 15, 20, 10, 15]));

/**
 * Exo 3 - fonction calcul TTC
 * @param priceHT
 * @param quantity
*/
function calcTTC(priceHT: number, quantity: number, taxes: number = 19.6): string {
    return (priceHT * quantity * (taxes / 100 + 1)).toFixed(2);
}

console.log('Résultat exo 3 : Prix TTC de 10 items à 20€/u : ' + calcTTC(20, 10) + '€');

/**
 * Exo 4 - fonction waterState
 * @param temperature
 */
function waterState(temperature: number): string {
    if (temperature <= 0) {
        return 'Solide';
    } else if (temperature >= 100) {
        return 'Gaz';
    }
    return 'Liquide';
}

console.log('Résultat exo 4 - température de -5 est ' + waterState(-5));
console.log('Résultat exo 4 - température de 112 est ' + waterState(112));
console.log('Résultat exo 4 - température de 55 est ' + waterState(55));

/**
 * Exo 5 - fonction moyenne des étudiants
 *
 * arrayStudents: {'name': string, 'grades': number[]}[]
 */
function calcStudentsAverage(arrayStudents: Array<{'name': string, 'grades': Array<number>}>): void {
    for (const student of arrayStudents) {
        console.log('Résultat exo 5 - moyenne de ' + student.name + ' est ' + calcAverage(student.grades));
    }
}

const students: Array<{'name': string, 'grades': Array<number>}> = [
    { 'name': 'Albert', 'grades': [12, 8, 9, 7, 13] },
    { 'name': 'Vincent', 'grades': [14, 13, 12, 11, 10] },
    { 'name': 'Michel', 'grades': [17, 16, 15, 18, 13] },
];
calcStudentsAverage(students);

// La fonction filter permet de filtrer un tableau, la fonction fléchée indique sous quelle condition le nouveau tableau sera renvoyé
// Ici on renvoie un tableau des étudiants ayant une moyenne supérieure à 10
console.log(students.filter((student) => calcAverage(student.grades) >= 10));

/**
 * Exo 6 - calcPercent
 */
function calcPercent(price: number, percent: number): string {
    return (price * (percent / 100 + 1)).toFixed(2);
}

console.log(calcPercent(100, 15));

/**
 * Exo 7 - removeDual
 */
function removeDual(arrayDual: Array<number> = [1, 5, 2, 3, 3, 3, 4, 5, 5]): Array<number> {
    // Créer un tableau temporaire
    let tmpArray: Array<number> = new Array();
    // Parcours de notre tableau
    for (const digit of arrayDual) {
        // Vérifier si notre itération en cours existe dans un tableau temporaire
        // Si non, alors on l'ajoute
        if (tmpArray.indexOf(digit) === -1) {
        // if (!tmpArray.includes(digit)) {
            tmpArray.push(digit);
        }
    }
    // retourner le nouveau tableau
    return tmpArray;
}

console.log(removeDual());
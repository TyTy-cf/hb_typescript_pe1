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

/**
 * Exo 8 - removeDual
 */
function mutliTable(digit: number): void {
    for(let i = 1; i <= 12; i++) {
        console.log(digit + ' x ' + i + ' = ' + (i * digit));
    }
}
mutliTable(5);

/**
 * Exo 9 - excerpt
 */
function excerpt(text: string, nb: number = 15): string {
    if (text.length < nb) {
        return text;
    }
    return text.substring(0, nb) + '...';
}
console.log(excerpt('Lorem quisque class vestibulum'));

/**
 * Exo 10 - checkPassword
 */
function checkPassword(password: string): boolean {
    // si le password est < 9 characters ou qu'il ne contient pas @, alors
    if (password.length < 9 || !password.includes('@')) {
        // renvoie false
        return false;
    }
    return true;
}
console.log('Résultat exo 10 : password is ' + checkPassword('azerty@'));

/**
 * Exo 11 - transformMillisec
 *  1252008 => 03h05"02'001
 */
function transformMillisec(millesec: number): string {
    const ms: number = millesec % 1000;
    const secondsMins: number = Math.floor(millesec / 1000);
    const seconds: number = secondsMins % 60;
    const mins: number = Math.floor(secondsMins / 60);
    const minsStr: string = mins < 10 ? '0' + mins : ''+mins;
    const secsStr: string = seconds < 10 ? '0' + seconds : ''+seconds;
    const milliStr: string = ms < 10 ? '00' + ms : ms < 100 ? '0' + ms : '' +ms;
    return minsStr + ':' + secsStr + '"' + milliStr;
}
console.log('Résultat exo 11 : ' + transformMillisec(159753));

/**
 * Exo 12 - transform
 *  chat => chafeat
 */
function transform(word: string, transformValue: string = 'fe'): string {
    // Déclarer une nouvelle chaine de caractère
    let newStr: string = '';
    // Déterminer les voyelles => tableau
    const vowels: Array<string> = ['a', 'e', 'o', 'i', 'u', 'y'];
    // Pour chaque lettre
    for (const letter of word) {
        // on ajoute la lettre dans une nouvelle chaine de caractère
        newStr += letter;
        // Si la lettre est une voyelle, alors
        if (vowels.includes(letter)) {
            // on ajoute transformValue
            newStr += transformValue;
            // on répète la lettre dans une nouvelle chaine de caractère
            newStr += letter;
        }
    }
    // La renvoie la nouvelle chaine de caractère
    return newStr;
}
console.log('Résultat exo 12 : ' + transform('chat'));
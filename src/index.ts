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

/**
 * Exemple d'interface (assimilé Json)
 */
interface Student {
    name: string;
    grades: Array<number>;
}
const grades: Array<number> = [12, 8, 9, 7, 13];
const students: Array<Student> = [
    { name: 'Albert', grades },
    { name: 'Vincent', grades: [14, 13, 12, 11, 10] },
    { name: 'Michel', grades: [17, 16, 15, 18, 13] },
];
// Mon interface a les mêmes attribut que le paramètre attendu dans ma fonction, ça marche !
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

/**
 * Exo 13 - inverseString
 */
function inverseString(aString: string): string {
    let returnedString: string = '';
    for(let i = aString.length - 1; i >= 0; i--) {
        returnedString += aString[i];
    }
    return returnedString;
}
console.log('Résultat exo 13 : ' + inverseString('uaepahc'));

/**
 * Exo 14 - isPangram
 */
function isPangram(myString: string): boolean {
    let savedLetters: Array<string> = [];
    myString = myString.toLowerCase();
    const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for (const letter of myString) {
        if (letter !== ' ') {
            if (alpha.includes(letter) && !savedLetters.includes(letter)) {
                savedLetters.push(letter);
            }
        }
    }
    // un test de if, renvoie toujours true ou false
    // ici, on renvoie true si la taille de notre tableau de sauvegarde est égale à la taille du tableau de l'alphabet
    return savedLetters.length === alpha.length;
}
console.log('Résultat exo 14 : ' + isPangram('the quick brown fox jumps over the lazy dog'));

/**
 * Exo 15 - getScrabbleScore
 */

interface ScrabbleCount {
  point: number;
  alpha: Array<string>;
}

function getScrabbleScore(myString: string): number {
    const scores: Array<ScrabbleCount> = [
        { point: 1, alpha: ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'] },
        { point: 2, alpha: ['d', 'g'] },
        { point: 3, alpha: ['b', 'c', 'm', 'p'] },
        { point: 4, alpha: ['f', 'h', 'v', 'w', 'y'] },
        { point: 5, alpha: ['k'] },
        { point: 8, alpha: ['j', 'x'] },
        { point: 10, alpha: ['q', 'z'] },
    ];
    let finalScore: number = 0;
    // On parcourt les lettres du mot
    for (const letter of myString) {
        // Pour chaque lettre on parcourt les différents résultats
        for (const score of scores) {
            // si la lettre existe dans le tableau
            if (score.alpha.includes(letter)) {
                // alors, on augmente le score du nombre de points
                finalScore += score.point;
                // On arrête la deuxième boucle : on a trouvé notre lettre, pas besoin de continuer
                break;
            }
        }
    }
    return finalScore;
}
console.log('Résultat exo 15 : ' + getScrabbleScore('quick'));

/**
 * Exo 16 - beerSong
 *
 * Fonction récursive
 */
function getBeerSong(nbBeers: number): void {
    // Il faut un test d'arrêt
    if (nbBeers > 0) {
        console.log(nbBeers + ' ' + getPlural(nbBeers, 'bottle') + ' of beer on the wall, ' + nbBeers + ' ' +  getPlural(nbBeers, 'bottle') + ' of beer.');
        const lesserBeers: number = nbBeers - 1;
        // if ternaire : condition ? resultat si true : resultat si false
        const textLessBeers: string = (lesserBeers > 0) ? lesserBeers + '' : 'no more';
        console.log('Take one down and pass it around, ' + textLessBeers + ' ' + getPlural(lesserBeers, 'bottle') + ' of beer on the wall.');
        // une valeur qui est modifiée au fur et à mesure : soit augmenté, soit réduite
        getBeerSong(nbBeers - 1);
    } else {
        console.log('No more bottles of beer on the wall, no more bottles of beer.');
        console.log('Go to the store and buy some more, 99 bottles of beer on the wall.');
    }
}
getBeerSong(99);

function getPlural(qty: number, word: string): string {
    if (qty === 1) return word;
    return word + 's';
}


abstract class Hero {

    protected _name: string;
    protected _hitPoint: number;
    protected _damageMin: number;
    protected _damageMax: number;
    protected _level: number;
    protected _defense: number;
    protected _criticalChance: number;

    constructor(name: string, hitPoint: number, damageMin: number, damageMax: number, defense: number) {
        this._name = name;
        this._hitPoint = hitPoint;
        this._damageMin = damageMin;
        this._damageMax = damageMax;
        this._defense = defense;
        this._level = 1;
        this._criticalChance = 5;
    }

    get name(): string {
        return this._name;
    }

    get hitPoint(): number {
        return this._hitPoint;
    }

    set hitPoint(value: number) {
        this._hitPoint = value;
    }

    get damageMin(): number {
        return this._damageMin;
    }

    get damageMax(): number {
        return this._damageMax;
    }

    get level(): number {
        return this._level;
    }

    get defense(): number {
        return this._defense;
    }

    get criticalChance(): number {
        return this._criticalChance;
    }

    levelUp(): void {
        this._level += 1;
        this._criticalChance += 0.25;
    }

    /**
     * Ajoute des niveaux au héro
     *
     * @param nbLevel le nombre de hero à ajouter
     */
    addLevel(nbLevel: number): void {
        for (let i = 0; i < nbLevel; i++) {
            this.levelUp();
        }
    }

    /**
     * Fonction d'attaque du héro courant
     *
     * @param target le héro attaqué
     */
    attack(target: Hero): void {
        // Déterminer les dégâts du héro : un alétoire entre ses dégâts min et max
        let damages = this.getRandomBetween(this._damageMin, this._damageMax);
        // Déterminer si le coup est critique,
        if (this._criticalChance >= this.getRandomBetween(0, 100)) {
            // un coup critique inflige 50% en plus des dégâts normaux
            damages *= 1.5;
            console.log('Le hero ' + this.name + ' a réalisé un coup critique !');
        }
        // Puis le coup est réduit par la défense du héro attaqué
        // 1 - (target.defense/100) => une valeur inférieure à 1 (ex : 0.98)
        damages = damages * (1 - (target.defense/100));
        // Puis le héro attaqué perd ses points de vie
        target.hitPoint -= Math.floor(damages);
        if (target.hitPoint < 0) {
            target.hitPoint = 0;
        }
    }

    isAlive(): boolean {
        return this._hitPoint > 0;
    }

    isDead(): boolean {
        return this._hitPoint <= 0;
    }

    /**
     * Génère un nombre alétoire entre deux valeurs (min et max)
     * @param min
     * @param max
     */
    getRandomBetween(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    useItem(item: HealingPotion): void {
        this._hitPoint += item.value;
    }
}

class Mage extends Hero {

    constructor(name: string) {
        super(name, 300, 52, 58, 2);
    }

    levelUp(): void {
        // super est le mot clé pour appeler le comportement de la mère
        super.levelUp();
        this._hitPoint += 25;
        this._damageMin += 4;
        this._damageMax += 4;
        if (this._level%5 === 0) {
            this._defense += 1;
        }
    }
}

class Warrior extends Hero {

    constructor(name: string) {
        super(name, 360, 42, 47, 4);
    }

    levelUp(): void {
        // super est le mot clé pour appeler le comportement de la mère
        super.levelUp();
        this._hitPoint += 39;
        this._damageMin += 2;
        this._damageMax += 2;
        if (this._level%3 === 0) {
            this._defense += 1;
        }
    }
}

class Rogue extends Hero {

    constructor(name: string) {
        super(name, 320, 42, 52, 3);
    }

    levelUp(): void {
        // super est le mot clé pour appeler le comportement de la mère
        super.levelUp();
        this._hitPoint += 33;
        this._damageMin += 3;
        this._damageMax += 3;
        if (this._level%4 === 0) {
            this._defense += 1;
        }
    }
}

// exemple d'utilisation d'une potion de soin
interface HealingPotion {
    name: string;
    value: number;
}

const maeva: Hero = new Warrior('maeva');
const safia: Hero = new Rogue('Safia');
// On créé une potion de soin
const lowerHealingPot = {
  name: 'Petite potion',
  value: 50,
};
const heroes: Array<Hero> = [maeva, safia];
// Tant que les deux héros sont en vie, on poursuit le combat
while (maeva.isAlive() && safia.isAlive()) {
    const index = getRandomBetween(0, 1);
    const first: Hero = heroes[index];
    // Math.abs renvoie la valeur absolu, ici j'aurai toujours 0 ou 1
    const second: Hero = heroes[Math.abs(index - 1)];
    console.log('Le premier hero à attaquer est ' + first.name);
    first.attack(second);
    if (second.isAlive()) {
        second.attack(first);
    }
}

console.log(maeva);
console.log(safia);
// On affiche le gagnant, ou le perdant
displayWinner(maeva);
displayWinner(safia);

/**
 * @param hero le hero dont on veut spécifier s'il a gagné ou perdu
 */
function displayWinner(hero: Hero): void {
    if (hero.isDead()) {
        console.log(hero.name + ' a perdu !');
    } else {
        console.log(hero.name + ' a gagné !');
    }
}

function getRandomBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

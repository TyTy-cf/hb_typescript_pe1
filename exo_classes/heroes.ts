
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

const kevin: Mage = new Mage('Kevin');
const safia: Mage = new Mage('Safia');

console.log(kevin);
console.log(safia);

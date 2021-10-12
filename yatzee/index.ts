
class Dice {

    private _value: number;

    constructor() {
        this._value = Math.floor(Math.random() * (6 - 1)) + 1;
    }

    get value(): number {
        return this._value;
    }
}

class Yatzee {

    private _myDice: Array<Dice>;

    throwDice(): void {
        // C'EST LA MEME CHOSE
        // this._myDice = new Array<Dice>();
        this._myDice = [];
        for (let i = 1; i <= 5; i++) {
            // new Dice => instancie un objet Dice
            // Dans le constructeur de Dice, on génère sa valeur, du coup, on a des dés avec déjà une valeur
            this._myDice.push(new Dice());
        }
    }

    get myDice(): Array<Dice> {
        return this._myDice;
    }
}

const yatzee = new Yatzee();
yatzee.throwDice();
console.log(yatzee.myDice);

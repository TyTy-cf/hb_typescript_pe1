
class ChessBoard {
    private _damier: Array<Case> = new Array();

    constructor() {
        let color: string = 'noir';
        for(let y = 1; y <= 8; y++) {
            for(let x = 1; x <= 8; x++) {
                this._damier.push(new Case(color, x, y, undefined));
                if (x !== 8) {
                    if (color === 'noir') {
                        color = 'blanc';
                    } else {
                        color = 'noir';
                    }
                }
            }
        }
    }

    get damier(): Array<Case> {
        return this._damier;
    }
}

class Case {
    // noir/blanc
    private _color: string;
    private _x: number;
    private _y: number;
    private _piece: Piece|undefined;

    constructor(color: string, x: number, y: number, piece: Piece | undefined) {
        this._color = color;
        this._x = x;
        this._y = y;
        this._piece = piece;
    }

    get color(): string {
        return this._color;
    }

    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }

    get piece(): Piece | undefined {
        return this._piece;
    }

    set piece(piece: Piece | undefined) {
        this._piece = piece;
    }
}

abstract class Piece {

    protected _color: string;
    protected _name: string;

    constructor(color: string, name: string) {
        this._color = color;
        this._name = name;
    }

    get color(): string {
        return this._color;
    }

    get name(): string {
        return this._name;
    }

    abstract move(): void;
}

class King extends Piece {

    constructor(color: string) {
        // L'attribut name du roi, sera toujours 'Roi', qu'il soit blanc ou noir, du coup on peut lui dire directement dans les paramètres du constructeur pour la mère
        super(color, 'Roi');
    }

    move(): void {
        console.log('Move du Roi');
    }
}

class Queen extends Piece {

    constructor(color: string) {
        super(color, 'Reine');
    }

    move(): void {
        console.log('Move de la reine');
    }
}

class Knight extends Piece {

    constructor(color: string) {
        super(color, 'Cavalier');
    }

    move(): void {
        console.log('Move du Cavalier');
    }
}

class Bishop extends Piece {

    constructor(color: string) {
        super(color, 'Fou');
    }

    move(): void {
        console.log('Move du Fou');
    }
}

class Rook extends Piece {

    constructor(color: string) {
        super(color, 'Tour');
    }

    move(): void {
        console.log('Move de la tour');
    }
}

class Pawn extends Piece {

    constructor(color: string) {
        super(color, 'Pion');
    }

    move(): void {
        console.log('Move du pion');
    }
}

// const kingB = new King('noir');
// const kingW = new King('blanc');
// console.log(kingB);
// console.log(kingW);
const board = new ChessBoard();
console.log(board.damier);
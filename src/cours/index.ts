
/**
 * Exemple de classe User
 */
class User {

    private _name: string;

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        if (!name) {
            console.log('Erreur sur le name');
            return;
        }
        this._name = name;
    }

    constructor(name: string = 'Kevin') {
        this._name = name;
    }

    getBetterName(): string {
        return this._name.toUpperCase();
    }
}

let user: User = new User();
console.log(user.name); // get appelé implicitement

/**
 * Héritage avec la classe Product
 */
abstract class Product {
    protected _name: string;
    protected _price: number;
    protected _description: string;

    constructor(name: string, price: number, description: string) {
        this._name = name;
        this._price = price;
        this._description = description;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    getPriceWithUnit(unit: string = '€'): string {
        return this._price + unit;
    }

    abstract getTaxesPrice(): number;
}

class DogBasket extends Product {
    private _color: string;

    constructor(name: string, price: number, description: string, color: string) {
        // Le mot clé "super" permet de rappeler la même méthode, mais de la classe mère
        super(name, price, description);
        this._color = color;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    getPriceWithUnit(unit: string = '€'): string {
        // On peut rappeler dans une même méthode, celle de la classe mère via le "super"
        return "Panière " + super.getPriceWithUnit(unit);
    }

    getTaxesPrice(): number {
        return this._price * 1.196;
    }
}

class DogToy extends Product {

    getTaxesPrice(): number {
        return this._price * 1.055;
    }

}

const dogBasket: DogBasket = new DogBasket('Panière rouge', 50, 'Super description de ma panière rouge', 'rouge');
const dogToy: DogToy = new DogToy('Os', 15, 'Super os pour chien toute résistance');

let products: Array<Product> = new Array();
products.push(dogBasket);
products.push(dogToy);

for (const product of products) {
    // Ici on va tester le type de l'instance, afin de pouvoir afficher un attribut spécifique
    if (product instanceof DogBasket) {
        console.log(product.color);
    } else {
        console.log('Je n ai pas de couleur');
    }
    // Ici, chaque fille va appeler sa propre méthode getTaxesPrice
    console.log(product.getTaxesPrice());
    // Ici, les DogBAsket vont appeler leur méthode getPriceWithUnit
    // Les DogToy vont appeler la méthode getPriceWithUnit de la mère
    console.log(product.getPriceWithUnit());
    console.log('----------------------------------------');
}

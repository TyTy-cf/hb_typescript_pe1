
class BankAccount {

    private _name: string;
    private _balance: number;
    private _active: boolean;

    constructor(name: string) {
        this._name = name;
        this._balance = 0;
        this._active = true;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get balance(): number {
        return this._balance;
    }

    get active(): boolean {
        return this._active;
    }

    withdraw(amount: number): string {
        if (!this._active || this._balance - amount < 0) {
            return 'Vous n\'avez pas la somme sur votre compte ou votre compte est inactif';
        }
        this._balance -= amount;
        return 'Retrait OK : il vous reste ' + this._balance + ' sur votre compte';
    }

    deposit(amount: number): string {
        if (!this._active) {
            return 'Votre compte est inactif';
        }
        this._balance += amount;
        return 'Depot OK : vous avez ' + this._balance + ' sur votre compte';
    }

    closeAccount(): void {
        this._active = false;
    }
}

let bankAccount = new BankAccount('Kevin');
console.log(bankAccount);
console.log(bankAccount.withdraw(50));
console.log(bankAccount.deposit(50));
console.log(bankAccount.withdraw(30));

bankAccount.closeAccount();
console.log(bankAccount.withdraw(10));
console.log(bankAccount.deposit(10));

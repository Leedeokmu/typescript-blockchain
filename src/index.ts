class Human {
    private _name:string;
    private _age:number;
    private _gender: string;
    constructor(name:string, age:number, gender:string){
        this._name = name;
        this._age = age;
        this._gender = gender;
    }
    set name(name: string) {
        this._name = name;
    }
    set age(value: number) {
        this._age = value;
    }

    set gender(value: string) {
        this._gender = value;
    }

    get name(): string {
        return this._name;
    }

    get age(): number {
        return this._age;
    }

    get gender(): string {
        return this._gender;
    }
}

const deokmu = new Human('deokmu', 24, 'mail');
deokmu.age = 12;
const sayhi = (person: Human): string => {
    return `hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
}

console.log(sayhi(deokmu));

export {}
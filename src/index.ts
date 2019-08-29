const name = "deokmu",
    age = 24,
    gender = "mail"

const sayhi = (name:string, age:number, gender:string): string => {
    return `hello ${name}, you are ${age}, you are a ${gender}`;
}

sayhi("deokmu", 12, "mail");

export {}
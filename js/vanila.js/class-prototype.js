class Car {
    constructor(engine, tire) {
        this.engine = engine;
        this.tier = tire;
    }

    move() {
        return "move!";
    }
}

class Hyundai extends Car {
    booster() {
        console.log(super.move());
        return "booster!";
    }
}

let avante = new Hyundai('I4', 4);
console.log(avante);
console.log(avante.move());
console.log(avante.booster());

let superObj = {
    superVal: 'super'
}

let subObj = {
    subVal: 'sub'
}

subObj.__proto__ = superObj;

console.log(subObj.subVal);
subObj.superVal = 'sub2';
console.log(subObj.superVal);
console.log(superObj.superVal);

// __proto__
let subObj2 = Object.create(superObj);
subObj2.subVal = 'sub2';
console.log(subObj2.subVal);
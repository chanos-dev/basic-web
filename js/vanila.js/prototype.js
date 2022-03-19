console.group('Math');
console.log(Math.PI);
console.log(Math.random());
console.log(Math.floor(3.9));
console.log(Math.round(3.9));
console.log(Math.trunc(3.9));
console.groupEnd('Math');

var myMath = {
    PI:Math.PI,
    random: function() {
        return Math.random();
    },
    floor: function(val) {
        return Math.floor(val);
    }
}

console.log(myMath.random());

var person = {
    name:"baek",
    first:10,
    second:20,
    sum : function(f, s) {
        return f+s;
    },
    thisSum : function() {
        return this.first + this.second;
    }
}

console.log(person.sum(person.first, person.second));
console.log(person.thisSum());

function Animal(name, sex, type) {
    this.name = name;
    this.sex = sex;
    this.type = type;
    this.toString = function() {
        return name + ' / ' + sex + ' / ' + type;
    }
}

Animal.prototype.prototypeMethod = function() {
    return 'prototype!! ' + this.name;
}

let tiger = new Animal('tiger', 3, 'F');
let lion = new Animal('lion', 4, 'M');

console.log(tiger);
console.log(lion.toString(), lion.name);

tiger.prototypeMethod = function() {
    return 'modified prototype!! ' + this.name;
}

console.log(tiger.prototypeMethod(), lion.prototypeMethod());
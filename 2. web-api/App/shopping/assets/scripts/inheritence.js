
class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`My name is ${this.name}, age is ${this.age}`);
    }
}

class Dog extends Pet {
    constructor(name, age, hobby) {
        super(name, age);
        this.hobby = hobby;
    }
}
class Cat extends Pet {
    constructor(name, age, sleep) {
        super(name, age);
        this.sleep = sleep;
    }
}

const dog = new Dog('happy', 4, '산책');
const cat = new Cat('hobak', 6, '예지관에서 배까기.');

dog.introduce();
cat.introduce();
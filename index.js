// Your code here
class Cat {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  speak() {
    console.log(`${this.name} says meow!`);
  }
}
class Dog {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
}
class Bird {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
}

let sasha = new Cat('Sasha', 'Girl');
sasha.speak();

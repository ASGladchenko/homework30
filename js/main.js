class Animal {
    constructor(name) {
        this.name = name
    }

    sayHi (){
        alert(`My name is ${this.name}`)
    }
}
class Dog extends Animal{
    super(name) {
        this.name = name
    }
    sayHello(){
        alert(`Hello from ${this.name}, I am a Dog`)
    }
}
class Cat extends Animal{
    super(name) {
        this.name = name
    }
    sayHello(){
        alert(`Hello from ${this.name}, I am a Cat`)
    }
}
class Animal {
    constructor(name) {
        this.name = name
    }

    sayHi() {
        alert(`My name is ${this.name}`)
    }
}

class Dog extends Animal {
    sayHello() {
        alert(`Hello from ${this.name}, I am a Dog`)
    }
}

class Cat extends Animal {
    sayHello() {
        alert(`Hello from ${this.name}, I am a Cat`)
    }
}

let pet;

let form = document.querySelector('form')

let input = form.querySelector('input')

let sayDiv = document.querySelector('.hi')

form.addEventListener('click', (event) => {
    event.preventDefault()
    if (event.target.tagName !== "INPUT" && !validator(event.target)) {
        alert('Your pet\'s name must contain at least 3 characters')
        return
    }
    if (event.target.id === "dog") {
        pet = new Dog(input.value)
        input.value = ""
        form.remove()
    }
    if (event.target.id === "Cat") {
        pet = new Cat(input.value)
        input.value = ""
        form.remove()
    }


})

sayDiv.addEventListener('click', (event) => {
    if (event.target.tagName !== "BUTTON") return
    if (event.target.dataset.pet === "SayHi") pet.sayHi()
    if (event.target.dataset.pet === "SayHello") pet.sayHello()
})

function validator(element) {
    if (element.tagName === "BUTTON" && (input.value !== "" && input.value.length >= 3)) return true
}


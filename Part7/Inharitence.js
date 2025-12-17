// Inharitence in JavaScript
// Single Inheritance
// Multilevel Inheritance

// Single Inheritance

class LivingOrganism{
    breathe(){
        console.log("Living organism is breathing");
    }
}
// It is called superclass or base class
class Aimal extends LivingOrganism{
    walking(){
        console.log("Animal is walking");
    }
}
// It is called subclass or derived class
class Dog extends Aimal{
    speak(){
        console.log("Dog barks");
    }
}

let dog = new Dog();
dog.walking();
dog.breathe();
let myanimal = new Aimal();
myanimal.breathe();
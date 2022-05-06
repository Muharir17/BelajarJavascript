class Animal{
    eat = () => console.log('I am eating')
}

class Dog extends Animal{
    weight = 20;
    age = 8;
    bark = () => console.log('Argg Argg Argg')
}

puppy = new Dog()

puppy.bark()
puppy.eat()
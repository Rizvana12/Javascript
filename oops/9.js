// class Animal{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     eat(){
//         return `${this.name} is eating.`
//     }
//     isSuperCute(){
//         return this.age<=1;
//     }
//     isCute(){
//         return true;
//     }
// }

// const tommy = new Animal("tommy",3);

// console.log(tommy);
// console.log(tommy.isSuperCute());
// console.log(tommy.isCute());



class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating.`
    }
    isSuperCute(){
        return this.age<=1;
    }
    isCute(){
        return true;
    }
}
class Dog extends Animal{
    //Dog class is derive/subclass class and Animal class is base/parent class
    //Dog class inherit the properties and method of Animal class
   
}

const tommy =new Dog("tommy",2);
console.log(tommy);//Dog class doesn't have its own constructor so it uses the Animal class constructor and its methods

console.log(tommy.isCute());
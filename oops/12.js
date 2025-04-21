//static

class Person{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    static classInfo(){
         return `this is Person method.`
    }
    static desc = "this is Person property."
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(fullName){
        const [firstName,lastName] = fullName.split(" ")
        this.firstName = firstName;
        this.lastName =lastName;

    }
    eat(){
        return `${this.firstName} is eating.`
    }
    isSuperCute(){
        return this.age<=1;
    }
    isCute(){
        return true;
    }
}

const person1 = new Person("Harshith","Vshishtha",25);

console.log(person1.eat());

//the methods eat(), isSuperCute() and isCute() are related to object

//we can also create method which is related with Person class by using static keyword

console.log(Person.classInfo());

//we can also create static properties also

console.log(Person.desc);
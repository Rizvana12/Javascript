// getter and setter

//getter
// class Person{
//     constructor(firstName,lastName,age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// const person1 = new Person("Rizvana","Khan",20);
// console.log(person1.fullName());

//we can call the method without printing it but we can not call the propertie we have print it using console.log()

//but if try to console.log(person1.fullName) without putting the parenthesis it doesn't print the output

//if we want to use the method as property use get before function fullName()
// console.log(person1.fullName);


//setter

class Person{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    // setName(firstName,lastName){
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // }

    set fullName(fullName){
        const [firstName,lastName] = fullName.split(" ")
        this.firstName = firstName;
        this.lastName =lastName;

    }
}

const person1 = new Person("Rizvana","Khan",20);
// console.log(person1.firstName);
// console.log(person1.lastName);

// person1.setName("Mohit","Kumar");

// console.log(person1.firstName);
// console.log(person1.lastName);

person1.fullName = "Mohit Vashishtha";
console.log(person1);

console.log(person1.lastName);
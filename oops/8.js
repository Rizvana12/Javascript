//classes are fake in javascript
//the new keyword call the constructor function
// if we dosn't write new keyword it doesn't create the object

class CreateUser{
    constructor(firstName,age,address,email){
        this.firstName = firstName;
        this.age =age;
        this.address =address;
        this.email =email;
    }
    about(){
        return `${this.firstName} is ${this.age} years old.`
    }
    eligible(){
        return this.age>=18;
    }
    sing(){
        return 'lalala';
    }
}

const user1 = new CreateUser("Rizvana",20,"address","rizvana@gmail.com");

console.log(user1);

console.log(user1.sing());

// console.log(Object.getPrototypeOf(user1));
//methods
//function inside object

const person = {
    firstName: "Rizvana",
    age: 20,
    about: function(){
        console.log(`Person name is ${this.firstName} and person age is ${this.age}`);
    }
}

person.about();
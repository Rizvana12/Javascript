const user1 = {
    firstName: "Rizvana",
    age: 20,
    about: function(){
        console.log(this.firstName, this.age);
    }
}

// const funct = user1.about.bind(user1);
const funct = user1.about();
console.log(funct);
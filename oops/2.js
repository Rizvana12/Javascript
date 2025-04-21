function createObject(firstName,age,gender,address,email){
   user={};
   user.firstName = firstName;
   user.age = age;
   user.gender = gender;
   user.address = address;
   user.email = email;
   user.about = function(){
    return `${this.firstName} is ${this.age} years old`;
   }
   user.eligible = function(){
    return this.age>=18;
   }
   return user;
}

const newUser = createObject("Rizvana",20,"female","my address","rizvana@gmail.com");

console.log(newUser);
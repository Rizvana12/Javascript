const methods = {
    about:function(){
        return `${this.firstName} is ${this.age} years old`;
       },
    eligible: function(){
        return this.age>=18;
    }
}
function createObject(firstName,age,gender,address,email){
    const user = Object.create(methods);
    user.firstName = firstName;
    user.age = age;
    user.gender = gender;
    user.address = address;
    user.email = email;
    return user;
 }
 
 const newUser = createObject("Rizvana",20,"female","my address","rizvana@gmail.com");
 
 console.log(newUser);
 console.log(newUser.about());
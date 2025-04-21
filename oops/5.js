// const methods = {
//     about:function(){
//         return `${this.firstName} is ${this.age} years old`;
//        },
//     eligible: function(){
//         return this.age>=18;
//     },
//     sing: function(){
//         return "lalala";
//     }
// }
function createObject(firstName,age,gender,address,email){
    const user = Object.create(createObject.prototype);
    user.firstName = firstName;
    user.age = age;
    user.gender = gender;
    user.address = address;
    user.email = email;
    return user;
 }
 createObject.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old`;
 }
 createObject.prototype.eligible = function(){
    return this.age>=18;
 }
 createObject.prototype.sing = function(){
    return "lalala";
 }
 const user1 = createObject("Rizvana",20,"female","my address","rizvana@gmail.com");
 const user2 = createObject("Mohit",25,"male","address","mohit@gmail.com");
 const user3 = createObject("Nitish",18,"male","my address2","nitisha@gmail.com");
 
 console.log(user1);
 console.log(user1.about());





 //function has prototype
 //protoype is nothing but an empty object => {}

// in above code the empty object proviided by the prototype has saved the methods(about,eligible,sing) so everytime createObject is called all the user1,user2 and user3 share the copy of the protype object

//user1 ,user2, user3 have individual [[prototype]] which point the createObject.prototype

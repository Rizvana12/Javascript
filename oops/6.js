//new keyword
  //1) gives empty object which is equal to this
  //2) it returns this
  //3)it automatically save the prototype inside proto


// function createUser(firstName,age){
//    this.firstName = firstName;
//    this.age = age;
   
// }
// createUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old.`
// }
// const user1 = new createUser("Rahul",25);

// console.log(user1);
// console.log(user1.about());


function CreateObject(firstName,age,gender,address,email){
    
    this.firstName = firstName;
    this.age = age;
    this.gender = gender;
    this.address = address;
    this.email = email;
    
 }
 CreateObject.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old`;
 }
 CreateObject.prototype.eligible = function(){
    return this.age>=18;
 }
 CreateObject.prototype.sing = function(){
    return "lalala";
 }
 const user1 =new CreateObject("Rizvana",20,"female","my address","rizvana@gmail.com");
 const user2 =new CreateObject("Mohit",25,"male","address","mohit@gmail.com");
 const user3 =new CreateObject("Nitish",18,"male","my address2","nitisha@gmail.com");


 console.log(user1);

 console.log(user1.sing());

 console.log(user2.firstName);


//we want to print the keys present in user1

// for(let key in user1){
//     console.log(key);
// }

//if we have to print only keys which is present inside user1 not the prototype

for(let key in user1){
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
}
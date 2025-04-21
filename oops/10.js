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
    //creating Dog class own constructor
    constructor(name,age,speed){
        //we don't need to define the name and age parameter
        //insert the name and age parameter in super() class because super class is nothing but Animal class
        super(name,age);
        this.speed =speed;
    }
    run(){
        return `${this.name} is running at ${this.speed}kmph`
    }
}

const tommy =new Dog("tommy",2,45);

// console.log(tommy);

console.log(tommy.run()); //first it checks if there is run() method in Dog class if it is not there then it will check Animal class

function func(){
    let count=0;
   
   return function(){
    count++
    if(count==1){
        console.log("Hi I am called");
    }else{
        console.log("I am already called one time");
    }
   }
}

const myFunc = func();

myFunc()
myFunc()
myFunc()


//the func() function returns a function and the returned function has access the local memory of func() function
//A closure in JS is a function that remembers the variables from its outer function scope even after that outer function has finished executing
//here in this code myFunc() points the returned function 
//so when myFunc() called first time the value of count in local m/m of returned function is 1
//and when myFunc() again called then it uses the same local m/m of returned function so now the count value has increased by 1 and it becomes 2.


const myFunc2 = func()
myFunc2();
myFunc();
myFunc2();
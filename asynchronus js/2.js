//setinterval
//it repeats the task again and again in a given time interval
const id=setInterval(function(){
    console.log("I am inside setinterval")
},1000)
console.log(id)
clearInterval(id)
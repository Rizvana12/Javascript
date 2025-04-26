//solve previous question using Promise

//🔹 Use resolve/reject inside the Promise constructor
//🔹 Use return / throw inside .then()

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");

function changeText(element,text,color,time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(element){
                element.textContent = text
                element.style.color = color
                resolve("step 1 done")
            }else{
                reject("element not found")
            }
        },time)
    })
}

//Each .then() waits for the previous Promise to finish.

//Each one returns a new Promise (changeText(...)) that resolves after 1 second

changeText(heading1,"one","red",1000)
.then(()=>changeText(heading2,"two","purple",1000))
.then(()=>changeText(heading3,"three","green",1000))
.then(()=>changeText(heading4,"four","blue",1000))
.then(()=>changeText(heading5,"five","brown",1000))
.then(()=>changeText(heading6,"six","black",1000))
.then(()=>changeText(heading7,"seven","pink",1000))
.then(()=>changeText(heading8,"eight","orange",1000))
.then(()=>changeText(heading9,"nine","yellow",1000))
.then(()=>changeText(heading10,"ten","skyblue",1000))
.catch((error)=>{alert(error)})
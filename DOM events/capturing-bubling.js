const child=document.querySelector(".child");
const parent = document.querySelector(".parent")
const grandParent = document.querySelector(".grandparent")
// child.addEventListener("click",function(){
//     console.log(child.textContent)
// })
//bubble ---> The event bubbles back up from the target to the outermost ancestor. 
//capture--->The event travels from the outermost ancestor (usually document) down to the target
//capturing-events

// child.addEventListener("click",()=>{
//     console.log("capture !! child")
// },true)

// parent.addEventListener("click",()=>{
//     console.log("capture !! parent")
// },true)

// grandParent.addEventListener("click",()=>{
//     console.log("capture !! grandparent")
// },true)

// document.body.addEventListener("click",()=>{
//     console.log("capture!! body")
// },true)

//not capture

// child.addEventListener("click",()=>{
//     console.log("bubble child")
// })

// parent.addEventListener("click",()=>{
//     console.log("bubble parent")
// })

// grandParent.addEventListener("click",()=>{
//     console.log("bubble grandparent")
// })

// document.body.addEventListener("click",()=>{
//     console.log("bubble body")
// })

//event delegation--->it handles events on a higher level in DOM
//rather than attaching event listeners to each individual element

grandParent.addEventListener("click",function(e){
    console.log(e.target)
})

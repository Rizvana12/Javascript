const rootNode = document.getRootNode();
// const childNode = rootNode.childNodes[0];
// console.log(childNode.childNodes)

const child =document.querySelector(".child");
const grandParent = document.querySelector(".grandparent")
const parent = document.querySelector(".parent")

// const childNode = grandParent.childNodes[1]
// console.log(childNode)
// console.log(child)
// const parentNode = child.parentNode
// console.log(parentNode)

const upperNode = child.parentNode.parentNode
console.log(upperNode)

upperNode.style.backgroundColor ="#333"
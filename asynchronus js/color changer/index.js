const btn = document.querySelector(".btn");
const id=setInterval(function(){
    const btn = document.querySelector(".btn");
    const red = Math.floor(Math.random()*256)
    const green = Math.floor(Math.random()*256)
    const blue = Math.floor(Math.random()*256)
    const rgb = `rgb(${red},${green},${blue})`
    document.body.style.background = rgb;
},1000)

btn.addEventListener("click",()=>{
    clearInterval(id);
    btn.textContent = document.body.style.background;
})
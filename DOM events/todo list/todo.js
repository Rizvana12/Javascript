const input = document.querySelector(".input");
const formTodo = document.querySelector(".form");
const todobox = document.querySelector(".todo-box")

formTodo.addEventListener("submit",function(e){
    e.preventDefault();
    const enteredText = input.value 
    const newLi = document.createElement("li");
    newLi.innerHTML = `<span>${enteredText}</span>
                <div class="btn2">
                    <button class="btn done">Done</button>
                    <button class="btn remove">Delete</button>
                </div>`;
    todobox.append(newLi);
    input.value="";           
})

todobox.addEventListener("click",function(e){
    
    
    if(e.target.classList.includes("done")){
        const targetedLi = e.target.parentNode.previousElementSibling;
        targetedLi.style.textDecoration = "line-through";
    }
    if(e.target.classList.contains("remove")){
        const targetedLi = e.target.parentNode.parentNode;
        targetedLi.remove();
    }

})


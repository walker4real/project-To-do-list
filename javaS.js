const toDoText = document.getElementById("Text")
const Btn = document.getElementById("Btn")
const list = document.getElementById("toDoList")

function task (event) {
    event.preventDefault()
if(toDoText !== ""){
    const listItem = toDoText.value;
   const item = document.createElement("li");
   item.innerText = listItem;
    list.appendChild(item)
    toDoText.value = "";
}
}

Btn.addEventListener("click", task);



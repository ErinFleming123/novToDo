window.onload = init 

function init(){

let button1 = document.getElementById("addButton")
button1.onclick = handleButtonClick1
let button2 = document.getElementById("addListNameButton")
button2.onclick = handleButtonClick2

}



//This is for the button that adds the list name
function handleButtonClick2() {
  let listNameInput = document.getElementById("listName")
  let listName = listNameInput.value
  if (listName =="") {
    alert("Please add a list name.")
}else {
  alert("Adding " + listName)
}
let p = document.createElement("p")
p.innerHTML = listName

let h1 = document.getElementById("taskListTitle")
h1.appendChild(p)
p.insertAdjacentHTML("afterend", "<input type='text' id='taskInput' size='40' placeholder='Write a new task here'>")


}
//This is for the button that adds tasks
function handleButtonClick1() {
  let textInput = document.getElementById("taskInput")
  let task = textInput.value
  
  if (task =="") {
    alert("Please add a task")
}else {
  alert("Adding " + task)
}

let li = document.createElement("li")
//li.innerHTML = task + `<button>Delete</button>`


let ul = document.getElementById("taskList")
ul.appendChild(li)
li.innerHTML = task

li.insertAdjacentHTML("beforeend", "<button onclick='handleDelete(this)'>Delete</button>")



}

//This is for the delete button that deletes the task.

function handleDelete(e) {
  e.parentNode.parentNode.removeChild(e.parentNode)

  


}










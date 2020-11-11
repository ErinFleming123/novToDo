window.onload = init 

function init(){

let button1 = document.getElementById("addButton")
button1.onclick = handleButtonClick1
let button2 = document.getElementById("addListNameButton")
button2.onclick = handleButtonClick2
}


function handleButtonClick1() {
  let textInput = document.getElementById("taskInput")
  let task = textInput.value
  if (task =="") {
    alert("Please add a task")
}else {
  alert("Adding " + task)
}
}


function handleButtonClick2() {
  let listNameInput = document.getElementById("listName")
  let listName = listNameInput.value
  if (listName =="") {
    alert("Please add a list name.")
}else {
  alert("Adding " + listName)
}
}




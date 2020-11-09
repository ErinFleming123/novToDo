window.onload = init 

function init(){

let button = document.getElementById("addButton")
button.onclick = handleButtonClick
}


function handleButtonClick() {
  let textInput = document.getElementById("taskInput")
  let task = textInput.value
  if (task =="") {
    alert("Please add a task")
}else {
  alert("Adding " + task)
}
}




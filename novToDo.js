window.onload = init
function init() {
  let button1 = document.getElementById("addNewListButton")
  button1.onclick = handleButtonClick1
  let button2 = document.getElementByClass("addTaskBtn")
  button2.onclick = handleButtonClick2
  
  
}
let button2 = document.getElementByClass("addTaskBtn")
  button2.onclick = handleButtonClick2
  function handleButtonClick2() {
    let newTaskInput = document.getElementsByClassName("taskName")
    let newTaskName = newTaskInput.value
    if (newTaskName !== "") {
      alert("Adding " + newTaskName)
      let li = document.createElement("LI")
      li.innerHTML = newTaskName
      ul.appendChild(li)
    }

  }

function handleButtonClick1() {
  let newListInput = document.getElementById("listName")
  let newListName = newListInput.value
  if (newListName !== "") {
    alert("Adding " + newListName)
    let p = document.createElement("p")
    p.innerHTML = newListName
    let h2 = document.getElementById("taskListTitle")
    h2.appendChild(p)
    let delListBtn = document.createElement("button")
    delListBtn.innerHTML = "Delete List"
    p.appendChild(delListBtn)
    let taskForm = document.createElement("FORM")
    taskForm.innerHTML = `<input type="text"size="40" class="taskName" placeholder="Write new task here">
    <input type="button" class="addTaskBtn" value="Add New Task">`
    p.appendChild(taskForm)
    let ul = document.createElement("UL")
    taskForm.appendChild(ul)
    newListInput.value = ""
    
  }else{
    alert("Please enter a name for a new list.")
  }
  
  
  
  

  
}
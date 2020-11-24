window.onload = init
function init() {
  let button1 = document.getElementById("addNewListButton")
  button1.onclick = handleButtonClick1
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

    newListInput.value = ""
    
  }else{
    alert("Please enter a name for a new list.")
  }
  
  
  

  
}
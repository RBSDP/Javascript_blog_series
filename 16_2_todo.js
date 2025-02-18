const addBtn = document.getElementById("add-btn")
const todoInput = document.getElementById("todo-input")


addBtn.addEventListener("click", () => {





    const InputData = todoInput.value
    console.log(InputData)
    const li = document.createElement('li')
    li.innerText = InputData
    const taskContainer = document.getElementById('task-container')
    taskContainer.appendChild(li)
    const delBtn = document.createElement('button')
    delBtn.innerText = 'X'
    li.appendChild(delBtn)
    delBtn.addEventListener('click',() => 
        li.remove() )

    todoInput.value = ""


})

    
    










// btn click add task in list
document.querySelector('#btn').addEventListener("click", addTask)
// Keep Task in LS(LocalStorage)
document.addEventListener('DOMContentLoaded', getTask)

// function keep Task in LS
function getTask() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.forEach(task => {
        const ulElement = document.querySelector('.list-group')
        // create li Element
        const li = document.createElement('li')
        // append Text to li Elemnt
        li.appendChild(document.createTextNode(task))
        // add class to new li Element
        li.className = 'list-group-item animate__animated animate__backInDown'
        // create a Element
        const aElement = document.createElement('a')
        // add trash fontawesome to aElement
        aElement.innerHTML = `<i class="deleted-item fa fa-trash-o float-right" style="font-size:20px;color: red;cursor:pointer;"></i>`
        // append a Element
        li.appendChild(aElement)
        // append uiElement
        ulElement.appendChild(li)
    })
}


// function addTask
function addTask(e) {
    e.preventDefault()
    // define ui Element
    const ulElement = document.querySelector('.list-group')
    const taskValue = document.getElementById('task')
    if (taskValue.value !== '') {
        // create li Element
        const li = document.createElement('li')
        // append Text to li Elemnt
        li.appendChild(document.createTextNode(taskValue.value))
        // add class to new li Element
        li.className = 'list-group-item animate__animated animate__backInDown'
        // create a Element
        const aElement = document.createElement('a')
        // add trash fontawesome to aElement
        aElement.innerHTML = `<i class="deleted-item fa fa-trash-o float-right" style="font-size:20px;color: red;cursor:pointer;"></i>`
        // append a Element
        li.appendChild(aElement)
        // append uiElement
        ulElement.appendChild(li)
        // store in lS
        storeTaskInLocalStorage(taskValue.value)
        // clear input after add task
        taskValue.value = ''
    } else {
        alert('Are you Sure Input is not Empty !!!')
    }
}

function storeTaskInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))
}





// Remove task Element
document.body.addEventListener("click", removeTask)
function removeTask(e) {
    e.preventDefault();
    if (e.target.classList.contains('deleted-item')) {
        if (confirm('Are you Sure this Task is Done?')) {
            e.target.parentElement.parentElement.remove()

            // remove from LS
            removeTaskFromLocalStorage(e.target.parentElement.parentElement)
        }
    }
}
// remove task from LS
function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.forEach(function (task, index) {
        if (taskItem.textContent === task) {
            tasks.splice(index, 1)
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks))
}











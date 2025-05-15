const inputField = document.getElementById('todo_input');

const listContainer = document.getElementById('todo_items');

function addTask(){
    if (inputField.value === '') {
        alert('Please enter a task');
    } else{
        const li = document.createElement('li');
        li.innerText = inputField.value;
        listContainer.appendChild(li);

        
        const deleteButton = document.createElement('span');
        deleteButton.innerHTML = '\u{1F5D1}';
        li.appendChild(deleteButton);

        
        deleteButton.addEventListener('click', deleteTask, false);
        

        li.addEventListener('click', function(){
            li.classList.toggle('checked');
            saveData();
        }, false);
        
    }
    inputField.value = '';
    saveData();
}   

function deleteTask(event){
    const li = event.target.parentElement;
    listContainer.removeChild(li);
    saveData();
}

function saveData(){
    localStorage.setItem("tasks", listContainer.innerHTML) 
}

function loadData() {
    listContainer.innerHTML = localStorage.getItem("tasks")
}

loadData()
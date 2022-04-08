var tasks = [];
const tasksList = document.getElementById('list');
const addTaskInputBox = document.getElementById('add-task');

function addTodo(task){
    tasks.push(task);
    renderList();
}

function deleteTodo(taskId){
    const newtasks = tasks.filter(function(taskId){
        return task.id !== taskId;
    })
    tasks = newtasks;
    renderList();
}


function renderList(){
    for(let i =0 ;i<tasks.length;i++){
        const li = document.createElement('li');
        const task = tasks[i];

        li.innerHTML = `
            <input type="checkbox" id="${task.id}"/>
            <label for="${task.id}">${task.text}</label>
            <button  data-taskId="${task.id} class="delete">Delete</button>
        `;
        tasksList.appendChild(li);
    }
}

function checkTodo(taskId){
    const taskIndex = tasks.findindex(function(task){
        return task.id === taskId;
    })

    tasks[taskIndex].done = !tasks[taskIndex].done;
    renderList();
}

function handleClick(event){
    if(event.target.className==="delete"){
        console.log(event);
        const taskId = Number(event.target.dataset.taskId);
        deleteTodo(taskId);
    }
}

function initialize(){
    document.addEventListener('click', handleClick);
    document.addEventListener('keyup', function(e){
        if(e.key === 'Enter'){
            const text = e.target.value;

            const task = {
                id : Date.now(),
                done: false,
                text: text
            }
            addTodo(task);
        }
    });
    renderList();
}

initialize();
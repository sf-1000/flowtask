const addButton = document.getElementById('addbutton');
const usertask = document.getElementById('taskid');
const tasklist = document.getElementById('tasklist');


//create an addEventListener for the add button 

addButton.addEventListener('click', addTask)

function addTask(){
    const newTask = usertask.value.trim();

    if (newTask != ''){
        const taskinList = document.createElement('li');

        taskinList.textContent = newTask;

        tasklist.appendChild(taskinList);

        usertask.value = '';
    }

}
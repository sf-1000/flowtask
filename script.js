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

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.style.marginLeft = "15px";

        deleteBtn.addEventListener('click', function() {
            taskinList.remove();
        });

        taskinList.appendChild(deleteBtn);

        tasklist.appendChild(taskinList);

        usertask.value = '';
    }

}

function deleteTask(){

    
}
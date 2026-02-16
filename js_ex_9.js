let taskWriter = document.getElementById('taskWriter');
let addBtn = document.getElementById('addBtn');
let listOl = document.getElementById('list');
let list = [];
let editingIndex = null;

addBtn.addEventListener('click', () => {
    if (taskWriter.value !== '')  addTask(); 
});

taskWriter.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && taskWriter.value !== '') addTask();
});

function addTask() {
    addBtn.textContent = 'Agregar Tarea';
    let newTask = taskWriter.value.trim();
    if (editingIndex !== null) {
    list[editingIndex] = newTask;   // EDITA
    editingIndex = null;
    } else {
        list.push(newTask);             // AGREGA
    }
    taskWriter.value='';
    taskWriter.focus();
    localStorage.setItem('tasks', JSON.stringify(list));
    renderList();    
}
function renderList(){
    let savedTasks = localStorage.getItem('tasks');
    if (savedTasks){
        list = JSON.parse(savedTasks);
    }
    listOl.innerHTML = '';
    for (let i=0; i < list.length; i++) {
        const li = document.createElement('li');
        li.textContent = list[i]+'  ';//contenido en list + dos espacios para botones
        const editBtn = document.createElement('button');
        editBtn.dataset.index = i;
        editBtn.textContent = 'Edit';
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Del';
        deleteBtn.addEventListener('click', () => {
            list.splice(i,1);
            localStorage.setItem('tasks', JSON.stringify(list));
            renderList();
        });
        editBtn.addEventListener('click', (e) => {
            const idx = Number(e.target.dataset.index); // idx contiene el el indice de dataset para ese boton especifico
            editTask(idx);
        });
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        listOl.appendChild(li);
    }
}
function editTask(index){
    taskWriter.value = list[index];
    editingIndex = index;
    taskWriter.focus();
    addBtn.textContent = 'Guardar Tarea';
}
renderList();
const submitButton = document.getElementById('submitButton');
const loadData = document.getElementById('loadData');
const editableList = document.getElementById('editableList');

let list = [];

submitButton.addEventListener('click', () => {
  addItem();
});

function addItem() {
  const value = loadData.value.trim();
  if (value === '') return;

  list.push(value);
  loadData.value = '';
  loadData.focus();

  render();
}

function render() {
  editableList.innerHTML = '';

  for (let i = 0; i < list.length; i++) {
    const li = document.createElement('li');
    li.textContent = list[i] + ' ';

    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.textContent = 'Eliminar';

    deleteBtn.addEventListener('click', () => {
      list.splice(i, 1);
      render();
    });

    li.appendChild(deleteBtn);
    editableList.appendChild(li);
  }
}

render();


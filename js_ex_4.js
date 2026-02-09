let filterList = document.getElementById('filterList');
const items = document.querySelectorAll('#filterList li');
let filterAction = document.getElementById('filterAction');

const baseItems = Array.from(items).map(li =>{
  return li.textContent.toLowerCase();
});

filterAction.addEventListener('input', () => {
    filterStringList(baseItems);
});

function filterStringList(itemsArray){
    const query = filterAction.value.toLowerCase().trim();//carga en query el valor actual del input
    const filteredItems = itemsArray.filter(item =>
    item.includes(query)//creaun nuevo array con los elemntos que contienen la cadena de caracteres ene el input    
  );
  renderList(filteredItems);//redibujo la lista con los elemntos filtrados
}

function renderList(torender) {
    filterList.innerHTML = '';
    torender.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        filterList.appendChild(li);
    });
}
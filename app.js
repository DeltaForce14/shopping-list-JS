// Define UI Variables 
const itemForm = document.getElementById('item-form');
const itemList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.getElementById('filter');
const itemInput = document.querySelector('#item');


// load all event listeners
//creating function
loadEventListeners();

function loadEventListeners(){
    itemForm.addEventListener('submit', addItem);
};


function addItem(event){

    // if there is nothing added to item field and the button is submitted show alert
    if(itemInput.value === ''){
        alert('Nothing added. Add Item.');
    }

    //create il element. We will use it for the item to add to the list
    const li = document.createElement("li");
    // adding class for li, materialize
    li.className = 'collection-item';
    // create text node and append to li
    li.appendChild(document.createTextNode(itemInput.value));

    //create new link element which is x cross
    const crossLink = document.createElement('a');
    //add materialize class to get delete item to the right
    crossLink.className = 'delete-item secondary-content';
    //create innerHTML to add a cross to the link
    crossLink.innerHTML = '<i class="material-icons red-text">delete</i>';
    // append link to li
    li.appendChild(crossLink);
    //append li to ul
    itemList.appendChild(li);

    //clear input value 
    itemInput.value = '';

    event.preventDefault();
}

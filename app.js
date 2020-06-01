// UI Variables 
const itemForm = document.getElementById('item-form');
const itemList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-items');
const filter = document.getElementById('filter');
const itemInput = document.querySelector('#item');

// load all event listeners
// creating function
loadEventListeners();

function loadEventListeners(){
    //add item to item list
    itemForm.addEventListener('submit', addItem);
    //delete item from item list 
    //using item list to apply the function to all the items
    itemList.addEventListener('click', removeItem);
    // clear all the items form the list 
    clearBtn.addEventListener('click',clearItems);
    // filter items in the list
    filter.addEventListener('keyup', filterItems);
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

    //create new link element which is delete bin
    const crossLink = document.createElement('a');
    //add materialize class to get delete item to the right
    crossLink.className = 'delete-item secondary-content';
    //create innerHTML to add a delete bin to the link
    crossLink.innerHTML = '<i class="material-icons red-text">delete</i>';
    // append link to li
    li.appendChild(crossLink);
    //append li to ul
    itemList.appendChild(li);

    //clear input value 
    itemInput.value = '';
    event.preventDefault();
};


// remove an item by clicking on the delete bin
// use li (parent of the target 'a')
// ask user if they are sure they want to delete the item 
function removeItem(event){
    if(event.target.parentElement.classList.contains('delete-item')){
        if(confirm("Are you sure?")){
        event.target.parentElement.parentElement.remove();
     }
    };
};

// clear all items in the list
function clearItems(){

    // faster option to remove items
    // while there is at least one element in itemList remove firstChild
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild);
    }

/* one option 
    itemList.innerHTML = "";
*/    
};

// Filtering throught the items entered
function filterItems(event){
    //grabbing value of text entered into filter field
    //using toLowerCase in case the capslock in on so that it has no effect
    const text = event.target.value.toLowerCase();

    // grabbing all the list items
    //querySelector returns nodes so we can use forEach
    lis = document.querySelectorAll('.collection-item');
    //itemL, content of the firstChild
    // if there is no match of itemL and indexOf text it will return -1
    // it will be looking for any text containing the typed letters
    // if there is a match, display 'block', if there is not match, display 'none'.
    lis.forEach(function(item){
        const itemL = item.firstChild.textContent;
        if(itemL.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else{
            item.style.display = 'none'; 
        }
    })

}




    


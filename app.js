
/**
 * @type Array
 */
let listItem = [];

const form = document.querySelector('form');
const input = document.querySelector('input');
const div = document.querySelector('.todoList');


form.addEventListener('submit' , e =>{
    e.preventDefault();

    let id = String(Date.now())

    let item = input.value;

    addItemToDom(id , item);
    //addItemToList(id , item , listItem);    

    input.value = '';
})


function addItemToDom(id , item){
    const element = document.createElement('div');

    element.setAttribute('item-id' , id);
    
    element.innerText = item;

    div.appendChild(element);   
}

function addItemToList(id , item){
    listItem.push({id , item})
}

function removeItemFromDom(id , item){
    let element = document.querySelector(`id`);
    
    div.removeChild(element)
}

function removeItemFromList(id , item){
    listItem = listItem.filter((item) => {
        item.id !== id
    })
}
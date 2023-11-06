
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


div.addEventListener('click' , e => {
    
})


function addItemToDom(id , item){
    const element = document.createElement('div');

    element.setAttribute('item-id' , id);
    element.classList.add('itemStyle')

    element.innerHTML = `
        <input type="checkbox">
        <p>${item}</p>
    `
    const btnDel = document.createElement('button');
    btnDel.setAttribute('item-id' , id);
    
    btnDel.addEventListener('click' , e =>{
        const idItem = e.currentTarget.getAttribute('item-id');

        removeItemFromDom(idItem);
        removeItemFromList(idItem);
        
        
    })   

    btnDel.innerHTML = `<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAqklEQVRIS2NkoDFgpLH5DIQscAA6YD4QK+BwyAOgeCIQH8DlUEIWgAyQJ+BLkBpFci34D9WIyyGE5AkGESEDCMljWADTQGncw32M7nWaWwBzOUGvo3kRp3qyI4/aFqC7kBAfbj+xPiBkIMVBNGoBRr4iNUhG44Bg0URxEBGygWQLPgBN5CdkKpr8Q2w1H66cDKoqFxBRm8HsABmegK3qJFRlkugJTOU0twAAUHk4GewN7TMAAAAASUVORK5CYII="/>`

    element.appendChild(btnDel);
    
    div.appendChild(element);

}

function addItemToList(id , item){
    listItem.push({id , item})
}

function removeItemFromDom(id){
    let element = document.querySelector('[item-id="' + id + '"]');
    div.removeChild(element)
}

function removeItemFromList(id){
    listItem = listItem.filter((item) => {
        item.id !== id
    })
}
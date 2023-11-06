/**
 * this fonction add items to the DOM
 * 
 * 
 * @param {string} id 
 * @param {string} item 
 * @param {HTMLElement} parent  
 */

export function addItemToDom(id , item , parent){
    const element = document.createElement('div');

    element.setAttribute('item-id' , id);

    element.innerText = item;

    parent.appendChild(element);
    
}
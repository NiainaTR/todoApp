const navBar = document.querySelector("nav");
const overlay = document.querySelector(".overlay");
const btnMenu = document.querySelector('#btn-menu');

const todoProgress = document.querySelector('.todo-progress');
const todoDone = document.querySelector('.todo-done');


btnMenu.addEventListener('click' , ()=>{
    btnMenu.classList.toggle('logo');
    btnMenu.classList.toggle('hidden-btn');
    navBar.classList.toggle("open");
})
    
overlay.addEventListener("click", () => {
    btnMenu.classList.toggle('logo');
    btnMenu.classList.toggle('hidden-btn');
    navBar.classList.remove("open");
});

/**
 * @type Array
 */
let listItem = [];

const todoAll = document.querySelector('.todo-all');
const form = document.querySelector('form');
const input = document.querySelector('#inputAdd');


form.addEventListener('submit' , (e) =>{
    e.preventDefault();

    let date = new Date();
    let id = String(date);

    let item = input.value;
    if(item !== ""){
        addItemToDom(id , item , date.toLocaleString());
    }
    
    input.value = "";
})


function addItemToDom(id , item , date){
    const element = document.createElement('div');

    element.setAttribute('item-id' , id);
    element.setAttribute('draggable' , true);
    
    element.classList.add('itemStyle')

    element.innerHTML = `
        <div class="item-todo">
            <p>${item}</p>
            <span>${date}</span>
        </div>    
    `;

    const btnDel = document.createElement('button');
    btnDel.setAttribute('item-id' , id);
    
    btnDel.addEventListener('click' , e =>{
        const idItem = e.currentTarget.getAttribute('item-id');    
        removeItemFromDOM(idItem);
        //removeItemFromTodoAll(idItem);   
    })   

    btnDel.innerHTML = `<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAqklEQVRIS2NkoDFgpLH5DIQscAA6YD4QK+BwyAOgeCIQH8DlUEIWgAyQJ+BLkBpFci34D9WIyyGE5AkGESEDCMljWADTQGncw32M7nWaWwBzOUGvo3kRp3qyI4/aFqC7kBAfbj+xPiBkIMVBNGoBRr4iNUhG44Bg0URxEBGygWQLPgBN5CdkKpr8Q2w1H66cDKoqFxBRm8HsABmegK3qJFRlkugJTOU0twAAUHk4GewN7TMAAAAASUVORK5CYII="/>`
    
    element.appendChild(btnDel);


    element.addEventListener('dragstart' , (e)=>{
        let selected = e.target;
        
        todoProgress.addEventListener('dragover' , (e) =>{
            e.preventDefault();
        })

        todoProgress.addEventListener('drop' , (e)=>{
            
            todoProgress.appendChild(selected);
            
            selected = null;
        });

        todoDone.addEventListener('dragover' , (e) =>{
            e.preventDefault();
        })

        todoDone.addEventListener('drop' , (e)=>{
            
            
            todoDone.appendChild(selected);
            selected = null;
        });

    })


    todoAll.appendChild(element);
    //listItem.push(element);
   
}


function removeItemFromDOM(idItem){
    let element = document.querySelector('[item-id="' + idItem + '"]');
    if(element){
        element.remove();
    }
}


/*
function removeItemFromTodoAll(id){
    let element = document.querySelector('[item-id="' + id + '"]');
    //todoAll.removeChild(element)
}
*/








    /*ADD TO LIST */

//selectors
const todoInput = document.querySelector('.todo__input');
const todoButton = document.querySelector('.todo__input--button');
const todoList = document.querySelector('.todo__list');
const menu = document.querySelector('#menu');
const subMenuArray = Array.from(document.querySelectorAll('.submenu'));

//functions to add items



const addTodo = (event)=> {
    //PREVENT PAGE REFRESH
    event.preventDefault();

    //create a div with a classname and append it

const todoListContainer = document.createElement('div');
todoListContainer.classList.add('todo__list--container');
todoList.appendChild(todoListContainer);

//create a li with a classname and append it

const todoListItem = document.createElement('li');
todoListItem.classList.add('todo__list--item');
todoListContainer.appendChild(todoListItem);

//write the input value

    todoListItem.textContent = todoInput.value;


 
//increase the heigth of container
(todoInput.value.length > 25) ? todoListContainer.style.height = '70px' : console.log('normal text input');

//Empty input 

if (todoInput.value == ''){
    const alert = document.createElement('div');
    alert.classList.add('empty_alert');
    alert.innerHTML = '<i class="bx bxs-comment-x"></i> is empty';
    todoListContainer.appendChild(alert);
}



//clear input
todoInput.value = '';

//CREATE CHECK BUTTON WITH A CLASSNAME AND APPEND IT

const checkButton = document.createElement('button');
checkButton.classList.add('check__button');
todoListContainer.appendChild(checkButton);
checkButton.innerHTML = '<i class="bx bxs-checkbox-checked" ></i>';

//CREATE DELETE BUTTON WITH A CLASSNAME AND APPEND IT

const deleteButton = document.createElement('button');
deleteButton.classList.add('delete__button');
todoListContainer.appendChild(deleteButton);
deleteButton.innerHTML = '<i class="bx bxs-trash"></i>';

}
//function to delete and check items


const deleteAndCheck = (el)=> {
    el.preventDefault();
   
    //delete button

    const targetPosition = el.target

    const todoItemContainer = targetPosition.parentElement;


    if (targetPosition.classList[0] === 'delete__button'){

        //animation for delete
        todoItemContainer.classList.add('delete__animation');
        todoItemContainer.addEventListener('transitionend', () => todoItemContainer.remove());
        
    //check button
    } else if (targetPosition.classList[0] === 'check__button'){
        todoItemContainer.classList.toggle('checked__animation');

    }
}  



//Menu deploy function

    const openMenu = ()=> subMenuArray.map( element => element.style.display = 'block');
    const closeMenu = ()=> subMenuArray.map( element => element.style.display = 'none');

// event listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteAndCheck);
menu.addEventListener('mouseover',openMenu);
menu.addEventListener('mouseleave', closeMenu);

    
    





let todoList = [{item:'Buy milk' , dueDate:'4/10/2023'}, 
                {item:'Go to college', dueDate:'4/10/2023'}];
displayItems();

function addTodo(){
    let inputElement = document.querySelector('#todoInput');
    let dateElement = document.querySelector('#todoDate');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    todoList.push({item: todoItem , dueDate: todoDate});
    inputElement.value = '';
    dateElement.value = '';
    displayItems();
}


function displayItems(){
    let containerElement = document.querySelector('.todoContainer');
let newHtml = '';

    
    for(i=0 ; i<todoList.length ; i++){
        let item = todoList[i].item;
        let dueDate = todoList[i].dueDate;
        newHtml += `
        
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class="btn-delete" onclick = "todoList.splice(${i},1); displayItems()">Delete</button>`;
    }
    containerElement.innerHTML = newHtml;
}
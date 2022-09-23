let input = document.querySelector('.entered-list');
let addBtn =document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');

// add new item to list
addBtn.addEventListener('click', ()=> {
    //console.log("element is caled");
    if(input.value != ''){
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
        <p> ${input.value }</p>
        <div class="item-btn">
        <input  class="button delete" type="submit" value="DELETE">
        </div>
        `
        tasks.appendChild(newItem);
        input.value = '';
    }
    else{
        alert("please enter a value")
    }
})

//delete task

tasks.addEventListener('click', (e) =>{
    if(e.target.classList.contains("delete")) {
        e.target.parentElement.parentElement.remove();
   }
})


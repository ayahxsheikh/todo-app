//WHEN ITEM IS SUBMITTED 1:
//submit prevent default function
//create ol and li inside showlist function?
// it needs to show as a list
// it needs to have a checked feature that when clicked should remove item from list
//needs to have a counter of list items

//WHEN ITEM IS SUBMITTED 2:
//todo item needs to be stored to local storage

//Global Variables:
var todoInput = $('#todo-item');
var submitBtn = $('#submit-item'); 
var taskCounter = $('#total-tasks');
var todoArr = [];
var userOutput = '';

submitBtn.click(function(event){
    event.preventDefault()
    console.log('submit worked');
    // showListItems();
})

//TARGETS INPUT VALUE
var saveValue = todoInput.on('change',function(event){
    var todoValue = event.target.value;
    todoArr = todoValue;
    // console.log(todoValue);

//FOR LOOP TO CREATE TASK LIST
 


//SAVES INPUT VALUE
    var storedTodo = localStorage.setItem('task', JSON.stringify(todoArr));
    console.log(storedTodo);

});



// FUNCTION TO CREATE OL OF TASK ITEMS
// function showListItems(){
//     userOutput
// }

//FUNCTION TO CREATE COUNTER
// function counter(){}


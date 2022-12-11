//WHEN ITEM IS SUBMITTED 1:
//submit prevent default function
//create ol and li inside showlist function?
// it needs to show as a list
// it needs to have a checked feature that when clicked should remove item from list
//needs to have a counter of list items

//WHEN ITEM IS SUBMITTED 2:
//todo item needs to be stored to local storage

//Global Variables:
var todoInput = $('#todo-input');
var submitBtn = $('#submit-item'); 
var taskCounter = $('#task-no');
var ulEl = $('#ul');
var liEl = $('#li');
var liSpan = $('#liTask')
var liBtn = $('#complete');
var todoValue;
var todoArr = [];
var taskOutput;

submitBtn.click(function(event){
    event.preventDefault()
    console.log('submit worked');
    // showListItems();
})

//TARGETS INPUT VALUE
    todoInput.on('change',function(event){
        todoValue = event.target.value;
        todoArr.push(todoValue);
        // value pushed into array;
        
        //SAVES INPUT VALUE
        localStorage.setItem('task', JSON.stringify(todoArr));
        var retrieve = JSON.parse(localStorage.getItem('task'));
        console.log(retrieve);
        
    });



// FUNCTION TO CREATE TASK LIST
// function showListItems(){}

//FUNCTION TO CREATE COUNTER
// function counter(){}


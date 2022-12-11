//WHEN ITEM IS SUBMITTED 1:
//create li inside showlist function
//needs checked feature that when clicked should remove item from list
//needs to have a counter of list items

//WHEN ITEM IS SUBMITTED 2:
//todo item needs to be stored to local storage

//Global Variables:
var todoInput = $('#todo-input');
var output = $('#output');
var taskCounter = $('#task-no');
var liBtn = $('#complete');
// var todoValue;
var todoArr = [];



//TARGETS INPUT VALUE
todoInput.keydown(function(event){
    var code = event.keyCode;
    if(code === 13){
        todoValue = event.target.value;
        todoArr.push(todoValue);
        console.log(todoValue);
    }
        
    //SAVES INPUT VALUE
        localStorage.setItem('task', JSON.stringify(todoArr));
        var retrieve = JSON.parse(localStorage.getItem('task'));
        // console.log(retrieve);
        
    });



// FUNCTION TO CREATE TASK LIST
// function showListItems(){}

//FUNCTION TO CREATE COUNTER
// function counter(){}



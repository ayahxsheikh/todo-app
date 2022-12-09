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
    // storeItem();
})

 var saveItem = todoInput.on('change',function(event){
    var todoValue = event.target.value;
    console.log(todoValue)

    // var storedInput = localStorage.setItem(todoValue, saveItem);
    // console.log(storedInput);
});



// function storeItem ( ){
//     var storeInput;
//     showListItems();
// };

// function showListItems(){
//     userOutput
// }


// function counter(){

// }


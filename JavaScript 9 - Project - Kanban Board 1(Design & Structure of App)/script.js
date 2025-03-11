// Buttons and Flags
let addBtn = document.querySelector('.add-btn');
let removeBtn = document.querySelector('.remove-btn');
let addTaskFlag = false;
let removeTaskFlag = false;

// Elements for Modal pop-up box and text area
let modalCont = document.querySelector('.modal-cont');
let textAreaCont = document.querySelector('.textArea-cont');

// Elements for Tickets
let mainCont = document.querySelector('.main-cont');

// Elements for Color Selection
let allPriorityColors = document.querySelectorAll('.priority-color');
let colors = ["lightpink", "lightgreen", "lightblue", "black"];
let modalPriorityColor = colors[colors.length - 1]; // Default color for tickets

// Task 1: Toggle the visibility of the modal
// - When the "Add" button is clicked, toggle the `addTaskFlag`.
// - You can achieve this by changing the `display` property of the `modalCont`.
addBtn.addEventListener('click', function () {
  addTaskFlag = !addTaskFlag;

  if(addTaskFlag) {
    modalCont.style.display = 'flex';
  }
  else {
    modalCont.style.display = 'none';
  }
});

// Task 2: Handle color selection for the ticket
// - Add event listeners to each color element in `allPriorityColors`.
// - When clicked, remove the "active" class from all colors and add it to the clicked one.
// - Update the `modalPriorityColor` with the selected color.
allPriorityColors.forEach(function (colorElem) {
  colorElem.addEventListener("click",function() {
    allPriorityColors.forEach(function(priorityColorElem){
      priorityColorElem.classList.remove("active");
    })

    colorElem.classList.add("active");
  });
});

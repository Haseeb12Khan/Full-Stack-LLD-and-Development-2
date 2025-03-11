// Buttons and Flags
let addBtn = document.querySelector(".add-btn");
let removeBtn = document.querySelector(".remove-btn");
let modalCont = document.querySelector(".modal-cont");
let mainCont = document.querySelector(".main-cont");
let textAreaCont = document.querySelector(".textArea-cont");
let allPriorityColors = document.querySelectorAll(".priority-color");

// Available Colors for Tickets
let colors = ["lightpink", "lightgreen", "lightblue", "black"];

// Toolbox Colors
let toolboxColors = document.querySelectorAll(".color");

// Lock and Unlock Classes
let lockClass = "fa-lock"; // closed lock
let unlockClass = "fa-lock-open"; // open lock

// Flags
let addTaskFlag = false;
let removeTaskFlag = false;

// Default Priority Color
let modalPriorityColor = colors[colors.length - 1];

// Tickets Array to Store Tickets
let ticketsArr = [];

/* ------------------------- Code Covered in the Last Class ------------------------- */

// Task 1: Toggle modal visibility
addBtn.addEventListener("click", function () {
  addTaskFlag = !addTaskFlag;

  if (addTaskFlag == true) {
    modalCont.style.display = "flex";
  } else {
    modalCont.style.display = "none";
  }
});

// Task 2: Select color for task
allPriorityColors.forEach(function (colorElem) {
  colorElem.addEventListener('click', function () {
    allPriorityColors.forEach(function (priorityElem) {
      priorityElem.classList.remove('active');
    });
    colorElem.classList.add('active');

    modalPriorityColor = colorElem.classList[0];
  });
});

/* ---------------------- New Code for the Next Class ---------------------- */

// Task 3: Add tickets using the "Shift" key
// - Add an event listener to `modalCont` for the "keydown" event.
// - If the key pressed is "Shift":
//   - Get the task content from `textAreaCont`.
//   - Generate a unique `ticketID` (you can use the `shortid` library or come up with an alternative).
//   - Call `createTicket()` with the selected color, ID, and task content.
//   - Hide the modal and clear the textarea content.
modalCont.addEventListener('keydown', function (e) {
  if(e.key === 'Shift') {
    let ticketContent = textAreaCont.value;
    let ticketID = shortid.generate();
    createTicket(modalPriorityColor,ticketID,ticketContent);
    modalCont.style.display = "none";
    textAreaCont.value = "";

    addTaskFlag = false;
  }
});

// Task 4: Create a new ticket
// - Write a function `createTicket(ticketColor, ticketID, ticketTask)`.
// - Inside the function, create a ticket container (div) with a class `ticket-cont`.
// - Add the ticket's color, ID, and task content dynamically.
// - Append the ticket to the `mainCont`.
function createTicket(ticketColor, ticketID, ticketTask) {
  console.log(ticketColor,ticketID,ticketTask);
  let ticket_container = document.createElement("div");
  ticket_container.classList.add("ticket-cont");
  
  ticket_container.innerHTML = `<div class="ticket-color" style="background-color: ${ticketColor};"></div>
        <div class="ticket-id">${ticketID}</div>
        <div class="task-area" contenteditable="false">${ticketTask}</div>
        <div class="ticket-lock">
          <i class="fa-solid fa-lock"></i>
        </div>`;

  mainCont.appendChild(ticket_container);

  handleRemoval(ticket_container);
}

// Task 5: Enable or disable ticket removal mode
// - Add an event listener to the "Remove" button.
// - Toggle the `removeTaskFlag` when the button is clicked.
// - If `removeTaskFlag` is true, set the button color to "red" to indicate active mode.
// - Otherwise, set the button color to "white".
removeBtn.addEventListener('click', function () {
  removeTaskFlag = !removeTaskFlag;

  if(removeTaskFlag) {
    alert("Remove Mode enabled");
    removeBtn.style.color = "red";
  }
  else {
    removeBtn.style.color = "white";
  }
});

// Task 6: Remove tickets when clicked in remove mode
// - Write a function `handleRemoval(ticket)`.
// - Add an event listener to the ticket for the "click" event.
// - If `removeTaskFlag` is true, remove the ticket from the DOM.
function handleRemoval(ticket) {
  ticket.addEventListener("click",function() {
    if(!removeTaskFlag) {
      return;
    }
    else {
      ticket.remove();
    }
  });
}

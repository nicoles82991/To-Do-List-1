// lists categorized via objects? each object is a different list? so - name of list, date created, the list items
//each list is an array

//first step is to add and remove li's in a list
//then be able to change the name of the list
//then create new lists
//add from top or add from bottom
//organize the list ability
//add color/theme changing

/*
const listdate = document.querySelectorAll("span");

function TimeAndDate() {
  let now = new Date();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let year = now.getFullYear();
  let monthIndex = now.getMonth();
  let monthName = months[monthIndex];
  let day = now.getDate();
  let hour = now.getHours();
  //Condition (hour ?): This checks if hour is truthy. ExpressionIfTrue (hour): If hour is truthy (non-zero), it assigns hour to itself. ExpressionIfFalse (12): If hour is falsy (specifically, 0 in this context), it assigns 12 to hour.

  let minutes = now.getMinutes().toString().padStart(2, "0");

  let formattedDate = `${monthName} ${day}, ${year} at ${hour}:${minutes} ${ampm}`;
  console.log(formattedDate);
}
*/

//the adding new tasks portion
const taskInput = document.querySelector(".newTask"); //newTask - input
const taskList = document.getElementById("taskList"); //taskList - UL

let tasks = []; //empty array

function addTask() {
  //new function - addTask
  const taskText = taskInput.value.trim(); //trims whitespace off of input from newTask

  if (taskText !== "") {
    //if its not empty
    const task = {
      //object class with text + time
      text: taskText,
      timestamp: new Date().toLocaleString(),
    };

    tasks.push(task); //push to the botttom of tasks array
    renderTasks(); //make the renderTasks function happen
    taskInput.value = ""; //makes the input box empty
  }
}

function renderTasks() {
  //new function renderTasks - it is referenced in the addTask function as well
  taskList.innerHTML = ""; //clears the current task
  tasks.forEach((task, index) => {
    //index is added to assist with the removing function
    const listItem = document.createElement("li"); //creates a li
    listItem.classList.add("newli"); //adding the newli class
    listItem.innerHTML = `${task.text} 
      <button class="remove" onclick="removeTask(${index})"><svg
                  class="trashicon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM13.4142 13.9997L15.182 15.7675L13.7678 17.1817L12 15.4139L10.2322 17.1817L8.81802 15.7675L10.5858 13.9997L8.81802 12.232L10.2322 10.8178L12 12.5855L13.7678 10.8178L15.182 12.232L13.4142 13.9997ZM9 4V6H15V4H9Z"
                  ></path>
                </svg>
                </button>
                <br /><span class="date">${task.timestamp}</span>
      `; //adds task text via innerHTML - + a trash svg icon button + button
    taskList.appendChild(listItem); //add the listItem to the taskList innerHTML
  });
}

function removeTask(index) {
  //removeTask function
  tasks.splice(index, 1); // spice - remove the indexed item
  renderTasks(); //update the task list
}

function clearTasks() {
  //clearing all the tasks
  tasks = []; //sets the task array to empty
  renderTasks(); //update the task list
}

document.querySelector(".add").addEventListener("click", addTask); //event listeners

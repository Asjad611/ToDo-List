const circleTrash=document.getElementById("circleTrash")
const taskText=document.getElementById("taskText")
const taskContainer=document.getElementById("taskContainer")
const addTaskBtn=document.getElementById("addTaskBtn")
const inputbox=document.getElementById("inputbox")
const tasks=document.getElementById("tasks")
const weekDay=document.getElementById("weekDay")

let date= new Date()


const day=document.getElementById("day")
day.innerText=date.getDate()
const month=document.getElementById("month")
month.innerText =  date.toLocaleString('default', { month: 'long' });
const year=document.getElementById("year")
year.innerText = date.getFullYear()
weekDay.innerText=date.toLocaleString('default', { weekday: 'long' });


// const ulList=document.getElementById("unorderedlist")


const btn=document.getElementById("btn")

// console.log(btnTrash)



addTaskBtn.addEventListener("click", () => {
    if (inputbox.value == "") {
        alert("Write something on the box");
    } else {
        let taskData = inputbox.value;

        // Create task container
        let div = document.createElement("div");
        div.classList.add("container");
        tasks.appendChild(div);

        // Create task text
        let p = document.createElement("p");
        p.classList.add("taskText");
        p.innerText = taskData;
        div.appendChild(p);

        // Create buttons container
        let div2 = document.createElement("div");
        div2.classList.add("buttons");
        div.appendChild(div2);

        // Create tick button
        let btntick = document.createElement("button");
        btntick.classList.add("circle");
        div2.appendChild(btntick);
        let icontick = document.createElement("i");
        icontick.classList.add("fa-solid", "fa-check", "tickbtn");
        btntick.appendChild(icontick);

        // Create trash button
        let btntrash = document.createElement("button");
        btntrash.classList.add("circle");
        div2.appendChild(btntrash);
        let icontrast = document.createElement("i");
        icontrast.classList.add("fa-solid", "fa-trash", "tickbtn");
        btntrash.appendChild(icontrast);

        // Clear the input after adding the task
        inputbox.value = ""; 

        // Add event listener to the trash button to remove the task
        btntrash.addEventListener("click", () => {
            tasks.removeChild(div); // Remove the task container from tasks
        });

        // Add event listener to the tick button
        btntick.addEventListener("click", () => {
            if (div.classList=="container") {
                div.classList.add("containerDonetask");
                p.style.textDecoration = "line-through";
            } else {
                div.classList.remove("containerDonetask");
                p.style.textDecoration = "none";
            }
        });
    }
});
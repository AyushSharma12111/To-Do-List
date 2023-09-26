const title = document.getElementById("title");
const description = document.getElementById("description");
const form = document.querySelector("form");
const container = document.querySelector(".container");
const btn = document.querySelector(".deleteBtn")

const task = localStorage.getItem("task") 
? JSON.parse(localStorage.getItem("task")) : [];

showTheTasks ();

function showTheTasks (){
    task.forEach((value,index)=>{
       const div = document.createElement("div",);
       div.setAttribute("class","task");

       const innerDiv = document.createElement("div");
       div.append(innerDiv);

       const p = document.createElement("p");
       p.innerText = value.title;
       innerDiv.append(p);

       const span = document.createElement("span");
       span.innerText = value.description;
       innerDiv.append(span);


       const btn=document.createElement("button");
        btn.setAttribute("class","deleteBtn");
        btn.innerText = "Remove";
        btn.addEventListener("click",()=>{
            removeTheTasks();
            task.splice(index,1);
            localStorage.setItem("task",JSON.stringify(task));
            showTheTasks();
        })
        div.append(btn);

        container.append(div);
    });
};

     function removeTheTasks(){
        task.forEach(()=>{
        const div = document.querySelector(".task")
        div.remove();
        })
     }

form.addEventListener("submit", (e)=>{ 
    e.preventDefault();
     removeTheTasks();
    task.push({
        title: title.value,
        description: description.value
    });
    console.log(task);
    localStorage.setItem("task",JSON.stringify(task));
    showTheTasks();
});
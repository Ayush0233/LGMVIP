const txt = document.getElementById("txt"); // selecting an input element
const list = document.getElementById("list"); // selecting the tag where we are creating a list

function addItem(){
    if(txt.value === ""){
        alert("You didn't Add a Task");//showing alert if the inpupt is empty
    }
    else{//opertations to perform to add a task
        let li = document.createElement("li");// creating a li tag
        li.innerHTML = txt.value;// settiing li innerhtml as a input
        list.appendChild(li);// joining li with the list
        span = document.createElement("span");
        span.innerHTML = "\u00d7"; // this is to make a cross symbol
        li.appendChild(span);

    }
    txt.value = ""; //after adding the task input value will be emptied
    refreshPage();

}

list.addEventListener("click",function(clk){
    if(clk.target.tagName === "LI"){
        clk.target.classList.toggle("check"); //to triger the class (check) when a list is created
    refreshPage();
        
    }
    else if(clk.target.tagName === "SPAN"){
        clk.target.parentElement.remove(); // provide functionality to the cross symbol to remove the element 
    refreshPage();

    }
});

function refreshPage(){
    localStorage.setItem("data",list.innerHTML); // to store the data on local  of browser
}

function getList(){
    list.innerHTML = localStorage.getItem("data"); // to fetch the stored data on the browser
}
getList();
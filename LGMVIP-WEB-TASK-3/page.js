let myname = document.getElementById("name"); // targeting the input element for taking user's name 
let number = document.getElementById("number");// targeting the input element for taking number
let email = document.getElementById("email");// targeting the input element for taking user's email
let join = document.getElementById("join"); // targeting the div in which data will be added from the form 
let btn = document.getElementById("btn"); // buttons (submit add reset)
let form = document.querySelector("form"); // selecting the whole form
let male = document.getElementById("male");// radio inputs
let female = document.getElementById("female");// radio inputs
let wd = document.getElementById("wd"); //radio inputs web development
let ad = document.getElementById("ad");// radio inputs android development
let jd = document.getElementById("jd"); // radio inputs java developemnt
let ds = document.getElementById("ds");// radio inputs data science
let ai = document.getElementById("ai"); // radio inputs artificial intelligence

btn.addEventListener('click', function () {
    let radio = document.querySelectorAll('input[type="radio"]:checked') //fetching the checked value in the radio  
    let values = [] // creating array
    radio.forEach((radios) => {
        values.push(radios.value); //pushing values checked in the  radio in the array
    });
    if (!myname.value || !number.value || !email.value) {
        alert("Enter the credentials"); // to show the alert when credentials are empty
    }
    else { // if the credentials are not null then perform the following operation
        join.innerHTML += ` 
         <div class = "block">
         <div class="info">
             <h4 class="name txt">Name :- ${myname.value}</h4>
             <h5 class="txt">Contact :- ${number.value}</h5>
             <h5 class="txt">Email :- ${email.value}</h5>
             <h5 class="txt">Gender :- ${male.checked ? "Male" : female.checked ? "female" : "Other"}</h5>
             <h5 class="txt">Domain :-${wd.checked ? "Web Development" : ad.checked ? "Android Development" : jd.checked ? "Java Development" : ds.checked ? "Data Science" : ai.checked ? "Artificial Intelligence": "Others"}</h5>
         </div>
         <span>
         \u00d7 <!-- For creating cross symbol  -->
         </span>
     </div>`
        alert("Enrolled Successfully");
        form.reset();
    }

    refreshPage();

});

join.addEventListener('click', function (clk) {
    if (clk.target.tagName === "SPAN") {
        clk.target.parentElement.remove();// to remove the block of information using cross
    }
    refreshPage();
});


function refreshPage() { // for storing the data on the local storage of browser
    localStorage.setItem("info", join.innerHTML);
}
function getData() { // for fetching the data from the local storage
    join.innerHTML = localStorage.getItem("info");
}
getData(); // calling the function
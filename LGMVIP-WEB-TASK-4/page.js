let field = document.getElementById("field");//input field targeted
let equal = document.getElementById("equal"); //equal btn is targeted
let btn = document.querySelectorAll("button");//all buttons 
let ac = document.getElementById("ac");// all clear btn
let de = document.getElementById("de");//delete button is targeted

ac.onclick = () => {
    field.value = "";
}// for clearing all values in the input field

de.onclick = () => {
    field.value = field.value.toString().slice(0,-1);
}//for deleting a single value fro,=m inout field

equal.addEventListener('click',()=>{
   
    field.value = eval(field.value);
        // to calculate the values in the input field;
   

});
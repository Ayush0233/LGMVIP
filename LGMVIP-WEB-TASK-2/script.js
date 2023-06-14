let cards = document.getElementById("cards");//the div which is going to contain the user's inforamtion cards
let mbtn = document.getElementById("mbtn");//targettinga button for getting users
mbtn.onclick = () => { //function to show the loading screen
    cards.innerHTML = `<h1 class="waiting_text">Fetching Data &nbsp;<img src="loader.gif" alt=""></h1>`; 
    //preloading elements
    setTimeout(() => { // timeout function for loading the screen, here it is 3s
        data();
    },3000)
};
let data = async () => {
    let fetched = await fetch("https://reqres.in/api/users?page=1"); //api link
    let docx = await fetched.json(); // fetching equipemnts
    let alldata = docx.data.map((ele)=>{ // function to arrange all the fetched data in a proppeer manner using innerhtml.
        return `<div class="single_card">
        
            <div class="img">
                <img src="" alt="">
            </div>
            <div class="profile_photo">
            <img src="${ele.avatar}" alt=""> <!--for profile image -->
            </div>
            <div class="profile_info">
                <h2>Name:- ${ele.first_name} ${ele.last_name}</h2> <br>
                <h2>Email:- ${ele.email}</h2> <br> 
                <h2> ID :- ${ele.id}</h2> <br>
            </div>
    </div>`;
    }).join("");
    cards.innerHTML = alldata;// appending data.
};


import {users} from "./data.js"
const USERS = "users";

if(!getFromStoreage(USERS)){
    saveToStoreag(users);
}


let saveUsers = getFromStoreage(USERS);

let usersBox = document.querySelector("#users-Box");
let searchButton = document.querySelector("#search-button");
let searchText = document.querySelector("#search-text");
let filtersNav = document.querySelector("#filters-nav");
let updateFilterButton = document.querySelector("#update-filters");
let loginBtns = document.querySelectorAll(".login-btn");
let emailInput = document.querySelector("#email");
let registerBox=document.querySelector("#registor-box");
let registerButton=document.querySelectorAll(".registor-btn");

function saveToStoreag(data){
    window.localStorage.setItem(USERS , JSON.stringify(data))
}
function getFromStoreage(data){
    let getValue = window.localStorage.getItem (data );
    return JSON.parse(getValue);
     
}




document.querySelector("#signup-submit").onclick = function(event){
   event.preventDefault();

    let name = document.querySelector("#name").value;
    let lastName = document.querySelector("#lastName").value;
    let  phone= document.querySelector("#phone").value;
    let emailValue= document.querySelector("#emailVal").value;
    console.log(email)
    let sex= document.querySelector('input[name="Gender"]:checked').value;
    console.log(sex)
    let data = {
        "firstName" : name,
        "lastName" : lastName,
        "phone": phone,
        "email" : emailValue,
        "gender" : sex,

    }
    saveUsers.push(data);
    saveToStoreag(saveUsers);
    window.location.reload();
}



filtersNav.addEventListener("click", function () {
    let registerButton= document.querySelector(".registor-btn");
    if (filtersBox.style.display === '' || filtersBox.style.display === 'none') {
        filtersBox.style.display = 'block';
    } else {
        filtersBox.style.display = 'none';
    }


});

function openHideRegistor() {
    console.log("openHideRegistor")
        let registorBox = document.querySelector("#registor-box");
        if (registorBox.style.display === '' || registorBox.style.display === 'none') {
            registorBox.style.display = 'block';
        } else {
            registorBox.style.display = 'none';
        };
    };
    



// emailInput = document.addEventListener("keyup", function () {
//     let emailMessege = document.querySelector("#email-message");
//     if (emailInput.value.includes("@")) {
//         emailMessege.innerHTML = "ok";
//         emailMessege.style.color = "white";
//     } else {
//         emailMessege.innerHTML = "invalid email address";
//         emailMessege.style.color = "red";
//     }
// });

loginBtns[0].addEventListener("click", openHidelogin);
loginBtns[1].addEventListener("click", openHidelogin);
registerButton[0].addEventListener("click", openHideRegistor);
registerButton[1].addEventListener("click", openHideRegistor);


function openHidelogin() {
console.log("openHidelogin")
    let loginBox = document.querySelector("#login-box");
    if (loginBox.style.display === '' || loginBox.style.display === 'none') {
        loginBox.style.display = 'block';
    } else {
        loginBox.style.display = 'none';
    };
};

debugger

updateFilterButton.addEventListener("click", function () {
    let currentlastName = document.querySelector("#lastName-filter").value.toLocaleLowerCase();
    let currentGender = document.querySelector("#Gender-filter").value.toLocaleLowerCase();
    let filtredUsers = users.filter(function (users) {
        console.log(users)
        return users.lastName.toLocaleLowerCase().includes(currentlastName) &&
            users.gender.toLocaleLowerCase().includes(currentGender) &&
            users.firstName.toLocaleLowerCase().includes(searchText.value.toLocaleLowerCase()

            );
    });

    usersBox.innerHTML = "";
    for (let user of filtredUsers) {
        let userElement = document.createElement("div");
        userElement.classList.add("user-item");
        userElement.innerHTML = `
               <h2>${user.firstName}</h2>
               <p>lastName: ${user.lastName}</p>
               <p>Phone: ${user.phone}</p>
               <p>Gender: ${user.gender}</p>
               <p>E-mail: ${user.email}</p>
               `;
        usersBox.appendChild(userElement);
    }


});


filtersNav.addEventListener("click", function () {
    let filtersBox = document.querySelector("#filters");
    if (filtersBox.style.display === '' || filtersBox.style.display === 'none') {
        filtersBox.style.display = 'block';
    } else {
        filtersBox.style.display = 'none';
    }


});

searchButton.addEventListener("click", function () {
    let filtredUsers = users.filter(function (user) {
        return user.firstName.toLocaleLowerCase().includes(searchText.value.toLocaleLowerCase());

    });

    usersBox.innerHTML = "";

    for (let user of filtredUsers) {
        let userElement = document.createElement("div");
        userElement.classList.add("user-item");
        userElement.innerHTML = `
        <h2>${user.firstName}</h2>
        <p>lastName: ${user.lastName}</p>
        <p>Phone: ${user.phone}</p>
        <p>Gender: ${user.gender}</p>
        <p>E-mail: ${user.email}</p>
        `;
        usersBox.appendChild(userElement);
    }
});

for (let user of saveUsers) {
    let userElement = document.createElement("div");
    userElement.classList.add("user-item");
    userElement.innerHTML = `
    <h2>${user.firstName}</h2>
    <p>lastName: ${user.lastName}</p>
    <p>Phone: ${user.phone}</p>
    <p>Gender: ${user.gender}</p>
    <p>E-mail: ${user.email}</p>
    `;
    usersBox.appendChild(userElement);
}


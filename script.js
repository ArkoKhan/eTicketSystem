

// selecting DOM
const body = document.querySelector("body");
const darkBtn = document.querySelector(".lightbtn");
const firstName = document.querySelector("#name");
const form = document.querySelector("form");
const sex = document.querySelector("#gander");
const age = document.querySelector("#age");
const tickets = document.querySelector("#ticket");
const table = document.querySelector("table");
let unitPrice = 20;


//  Dark Mode BTN Function
const darkFn = function () {
    let text = darkBtn.innerText === "Dark" ? "Light" : "Dark";
    darkBtn.innerHTML = text;
    darkBtn.classList.toggle("darkbtn");
    body.classList.toggle("dark_body")
}


// ticket Calculation Function
const calculateTicket = function () {
    if (firstName.value !== "" && sex.value !== "none" && age.value !== "" && tickets.value !== "") {
        const newRow = document.createElement("tr");
        let totalPrice = Number(tickets.value) * unitPrice;
        newRow.innerHTML = `
            <td>${firstName.value}</td>
            <td>${sex.value}</td>
            <td>${age.value}</td>
            <td>${tickets.value}</td>
            <td>${unitPrice}</td>
            <td>${totalPrice}</td>
        `;
        table.append(newRow);
        firstName.value = "";
        sex.value = "none";
        age.value = "";
        tickets.value = "";

    } else {
        alert("Missing Data")
    }
}



// EVENTS

// dark mode
darkBtn.addEventListener("click", darkFn);


// ticket
form.addEventListener("submit", function(e) {
    e.preventDefault();
    calculateTicket();
});

deleteFn()




















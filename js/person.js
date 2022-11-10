"use strict";
const conNameInput = document.getElementById("rect-name");
const conFamilyInput = document.getElementById("rect-last");
const conPhoneInput = document.getElementById("rect-phone");
const conButton = document.getElementById("btn-click");
const conBoxDiv = document.getElementById("rect-box");
class Contact {
    name;
    family;
    phone;
    constructor(name, family, phone) {
        this.name = name;
        this.family = family;
        this.phone = phone;
    }
}
let contacts = [];
conButton.addEventListener("click", () => {
    const person = new Contact(conNameInput.value, conFamilyInput.value, conPhoneInput.value);
    const contactDiv = document.createElement("div");
    contactDiv.style.backgroundColor = "blueviolet";
    contactDiv.style.width = `100px`;
    contactDiv.style.height = `100px`;
    contactDiv.innerHTML = JSON.stringify(`<div>${person.name}<br>${person.family}<br>${person.phone}</div>`);
    contactDiv.addEventListener("click", () => {
        contactDiv.remove();
        localStorage.setItem("contacts", JSON.stringify(contacts));
    });
    conBoxDiv.appendChild(contactDiv);
    contacts.push(person);
    localStorage.setItem("contacts", JSON.stringify(contacts));
});
function init() {
    //read the string from disk:
    const str = localStorage.getItem("contacts") ?? "[]";
    //parse: convert string to Object literal array:
    const arrFromDisk = JSON.parse(str);
    for (const o of arrFromDisk) {
        const person = new Contact(o.name, o.family, o.phone);
        const contactDiv = document.createElement("div");
        contactDiv.style.backgroundColor = "blueviolet";
        contactDiv.style.width = `100px`;
        contactDiv.style.height = `100px`;
        contactDiv.innerHTML = `<div>${person.name}<br>${person.family}<br>${person.phone}</div>`;
        contactDiv.addEventListener("click", () => {
            contactDiv.remove();
            localStorage.setItem("contacts", JSON.stringify(contacts));
        });
        //add the box div:
        conBoxDiv.appendChild(contactDiv);
        contacts.push(person);
        localStorage.setItem("contacts", JSON.stringify(contacts));
    }
}
init();

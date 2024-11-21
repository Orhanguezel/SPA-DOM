// task-1
const body = document.querySelector("body");
body.style.backgroundColor = "#f0f0f0";
body.classList.add("body-styled");

// task-2
const header = document.querySelector(".header");
header.id = "main-header";
header.style.backgroundColor = "#003366";
header.style.color = "white";

// task-3
const title = document.querySelector(".title");
title.style.fontSize = "3rem";
title.classList.add("main-title");

// task-4
const subtitle = document.querySelectorAll(".subtitle");
subtitle.forEach((element) => {
  element.style.fontStyle = "italic";
  element.classList.add("section-title");
});

// task-5
const ul= document.querySelector(".features-list");
 ul.style.listStyle = "none";
 ul.classList.add("features-ul");

// task-6
const li = document.querySelectorAll(".feature");
li.forEach((element) => {
  element.style.color = "#ff6600";
  element.classList.add("highlight");
});

// task-7
const contact = document.querySelector(".contact-form");
contact.id = "form-container";
contact.style.border= "2px solid #333";
contact.style.padding = "1rem";

// task-8
const input = document.querySelectorAll("input");
input.forEach((element) => {
  element.style.borderRadius= "5px";
});
const nameInput = document.querySelector("#name");
nameInput.placeholder = "Name";
const emailInput = document.querySelector("#email");
emailInput.placeholder = "Email";

// task-9
const footer = document.querySelector(".footer");
footer.classList.add("page-footer");
footer.textAlign = "center";

// task-10
const footerText = document.querySelector(".footer-text");
footerText.id = "footer-description";
footerText.style.color = "#555";
footerText.style.fontSize = "0.9rem";


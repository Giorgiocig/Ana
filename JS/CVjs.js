"use strict";

const overlay = document.querySelector(".overlay");

const openModal1 = document.querySelector(".show-modal1");
const openModal2 = document.querySelector(".show-modal2");
const openModal3 = document.querySelector(".show-modal3");
const modal1 = document.querySelector(".modal1");
const modal2 = document.querySelector(".modal2");
const modal3 = document.querySelector(".modal3");

/* MODAL WINDOW */
openModal1.addEventListener("click", function (e) {
  e.preventDefault();
  modal1.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

openModal2.addEventListener("click", function (e) {
  e.preventDefault();
  modal2.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

openModal3.addEventListener("click", function (e) {
  e.preventDefault();
  modal3.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal1.classList.contains("hidden")) {
    modal1.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal2.classList.contains("hidden")) {
    modal2.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal3.classList.contains("hidden")) {
    modal3.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});

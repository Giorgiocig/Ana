"use strict";

const overlay = document.querySelector(".overlay");

const openModal1 = document.querySelector(".show-modal1");
const openModal2 = document.querySelector(".show-modal2");
const openModal3 = document.querySelector(".show-modal3");
const modal1 = document.querySelector(".modal1");
const modal2 = document.querySelector(".modal2");
const modal3 = document.querySelector(".modal3");
const closeModal1 = document.querySelector(".close-modal1");
const closeModal2 = document.querySelector(".close-modal2");
const closeModal3 = document.querySelector(".close-modal3");
const navLinks = document.querySelectorAll(".nav__list__link");
const navCont = document.querySelector(".nav__list");
const nav = document.querySelector(".nav");
/* MODAL WINDOW */
//functions
const openModa1 = function () {
  modal1.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const openModa2 = function () {
  modal2.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const openModa3 = function () {
  modal3.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModa1 = function () {
  modal1.classList.add("hidden");
  overlay.classList.add("hidden");
};

const closeModa2 = function () {
  modal2.classList.add("hidden");
  overlay.classList.add("hidden");
};

const closeModa3 = function () {
  modal3.classList.add("hidden");
  overlay.classList.add("hidden");
};

openModal1.addEventListener("click", openModa1);

openModal2.addEventListener("click", openModa2);

openModal3.addEventListener("click", openModa3);

closeModal1.addEventListener("click", closeModa1);

closeModal2.addEventListener("click", closeModa2);

closeModal3.addEventListener("click", closeModa3);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal1.classList.contains("hidden")) {
    closeModa1();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal2.classList.contains("hidden")) {
    closeModal2();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal3.classList.contains("hidden")) {
    closeModa3();
  }
});

/* nav */
nav.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("nav__list__link")) {
    const link = e.target;
    const sibilings = link.closest(".nav").querySelectorAll(".nav__list__link");
    const logo = link.closest(".nav").querySelector("img");

    sibilings.forEach((el) => {
      if (el !== link) {
        el.style.opacity = 0.5;
        el.classList.remove("nav__list__item--active");
      } else el.classList.add("nav__list__item--active");
    });

    logo.style.opacity = 0.5;
  }
});

nav.addEventListener("mouseout", function (e) {
  if (e.target.classList.contains("nav__list__link")) {
    const link = e.target;
    const sibilings = link.closest(".nav").querySelectorAll(".nav__list__link");
    const logo = link.closest(".nav").querySelector("img");

    sibilings.forEach((el) => {
      if (el !== link) {
        el.style.opacity = 1;
      } else el.classList.remove("nav__list__item--active");
    });

    logo.style.opacity = 1;
  }
});

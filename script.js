"use strict";

const navLinks = document.querySelectorAll(".nav__list__link");
const navCont = document.querySelector(".nav__list");
const nav = document.querySelector(".nav");

/*
const handleHover = function (e) {
  if (e.target.classList.contains("nav__list__link")) {
    const link = e.target;
    const sibilings = link.closest(".nav").querySelectorAll(".nav__list__link");
    const logo = link.closest(".nav").querySelector("img");

    sibilings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
      logo.style.opacity = this;
    });
  }
};
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));
//adding { }to add css class {el.style.opacity=this el.classlist.add("x")} and use else if to add and remove this calss in sibilings
*/

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

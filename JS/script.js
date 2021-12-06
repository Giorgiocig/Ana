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

//Page Navigation
document
  .querySelector(".hero__containerInner")
  .addEventListener("click", function (e) {
    e.preventDefault();
    console.log(e.target);

    if (e.target.classList.contains("hero__containerInner__button")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });

navCont.addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav__list__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

//intersecting form
const form = document.getElementById("section--6");
const footer = document.querySelector("footer");

const removeNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.remove("none");
  else nav.classList.add("none");
};

const observer = new IntersectionObserver(removeNav, {
  root: null,
  threshold: 0,
});

observer.observe(footer);

//revealing element
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  //console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15, //the section will be revealed when is 15% visible});
});

allSections.forEach(function (section) {
  //wirh a forEach we can observe all the section that we selected before with a querySelectorAll
  sectionObserver.observe(section);
  //section.classList.add('section--hidden'); //the class is addeed with JS
  section.classList.add("section--hidden");
});

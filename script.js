"use strict";

const mobileBtnOpen = document.querySelector(".hamburger-link-open");
mobileBtnOpen.addEventListener("click", openMobileNav);

const mobileBtnClose = document.querySelector(".hamburger-link-close");
mobileBtnClose.addEventListener("click", closeMobileNav);

const mobileNav = document.querySelector(".mobile-nav");

function openMobileNav(e) {
  e.preventDefault();
  console.log("open");
  mobileBtnOpen.classList.add("hidden");
  mobileBtnClose.classList.remove("hidden");

  mobileNav.classList.add("open");
}

function closeMobileNav(e) {
  e.preventDefault();
  console.log("close");
  mobileBtnClose.classList.add("hidden");
  mobileBtnOpen.classList.remove("hidden");
  mobileNav.classList.remove("open");
}

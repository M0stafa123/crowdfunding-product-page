"use strict";
let bookmark = document.querySelector(".bookmark");
let burger = document.querySelector(".open-menu");
let closeMenu = document.querySelector(".close-menu");
let back = document.querySelector(".back");
let backClose = document.querySelector(".close-back");
let selectModel = document.querySelector(".select-model");
let cont = document.querySelectorAll(".Continue");
let m = document.querySelectorAll(".select input");
let money = document.querySelector(".money");
let persons = document.querySelector(".persons");
let prog = document.querySelector(".prog");
let select = document.querySelectorAll(".select-model .select");
let radios = document.querySelectorAll(".select-model [type = 'radio']");
let selects = Array.from(select);
let complete = document.querySelector(".complete");
let done = document.querySelector(".done");
done.addEventListener("click", function () {
    complete.classList.add("hidden");
    document.body.classList.remove("dark");
});
cont.forEach((e, i) => {
    e.addEventListener("click", function () {
        complete.classList.remove("hidden");
        document.body.classList.add("dark");
        selectModel.classList.add("hidden");
        if (i - 1 != -1) {
            money.innerHTML = (+money.innerHTML.split(",").join("") + +Array.from(m)[i - 1].value).toLocaleString();
            prog.style.width = "81%";
            console.log(prog.style.width);
        }
        persons.innerHTML = (+persons.innerHTML.split(",").join("") + 1).toLocaleString();
        radios.forEach((e) => {
            e.checked = false;
        });
        select.forEach((e) => {
            e.style.height = "0";
        });
    });
});
radios.forEach((e, i) => {
    e.addEventListener("change", function () {
        select.forEach((e) => {
            e.style.height = "0";
        });
        select[i].style.height = "70px";
    });
});
backClose.addEventListener("click", function () {
    selectModel.classList.add("hidden");
    document.body.classList.remove("dark");
});
back.addEventListener("click", function () {
    selectModel.classList.remove("hidden");
    document.body.classList.add("dark");
});
closeMenu.addEventListener("click", function () {
    let x = document.querySelector(".close-menu");
    let menu = document.querySelector(".menu");
    if (menu.classList.contains("opened")) {
        menu.classList.remove("w-1/2", "p-4", "h-44");
        menu.classList.add("p-0");
        menu.classList.remove("opened");
        menu.classList.add("closed");
        x.classList.add("hidden");
        burger.classList.remove("hidden");
    }
});
burger.addEventListener("click", function () {
    let x = document.querySelector(".close-menu");
    let menu = document.querySelector(".menu");
    if (menu.classList.contains("closed")) {
        menu.classList.add("w-1/2", "p-4", "h-44");
        menu.classList.remove("p-0");
        menu.classList.remove("closed");
        menu.classList.add("opened");
        x.classList.remove("hidden");
        burger.classList.add("hidden");
    }
});
bookmark.addEventListener("click", function () {
    let span = document.querySelector(".bookmark span");
    let img = bookmark.firstElementChild;
    if (span.classList.contains("w-0")) {
        span.classList.remove("w-0");
        span.style.width = "0px";
        if (window.innerWidth > 767) {
            span.style.width = "100px";
        }
        img.style.cssText =
            "filter:invert(64%) sepia(9%) saturate(2527%) hue-rotate(127deg) brightness(94%) contrast(94%);";
    }
    else {
        span.classList.add("w-0");
        span.style.width = "0px";
        img.style.cssText = "";
    }
});

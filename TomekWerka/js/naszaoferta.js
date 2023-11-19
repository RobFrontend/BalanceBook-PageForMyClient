// NASZA OFERTA HIDDEN WINDOWS //

const btnKsiegBox = document.querySelector(".btn-naszaoferta");
const naszaofertaKsiegBox = document.querySelector(".naszaoferta-text-box");

const openNaszaofertaPKsieg = function () {
  naszaofertaKsiegBox.classList.toggle("hidden");
};

btnKsiegBox.addEventListener("click", openNaszaofertaPKsieg);

// *************************
const btnKadryBox = document.querySelector(".btn-naszaoferta2");
const naszaofertaKadryBox = document.querySelector(".naszaoferta-text-box2");

const openNaszaofertaPKadry = function () {
  naszaofertaKadryBox.classList.toggle("hidden");
};

btnKadryBox.addEventListener("click", openNaszaofertaPKadry);

// *************************
const btnKonsuBox = document.querySelector(".btn-naszaoferta3");
const naszaofertaKonsuBox = document.querySelector(".naszaoferta-text-box3");

const openNaszaofertaPKonsu = function () {
  naszaofertaKonsuBox.classList.toggle("hidden");
};

btnKonsuBox.addEventListener("click", openNaszaofertaPKonsu);

// *************************
const btnZakBox = document.querySelector(".btn-naszaoferta4");
const naszaofertaZakBox = document.querySelector(".naszaoferta-text-box4");

const openNaszaofertaPZak = function () {
  naszaofertaZakBox.classList.toggle("hidden");
};

btnZakBox.addEventListener("click", openNaszaofertaPZak);
/////////

'use strict'

class Pojistenec {
  constructor(jmeno, prijmeni, vek, telefon) {
  this.jmeno = jmeno;
  this.prijmeni = prijmeni;
  this.vek = vek;
  this.telefon = telefon;
}}

let seznamTabulky = document.getElementById("seznam");
let seznamPojistencu = [];

let tlacitkoUlozit = document.getElementById("ulozit");

tlacitkoUlozit.addEventListener("click", function(event) {
event.preventDefault();

let jmenoInput = document.getElementById("jmeno");
let prijmeniInput = document.getElementById("prijmeni");
let vekInput = document.getElementById("vek");
let telefonInput = document.getElementById("telefon");

const novyPojisteny = new Pojistenec(
  jmenoInput.value,
  prijmeniInput.value,
  vekInput.value,
  telefonInput.value
);

seznamPojistencu.push(novyPojisteny);

let novyRadek = document.createElement("tr");
let novyJmenoPrijmeni = document.createElement("td");
let novyTelefon = document.createElement("td");
let novyVek = document.createElement("td");

  novyJmenoPrijmeni.textContent = novyPojisteny.jmeno + " " + novyPojisteny.prijmeni;
  novyTelefon.textContent = novyPojisteny.telefon;
  novyVek.textContent = novyPojisteny.vek;

  novyRadek.appendChild(novyJmenoPrijmeni);
  novyRadek.appendChild(novyTelefon);
  novyRadek.appendChild(novyVek);

let tabulka = document.querySelector("table");
tabulka.appendChild(novyRadek);

jmenoInput.value = "";
prijmeniInput.value = "";
vekInput.value = "";
telefonInput.value = "";

localStorage.setItem("seznamPojistencu", JSON.stringify(seznamPojistencu));
});

window.addEventListener("load", function () {
const ulozenySeznam = localStorage.getItem("seznamPojistencu");

  if (ulozenySeznam) {
    seznamPojistencu = JSON.parse(ulozenySeznam);

    seznamPojistencu.forEach(function (pojisteny) {
      let novyRadek = document.createElement("tr");
      let novyJmenoPrijmeni = document.createElement("td");
      let novyTelefon = document.createElement("td");
      let novyVek = document.createElement("td");

        novyJmenoPrijmeni.textContent = pojisteny.jmeno + " " + pojisteny.prijmeni;
        novyTelefon.textContent = pojisteny.telefon;
        novyVek.textContent = pojisteny.vek;

        novyRadek.appendChild(novyJmenoPrijmeni);
        novyRadek.appendChild(novyTelefon);
        novyRadek.appendChild(novyVek);

        let tabulka = document.querySelector("table");
        tabulka.appendChild(novyRadek);
    });
  }
});



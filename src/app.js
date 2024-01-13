/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // This comment is to prevent the autofromatter for doing stuff for a second.
  let whatWhereWhens = ["A", "The", "Some", "El", "An", "any"];
  let adjectives = [
    "coolest",
    "best",
    "awesome",
    "premier",
    "craziest",
    "better",
    "astonishing",
    "majestic",
    "wonderful"
  ];
  let places = [
    "place",
    "palace",
    "club",
    "space",
    "domain",
    "mansion",
    "chateau",
    "manor",
    "castle"
  ];
  let domains = [".org", ".com", ".sexy", ".space", ".net", "cat", "dog"];

  let domainNames = [];

  for (let whatWhereWhen of whatWhereWhens) {
    for (let adjective of adjectives) {
      for (let place of places) {
        for (let domain of domains) {
          domainNames.push(`${whatWhereWhen}${adjective}${place}${domain}`);
        }
      }
    }
  }

  document.body.innerHTML = `<ul>${domainNames
    .map(domainName => `<li>${domainName}</li>`)
    .join(" ")}</ul>`;
};

// window.onload = function() {
//   //write your code here
//   document.querySelector("#btn").addEventListener("click", () => {
//     document.querySelector("#the-Domain").innerHTML = generateDomain();
//     document.querySelector("#the-Domain2").innerHTML = generateDomain();
//     document.querySelector("#the-Domain3").innerHTML = generateDomain();
//     document.querySelector("#the-Domain4").innerHTML = generateDomain();
//     document.querySelector("#the-Domain5").innerHTML = generateDomain();
//     document.querySelector("#the-Domain6").innerHTML = generateDomain();
//     document.querySelector("#the-Domain7").innerHTML = generateDomain();
//     document.querySelector("#the-Domain8").innerHTML = generateDomain();
//   });
// };
// let generateDomain = () => {
//   let whatWhereWhen = ["A", "The", "Some", "El"];
//   let adjective = [
//     "coolest",
//     "best",
//     "awesome",
//     "premier",
//     "craziest",
//     "better",
//     "astonishing",
//     "majestic",
//     "wonderful"
//   ];
//   let place = [
//     "place",
//     "palace",
//     "club",
//     "space",
//     "domain",
//     "mansion",
//     "chateau",
//     "manor",
//     "castle"
//   ];
//   let domain = [".org", ".com", ".sexy", ".space", ".net"];

//   let whatWhereWhenIndex = Math.floor(Math.random() * whatWhereWhen.length);
//   let adjectiveIndex = Math.floor(Math.random() * adjective.length);
//   let placeIndex = Math.floor(Math.random() * place.length);
//   let domainIndex = Math.floor(Math.random() * domain.length);

//   return (
//     whatWhereWhen[whatWhereWhenIndex] +
//     "" +
//     adjective[adjectiveIndex] +
//     "" +
//     place[placeIndex] +
//     "" +
//     domain[domainIndex]
//   );
// };

const satu = document.getElementsByClassName("satu")[0];
const dua = document.getElementsByClassName("dua")[0];
const dua1 = document.getElementsByClassName("dua-1")[0];
const tiga = document.getElementsByClassName("tiga")[0];
const floating = document.getElementsByClassName("floating")[0];
const allSections = document.querySelectorAll("section");
const h1 = document.getElementsByClassName("log")[0];

let lastScrollYPosition =
  window.pageYOffset || document.documentElement.scrollTop;
let dynamicValue = 0;
console.log(`dynamicValue: ${dynamicValue}`);

const observerOptions = { threshold: [0, 0.25, 0.5, 0.75, 1] };

const observer = new IntersectionObserver(function (entries, observer) {
  console.log(entries[0]);
}, observerOptions);

observer.observe(dua);

// https://bobbyhadz.com/blog/detect-the-scroll-direction-using-javascript

// window.addEventListener("scrollend", function handleScroll(event) {
//   let distance = window.scrollY - lastScrollYPosition;

//   if (window.scrollY > lastScrollYPosition || 0) {
//     // console.log("scrolling down");
//     // console.log(`distence: ${distance}`);
//     dynamicValue = dynamicValue + distance;
//     console.log(`dynamicValue: ${dynamicValue}`);
//   } else if (window.scrollY < lastScrollYPosition) {
//     // console.log("scrolling up");
//     // console.log(`distence: ${distance}`);
//     dynamicValue = dynamicValue + distance;
//     console.log(`dynamicValue: ${dynamicValue}`);
//   }

//   lastScrollYPosition = window.scrollY;
// });

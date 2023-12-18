const satu = document.getElementsByClassName("satu")[0];
const dua = document.getElementsByClassName("dua")[0];
const dua1 = document.getElementsByClassName("dua-1")[0];
const tiga = document.getElementsByClassName("tiga")[0];
const empat = document.getElementsByClassName("empat")[0];
const allSections = document.querySelectorAll("section");
const h1 = document.getElementsByClassName("log")[0];

let vertScrollMax = document.documentElement.scrollTopMax;

function distanceFromTop(element) {
  let Start = element.getBoundingClientRect().top;
  return Math.round(-100 * (Start / element.getBoundingClientRect().height));
}

const observerOptions = {};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    // console.log(entry);
    // if (entry.isIntersecting) {
    //   console.log("visible");
    //   //   console.log(distanceFromTop(entry.target));
    // } else {
    //   console.log("not visible");
    // }
    //
    // whilex (entry.isxIntersecting) {
    //   console.log("visibxle");
    // }
  });
}, observerOptions);

allSections.forEach((section) => {
  observer.observe(section);
});

// function currentVertScroll() {
//   return document.documentElement.scrollTop;
// }

// console.log("x: " + currentVertScroll());

window.addEventListener("scroll", function () {
  //   let satuFromVWTop = satu.getBoundingClientRect().top;
  //   console.log(satuFromVWTop);
  //   satu.style.transform = `translateY(${satuFromVWTop}px)`;
  //
  //   let currentVertScroll = document.documentElement.scrollTop;
  //   console.log(currentVertScroll);
  //   dua.style.transform = "translateY(" + currentVertScroll() / 1 + "% )";
  //   satu.style.transform = "translateY(" + currentVertScroll() / 40 + "% )";
  //
  //
  //   currentVertScroll = document.documentElement.scrollTop;
  //   console.log("x: " + currentVertScroll());
  //
  //   satu.style.transform = "translateY(-" + distanceFromTop(satu) + "% )";
  //
  //   console.log("satu " + distanceFromTop(satu));
  //   console.log("dua " + distanceFromTop(dua));
  //
  //   if (distanceFromTop(dua) <= 100 && distanceFromTop(dua) >= -0) {
  //     console.log("ok");
  //     dua1.style.width = distanceFromTop(dua) + "%";
  //   } else {
  //   }
});

// window.addEventListener("wheel", (event) => {
//   let defaultDelta = 0;
//   const delta = Math.sign(event.deltaY);
//   h1.innerText = defaultDelta + delta;
//   console.info(delta);
// });

// addEventListener("touchend", (event) => {
//   let ok = event;
//   // h1.innerText = ok.radiusY;
//   console.log(ok);
// });
//
//
// // fungsi untuk menenutukan touch ke atas atau bawah
// //
// let initialTouchY, endofTouchY;
// //
// addEventListener("touchstart", function (e) {
//   initialTouchY = e.touches[0].clientY;
//   console.log("start> " + e.touches[0].clientY);
// });
// //
// addEventListener("touchend", function (e) {
//   endofTouchY = e.changedTouches[0].clientY;
//   console.log("end> " + e.changedTouches[0].clientY);
//   console.log("total distance> " + (initialTouchY - endofTouchY));
//   h1.innerText = "total distance> " + (initialTouchY - endofTouchY);
//   alert("total distance> " + (initialTouchY - endofTouchY));
// });
// //

// window.addEventListener("scroll", (event) => {
//   console.log(event);
// });
//
//
//
// //ini terakhir experiment
// // ini bisa
// let lastScrollYPosition =
//   window.pageYOffset || document.documentElement.scrollTop;
// //
// currentEmpatWidth = 0;
// //
// window.addEventListener(
//   "scrollend",
//   function handleScroll() {
//     const changedScrollYPosition =
//       window.pageYOffset || document.documentElement.scrollTop;
//     let distance = changedScrollYPosition - lastScrollYPosition;

//     if (changedScrollYPosition > lastScrollYPosition) {
//       console.log("scrolling down");
//       console.log("distance: " + distance);

//       currentEmpatWidth = currentEmpatWidth + distance;
//       // console.log("current width: " + currentEmpatWidth);
//       empat.style.width = currentEmpatWidth + "px";
//     } else if (changedScrollYPosition < lastScrollYPosition) {
//       console.log("scrolling up");
//       console.log("distance: " + distance);
//       currentEmpatWidth = currentEmpatWidth + distance;
//       // console.log("current width: " + currentEmpatWidth);

//       empat.style.width = currentEmpatWidth + "px";
//     }
//     lastScrollYPosition =
//       changedScrollYPosition <= 0 ? 0 : changedScrollYPosition;
//   },
//   false
// );
// //

// to do
// distance       = partial value
// div y / height = total value
// dynamic value  = percent of partial value of total value
// if current dynamic value less than 0 and more than 100 then do nothing!

// // ok begin parallax
// let lastScrollYPosition =
//   window.pageYOffset || document.documentElement.scrollTop;
// let dynamicValue = 0;
// console.log(`dynamicValue: ${dynamicValue}`);

// window.addEventListener("scrollend", function () {
//   const changedScrollYPosition =
//     window.pageYOffset || document.documentElement.scrollTop;
//   let distance = changedScrollYPosition - lastScrollYPosition;

//   if (changedScrollYPosition > lastScrollYPosition) {
//     console.log(`scroll down`);
//     console.log(`distence: ${distance}`);
//     // dynamicValue = dynamicValue + distance;
//     // console.log(`dynamicValue: ${dynamicValue}`);
//   } else if (changedScrollYPosition < lastScrollYPosition) {
//     console.log(`scroll up`);
//     console.log(`distence: ${distance}`);
//     // dynamicValue = dynamicValue + distance;
//     // console.log(`dynamicValue: ${dynamicValue}`);
//   }
// });

//
//
// https://bobbyhadz.com/blog/detect-the-scroll-direction-using-javascript
let lastScrollYPosition =
  window.pageYOffset || document.documentElement.scrollTop;
let dynamicValue = 0;
console.log(`dynamicValue: ${dynamicValue}`);

window.addEventListener("scrollend", function handleScroll(event) {
  let distance = window.scrollY - lastScrollYPosition;

  if (window.scrollY > lastScrollYPosition || 0) {
    // console.log("scrolling down");
    // console.log(`distence: ${distance}`);
    dynamicValue = dynamicValue + distance;
    console.log(`dynamicValue: ${dynamicValue}`);
  } else if (window.scrollY < lastScrollYPosition) {
    // console.log("scrolling up");
    // console.log(`distence: ${distance}`);
    dynamicValue = dynamicValue + distance;
    console.log(`dynamicValue: ${dynamicValue}`);
  }

  lastScrollYPosition = window.scrollY;
});

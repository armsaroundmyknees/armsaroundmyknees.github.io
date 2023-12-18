// function checkCurrentSlide() {
//   portfolioItems.forEach(function (element) {
//     console.log(isInViewport(element));
//   });
// }
// portfolioItems[1].scrollIntoView({
//   behavior: "smooth",
//   block: "center",
//   inline: "nearest",
// });
// window.addEventListener("scroll", function () {
//   if (isInViewport(portfolioItems[0]) == true) {
//     console.log("prev disabled");
//   } else if (isInViewport(portfolioItems[3]) == true) {
//     console.log("next disabled");
//   } else {
//     console.log("next and prev are enabled");
//   }
// });
// click
document
  .querySelectorAll(".portfolio-items")[1]
  .scrollIntoView({ behavior: "smooth", inline: "nearest", block: "center" });

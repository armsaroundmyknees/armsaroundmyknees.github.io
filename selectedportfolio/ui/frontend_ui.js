const portfolioItems = document.querySelectorAll(".portfolio-items");
let portfoliofirstItems = portfolioItems[0];
let portfoliolastItems = portfolioItems[portfolioItems.length - 1];
let currentSlide = 0;
let availableSlides = portfolioItems.length - 1;
const portfolioNavButtons = document.querySelectorAll(
  ".portfolio-navigation-items"
);

// function checkCurrentSlide() {
//   portfolioItems.forEach(function (element) {
//     slideInViewport.push(element);
//   });
// }

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function prevItem() {
  console.log("prev button clicked");
  if (currentSlide != 0) {
    currentSlide--;
    console.log(currentSlide + "/" + availableSlides);
    document.querySelectorAll(".portfolio-items")[currentSlide].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "center",
    });
  }
}

function nextItem() {
  console.log("next button clicked");
  if (currentSlide == availableSlides) {
    console.log(currentSlide + "/" + availableSlides);
  } else {
    currentSlide++;
    console.log(currentSlide + "/" + availableSlides);
    document.querySelectorAll(".portfolio-items")[currentSlide].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "center",
    });
  }
}

//  initializing at start
document
  .querySelectorAll(".portfolio-items")[0]
  .scrollIntoView({ behavior: "smooth", inline: "center", block: "center" });

// kalo tombol next diclick
portfolioNavButtons[1].children[0].addEventListener("click", () => {
  nextItem();
});

// kalo tombol left diclick
portfolioNavButtons[0].children[0].addEventListener("click", () => {
  prevItem();
});

document.body.addEventListener("keydown", (key) => {
  if (key.code == "ArrowLeft" || key.code == "ArrowUp") {
    prevItem();
  } else if (key.code == "ArrowRight" || key.code == "ArrowDown") {
    nextItem();
  }
});

// document.querySelectorAll(".portfolio-items").forEach(function (elem) {
//   console.log(elem);
// });

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

const hammerTime = new Hammer(document.body);
hammerTime.on("swipeleft swiperight", (event) => {
  switch (event.type) {
    case "swipeleft":
      nextItem();
      break;
    case "swiperight":
      prevItem();
      break;
  }
});

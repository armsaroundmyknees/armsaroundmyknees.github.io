/**************** layout variables ****************/
const container_contents = document.querySelector("main.contents");
const container_header = document.querySelector("nav.header");
const container_buttons = document.querySelector(".buttons-container");
const button_prev = document.querySelector(".buttons-container .button-prev");
const button_next = document.querySelector(".buttons-container .button-next");
const button_all = document.querySelector(".buttons-container .button-all");

// document.getElementById("content3").scrollIntoView({
//   behavior: "smooth",
//   block: "start",
//   inline: "start",
// });
// document.querySelectorAll("[data-title='project1']")[0].scrollIntoView()

/**************** next/previous slide navigation ****************/

// fungsi navigasi scroll kanan kiri
function scrollNavigation(direction) {
  if (direction === ">") {
    document.querySelector(".contents").scrollLeft +=
      window.innerWidth * (80 / 100);
  } else if (direction === "<") {
    document.querySelector(".contents").scrollLeft -=
      window.innerWidth * (80 / 100);
  }
}

// keyboard event
document.addEventListener("keyup", (event) => {
  const keyName = event.key;

  if (keyName === "ArrowRight") {
    scrollNavigation(">");
  }

  if (keyName === "ArrowLeft") {
    scrollNavigation("<");
  }
});

// button event
button_prev.addEventListener("click", () => scrollNavigation("<"));
button_next.addEventListener("click", () => scrollNavigation(">"));

/**************** etching content from json ****************/
let allContents;

function fillContents() {
  allContents.forEach(function (items) {
    let templateSingleContents = `<div class="content-wrap" data-title="${items.title.replace(
      /\s+/,
      ""
    )}">
                                  <div class="content-A single-content">${
                                    items.sideA
                                  }</div>
                              </div>`;

    let templateContents = `<div class="content-wrap" data-title="${items.title.replace(
      /\s+/,
      ""
    )}">
                                  <div class="content-A">${
                                    items.sideA
                                  }</div><div class="content-B">${
      items.sideB
    }</div>
                              </div>`;

    if (items.single === true) {
      container_contents.insertAdjacentHTML(
        "beforeend",
        templateSingleContents
      );
    } else {
      container_contents.insertAdjacentHTML("beforeend", templateContents);
    }
  });
  return "fill contents successfully";
}

fetch("contents/portfolio.json")
  .then((response) => response.json())
  .then((response) => {
    allContents = response.contents;
    fillContents();
  });

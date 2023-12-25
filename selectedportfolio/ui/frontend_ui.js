// layout variables
const container_contents = document.querySelector("main.contents");
const container_header = document.querySelector("nav.header");
const container_buttons = document.querySelector(".buttons-container");

// document.getElementById("content3").scrollIntoView({
//   behavior: "smooth",
//   block: "start",
//   inline: "start",
// });
// document.querySelectorAll("[data-title='project1']")[0].scrollIntoView()

// fungsi navigasi scroll kanan kiri
function scrollNavigation(direction) {
  if (direction === ">") {
    document.querySelector(".contents").scrollLeft +=
      window.innerWidth * (80 / 100);

    console.log("next");
  }

  if (direction === "<") {
    document.querySelector(".contents").scrollLeft -=
      window.innerWidth * (80 / 100);

    console.log("prev");
  }
}

// keyboard Event Navigasi scroll
document.addEventListener("keyup", (event) => {
  const keyName = event.key;

  if (keyName === "ArrowRight") {
    scrollNavigation(">");
  }

  if (keyName === "ArrowLeft") {
    scrollNavigation("<");
  }
});

// fetching content from json
let allContents;

function fillContents() {
  allContents.forEach((items) => {
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

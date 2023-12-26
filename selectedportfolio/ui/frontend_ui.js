/**************** layout variables ****************/
const container_layout = document.querySelector("div.layout-container");
const container_contents = document.querySelector("main.contents");
const container_header = document.querySelector("nav.header");
const container_buttons = document.querySelector("div.buttons-container");
let container_allPagesMenu;
let container_allPagesMenu_close;
let container_allPagesMenu_buttom;
let content_start;
let content_end;
const button_prev = document.querySelector(".buttons-container .button-prev");
const button_next = document.querySelector(".buttons-container .button-next");
const button_all = document.querySelector(".buttons-container .button-all");
const button_title = document.querySelector(".buttons-container .button-title");

/**************** next/previous slide navigation ****************/
// fungsi navigasi scroll kanan kiri
function scrollNavigation(direction) {
  if (direction === ">") {
    // kalau udah ada di halaman terakhir gabisa diklik tombolnya
    if (
      localStorage.armsaroundmyknees_portfolio_lastposition.replace(
        /\s+/,
        "_"
      ) === content_end.dataset.title
    ) {
      alert("you are at the end section.");
    } else {
      document.querySelector(".contents").scrollLeft +=
        window.innerWidth * (80 / 100);
    }
  } else if (direction === "<") {
    // kalau udah ada di halaman awal gabisa diklik tombolnya
    if (
      localStorage.armsaroundmyknees_portfolio_lastposition.replace(
        /\s+/,
        "_"
      ) === content_start.dataset.title
    ) {
      alert("you are at the first section.");
    } else {
      document.querySelector(".contents").scrollLeft -=
        window.innerWidth * (80 / 100);
    }
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

/**************** fetching content from json ****************/
// init contents variable
let allContents;
let allContentsTitle = [];
let allContentsWrap;
//   buat fungsi untuk mengisi konten akan dijalankan ketika
// fetch sudah mendapatkan respon dari json
function fillContents() {
  // menghitung ada berapa banyak konten di JSON untuk kemudian
  // disusun ke dalam DOM
  allContents.forEach(function (items) {
    // membuat template DOM
    let templateSingleContents = `<div class="content-wrap" data-title="${items.title.replace(
      /\s+/g,
      "_"
    )}">
                                  <div class="content-A single-content">${
                                    items.sideA
                                  }</div>
                              </div>`;

    let templateContents = `<div class="content-wrap" data-title="${items.title.replace(
      /\s+/g,
      "_"
    )}">
                                  <div class="content-A">${
                                    items.sideA
                                  }</div><div class="content-B">${
      items.sideB
    }</div>
                              </div>`;

    // kalau di JSON singlenya true maka pakai template single
    // begitu juga sebaliknya
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
// fetching all contents from JSON
fetch("contents/portfolio.json")
  .then((response) => response.json())
  .then((response) => {
    // fill allContents variable with contents list from json
    allContents = response.contents;

    // fill dom element (the main class content)
    fillContents();

    // fill allContentsTitle variable and remove the duplicate for later uses
    allContents.forEach((contents) => {
      allContentsTitle.push(contents.title);
      allContentsTitle = [...new Set(allContentsTitle)];
    });

    // make all contents observable
    allContentsWrap = document.querySelectorAll("div.content-wrap");
    allContentsWrap.forEach((contents) => {
      intersectionObserver.observe(contents);
    });

    // fill variable first and last content
    content_start = allContentsWrap[0];
    content_end = allContentsWrap[allContentsWrap.length - 1];
  });

/**************** event button all/* pada navigasi****************/
button_all.addEventListener("click", () => {
  toggleFullScreen();
});

button_title.addEventListener("click", () => {
  createAllPagesMenu();
});

/**************** fungsi make all pages menu layout ****************/
// fungsi untuk menghapus DOM tombol hapus dan container all pages menu
function deleteAllPagesMenu() {
  container_allPagesMenu.remove();
  container_allPagesMenu_close.remove();
  // container_layout.classList.toggle("hidden");
  // container_buttons.classList.toggle("hidden");
}
// fungsi untuk membuat DOM tombol hapus dan container all pages menu
function createAllPagesMenu() {
  // container_layout.classList.toggle("hidden");
  // container_buttons.classList.toggle("hidden");

  // template all pages menu
  let templateAllPages = `
  <div class="allpages-close-menu"></div>
  <div class="allpages-menu-container">
  <div class="allpages-menu-button"></div>
  </div>`;

  // sisipkan template all pages menu setelah tag container buttons
  container_buttons.insertAdjacentHTML("afterend", templateAllPages);

  // isi variable untuk semua button yang ada di all pages menu
  container_allPagesMenu = document.querySelector(
    "div.allpages-menu-container"
  );
  container_allPagesMenu_close = document.querySelector(
    "div.allpages-close-menu"
  );
  container_allPagesMenu_button = document.querySelector(
    "div.allpages-menu-button"
  );

  // buat judul yang akan ditampilkan di menu2
  // yang berada di all pages menu
  allContentsTitle.forEach((titles) => {
    // template untuk menu judul
    let templateButtonPages = `<div id="goto_${titles.replace(
      /\s+/g,
      "_"
    )}">${titles}</div>`;

    // sisipkan template
    container_allPagesMenu_button.insertAdjacentHTML(
      "beforeend",
      templateButtonPages
    );

    // tambahkan event click
    //  jika diclick judulnya page akan menuju
    // sampul halaman judul tsb
    document
      .getElementById(`goto_${titles.replace(/\s+/g, "_")}`)
      .addEventListener("click", function () {
        // console.log(this);
        let thisID = `[data-title=${this.id.replace("goto_", "")}]`;
        document.querySelectorAll(thisID)[0].scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "start",
        });

        // jika judul diklik maka allpagesmenu akan dihapus/hilang
        container_allPagesMenu.remove();
        container_allPagesMenu_close.remove();
      });
  });

  // jika tombol close diklik maka allpagesmenu akan dihapus/hilang
  container_allPagesMenu_close.addEventListener("click", () => {
    deleteAllPagesMenu();
  });
}

/**************** intersection observer for contents positions****************/

button_title.children[0].innerText =
  localStorage.armsaroundmyknees_portfolio_lastposition;

let currentSlidePosition;

const observerOptions = {
  threshold: 0.9,
};
const observerCallback = (entries) => {
  // // If intersectionRatio is 0, the target is out of view
  // // and we do not need to do anything.
  // if (entries[0].intersectionRatio <= 0) return;

  // loadItems(10);

  if (entries[0].isIntersecting === true) {
    console.log(entries[0].target.dataset.title);
    button_title.children[0].innerText =
      entries[0].target.dataset.title.replace(/_/gm, " ");

    localStorage.setItem(
      "armsaroundmyknees_portfolio_lastposition",
      button_title.children[0].innerText
    );

    currentSlidePosition = entries[0].target;
  }
};
const intersectionObserver = new IntersectionObserver(
  observerCallback,
  observerOptions
);

/**************** check refresh ****************/
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}

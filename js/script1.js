//  element
const jobContainer = document.querySelector(".job--container");
const clearBtn = document.querySelector(".clearBtn");

data.forEach((el) => {
  const wordsArr = el.words.map((word) => {
    return `<span class="item--bag">${word}</span>`;
  });
  const html = `
          <div class="item ${
            el.featured ? "item-featured" : ""
          }" data-word='${el.words.join(" ")}'>
            <div class="item--About">
              <div class="item--image">
                <img src="${el.logo}" alt="" />
              </div>
              <div class="item--info">
                <div class="line--1">
                  <h2>${el.company}</h2>
                  <ul>
                  ${el.new ? '<li class="special new">New!</li>' : ""}
                  ${
                    el.featured
                      ? '<li class="special featured">Featured</li>'
                      : ""
                  }
                  </ul>
                </div>
                <div class="line--2">
                  <h1>${el.position}</h1>
                </div>
                <div class="line--3">
                  <span>${el.postedAt}</span>
                  <span class="dot">.</span>
                  <span>${el.contract}</span>
                  <span class="dot">.</span>
                  <span>${el.location}</span>
                </div>
              </div>
            </div>
            <div class="item--bag-container">
            ${wordsArr.join("")}
            </div>
          </div>
          `;

  jobContainer.insertAdjacentHTML("beforeend", html);
});

let bagArr = [];
const filtersContainer = document.querySelector(".filters ul");
const filtersEl = document.querySelector(".filters");
const cardjobArr = Array.from(document.querySelectorAll(".item"));

const itemBag = Array.from(document.querySelectorAll(".item--bag"));

itemBag.forEach((item) => {
  item.addEventListener("click", () => {
    if (!bagArr.includes(item.innerHTML)) {
      bagArr.push(item.innerHTML);
    }
    displayFilterContainer();
    updateJobs();
    updateFilters(item);
  });
});

function updateJobs() {
  cardjobArr.map((job) => {
    if (
      !bagArr.every((bag) => {
        return job.dataset.word.split(" ").includes(bag);
      })
    ) {
      job.style.display = "none";
    }
  });
}

function updateFilters(badge) {
  const filterBadge = document.createElement("li");
  filterBadge.innerHTML = `
            <span>${badge.innerHTML}</span>
            <div>
              <img src="/images/icon-remove.svg" alt="" />
            </div>`;
  filtersContainer.appendChild(filterBadge);

  //

  filterEventHandler(filterBadge);
}

function filterEventHandler(filterBadge) {
  filterBadge.addEventListener("click", () => {
    const index = bagArr.indexOf(filterBadge.firstElementChild.innerHTML);
    console.log(index);
    bagArr.splice(index, 1);
    //
    displayAllJob();
    updateJobs();
    //
    removeFilter(filterBadge);
    //
    if (bagArr.length === 0) {
      hiddenFilterContainer();
    }
  });
}

function displayAllJob() {
  cardjobArr.forEach((job) => {
    job.style.display = "flex";
  });
}

function removeFilter(removeBadge) {
  removeBadge.remove();
}

function clear() {
  bagArr = [];

  filtersContainer.innerHTML = "";
  displayAllJob();
  hiddenFilterContainer();
}

function displayFilterContainer() {
  filtersEl.classList.remove("filters-hidden");
}
function hiddenFilterContainer() {
  filtersEl.classList.add("filters-hidden");
}

clearBtn.addEventListener("click", clear);

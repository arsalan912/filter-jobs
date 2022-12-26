// //  element
// const jobContainer = document.querySelector(".job--container");
// const clearBtn = document.querySelector(".clearBtn");

// data.forEach((el) => {
//   const wordsArr = el.words.map((word) => {
//     return `<span class="item--bag">${word}</span>`;
//   });
//   const html = `
//           <div class="item ${
//             el.featured ? "item-featured" : ""
//           }" data-word='${el.words.join(" ")}'>
//             <div class="item--About">
//               <div class="item--image">
//                 <img src="${el.logo}" alt="" />
//               </div>
//               <div class="item--info">
//                 <div class="line--1">
//                   <h2>${el.company}</h2>
//                   <ul>
//                   ${el.new ? '<li class="special new">New!</li>' : ""}
//                   ${
//                     el.featured
//                       ? '<li class="special featured">Featured</li>'
//                       : ""
//                   }
//                   </ul>
//                 </div>
//                 <div class="line--2">
//                   <h1>${el.position}</h1>
//                 </div>
//                 <div class="line--3">
//                   <span>${el.postedAt}</span>
//                   <span class="dot">.</span>
//                   <span>${el.contract}</span>
//                   <span class="dot">.</span>
//                   <span>${el.location}</span>
//                 </div>
//               </div>
//             </div>
//             <div class="item--bag-container">
//             ${wordsArr.join("")}
//             </div>
//           </div>
//           `;

//   jobContainer.insertAdjacentHTML("beforeend", html);
// });

// let bagArr = [];
// const filtersContainer = document.querySelector(".filters ul");
// const cardjobArr = Array.from(document.querySelectorAll(".item"));

// const itemBag = Array.from(document.querySelectorAll(".item--bag"));

// itemBag.forEach((item) => {
//   item.addEventListener("click", function () {
//     if (!bagArr.includes(item.innerHTML)) {
//       bagArr.push(item.innerHTML);
//     }
//     console.log(bagArr);
//     addFilter();
//     displayBadge();
//     filterVisible();
//     removeBadge();
//   });
// });

// function filterVisible() {
//   document.querySelector(".filters").classList.remove("filters-hidden");
// }
// function filterHidden() {
//   document.querySelector(".filters").classList.add("filters-hidden");
// }

// function addFilter() {
//   cardjobArr.map((job) => {
//     if (
//       !bagArr.every((bag) => {
//         return job.dataset.word.split(" ").includes(bag);
//       })
//     ) {
//       job.style.display = "none";
//     }
//   });
// }

// function displayBadge() {
//   const badgeHtml = bagArr.map((item) => {
//     return `
//     <li>
//       <span>${item}</span>
//       <div>
//       <img src="/images/icon-remove.svg" alt="" />
//       </div>
//     </li>`;
//   });
//   filtersContainer.innerHTML = `${badgeHtml.join("")}`;
// }

// function clear() {
//   bagArr = [];
//   addFilter();
//   displayBadge();
//   filterHidden();
//   cardjobArr.forEach((job) => {
//     job.style.display = "flex";
//   });
// }
// function removeBadge() {
//   const filterItem = Array.from(document.querySelectorAll(".filters ul li"));
//   filterItem.forEach((filterBadge) => {
//     filterBadge.addEventListener("click", function () {
//       const index = bagArr.indexOf(filterBadge.firstElementChild.innerHTML);
//       bagArr.splice(index, 1);
//       console.log(index);
//       cardjobArr.forEach((job) => {
//         job.style.display = "flex";
//       });
//       addFilter();
//     });
//   });
// }

// clearBtn.addEventListener("click", clear);

const loadingBarItemEl = document.querySelector(`.loading-bar__item`);
const buttonEls = document.querySelectorAll(`.loading-button`);

function loadFromButton() {
  for (let button of buttonEls) {
    button.addEventListener(`click`, function () {
      loadingBarItemEl.style.width = `0%`;
      loadingBarItemEl.style.display = `block`;
      let buttonPercent = Number(button.innerHTML);
      let width = 0;
      let loadingBar = setInterval(function () {
        if (width >= buttonPercent) {
          clearInterval(loadingBar);
          loadingBarItemEl.style.display = `none`;
        } else {
          width++;
          loadingBarItemEl.style.width = `${width}%`;
        }
      }, 8);
    })
  }
}

loadFromButton();

// let width = 0;
// let loadingBar = setInterval(function() {
//   if (width >= 100) {
//     clearInterval(loadingBar);
//   } else {
//     width ++;
//     loadingBarItemEl.style.width = `${width}%`;
//   }
// }, 10);

// let count = 0;
// let incrementor = setInterval (function() {
//   if (count === 10) {
//     clearInterval(incrementor);
//   } else {
//     count++;
//     console.log(count);
//   }
// }, 1000)
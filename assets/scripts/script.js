const loadingBarItemEl = document.querySelector(`.loading-bar__item`);
const buttonEls = document.querySelectorAll(`.loading-button`);

function loadFromButton() {
  for (let button of buttonEls) {
    let buttonPercent = 0;
    button.addEventListener(`click`, function () {
      buttonPercent = Number(button.innerHTML);
      let width = 0;
      let loadingBar = setInterval(function () {
        if (width >= buttonPercent) {
          clearInterval(loadingBar);
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
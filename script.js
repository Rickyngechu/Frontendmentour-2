"use strict";
// First we should listen to click events on the buttons.
const rateBtns = document.querySelectorAll(".btn-check");
const form = document.querySelector(".form");
const ratingCont = document.querySelector(".rating-cont");
const rate = document.querySelector(".rate");

let selectedVal = 0;
let val;
rateBtns.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    val = e.target.value;
    if (e.target) {
      e.target.classList.toggle("selectbtn");
      selectedVal += e.target.value;
    }
  })
);

//HANDLING THE FORM SUBMISSION
form.addEventListener("submit", function (e) {
  e.preventDefault();

  //For testing purposes
  /**   //   if (selectedVal.length === 2) {
  //     console.log("You have rated 1 out of 5");
  //   } else if (selectedVal.length === 3) {
  //     console.log("You have rated 2 out of 5");
  //   } else if (selectedVal.length === 4) {
  //     console.log("You have rated 3 out of 5");
  //   } else if (selectedVal.length === 5) {
  //     console.log("You have rated 4 out of 5");
  //   } else if (selectedVal.length === 6) {
  //     console.log("You have rated 5 out of 5");
  //   } else {
  //     console.log("You have not selected anything");
  //     alert("Please select a rating before submitting!");
  //   }

  //   console.log(selectedVal);
  //   console.log(val);*/

  const html = `
  <div class="thankyou-display">
            <div class="img">
              <img
                src="images/illustration-thank-you.svg "
                alt="Thankyou svg"
              />
            </div>

            <div class="rate-display">
              <p>You selected <span class="rate-input">${val}</span> out of 5</p>
            </div>
            <p class="card-heading">Thankyou!</p>

            <p class="card-text">
              We appreciate you taking the time to give a rating.If you ever
              need more support,don't hesitate to get in touch
            </p>
          </div>
  `;

  //We are now checking whether the user has given us any input or not,if yes then we can proceed to manipulating the dom and if not we can display an alert message.
  if (selectedVal) {
    //We are delaying the success message so that the user may see like the process was  loading.
    setTimeout(() => {
      ratingCont.insertAdjacentHTML("afterbegin", html);
      rate.style.opacity = 0;
      rate.style.visibility = "hidden";
      //   rate.style.height = 0;
      rate.style.zIndex = 0;
      rate.style.display = "none";
    }, "1000");
  } else {
    console.log("You have not selected anything");
    alert("Please select a rating before submitting!");
  }
});

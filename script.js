// code for image slideshow from w3schools: https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_dots2

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function currentDiv(n) {
  showDivs((slideIndex = n));
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " w3-white";
}

// ANNALEES DEL:

window.addEventListener("DOMContentLoaded", init);

function init() {
  document.querySelector(`.bestil[data-action="cta"]`).addEventListener("click", showStepSize);
}

function showStepSize() {
  console.log("showStepSize logged");
  //clean:
  // document.querySelector("#step_payment").style.display = "none";
  // document.querySelector("#step_size").style.display = "grid";

  document.querySelector(".basket_bg").style.display = "block";
  // document.querySelector(".basket_wrapper").style.bottom = "0";
  document.querySelector(".basket_wrapper").classList.add("slide");
  document.querySelector(".basket_wrapper").style.display = "block";
  document.querySelector(".basket_wrapper").addEventListener("animationend", () => {
    document.querySelector(".basket_wrapper").style.bottom = "0";
    document.querySelector("main").style.display = "none";
  });
  const sizes = document.querySelectorAll("input[name=size]");
  console.log(sizes);
  sizes.forEach(s => {
    s.addEventListener("input", e => {
      console.log(e);
      document
        .querySelector(`form[action="enter_size"]`)
        .querySelector("button")
        .removeAttribute("disabled");
    });
  });
}

document.querySelector(`form[action="enter_size"]`).addEventListener("submit", event => {
  event.preventDefault();

  //her skal vi tjekke om en af size-knapperne er blevet trykket, og give besked til brugeren hvis den ikke er

  showSubs();
});

function showSubs() {
  document.querySelector("#step_size").style.display = "none";
  document.querySelector("#step_subscription").style.display = "grid";

  document.querySelectorAll(".plan").forEach(plan => {
    plan.addEventListener("click", function() {
      console.log(this.dataset);
      document.querySelector(".basket_item>span").textContent = this.dataset.issues;
      document.querySelector(".sub-price").textContent = this.dataset.price + ",00 kr.";
      const total = parseInt(this.dataset.price, 10) + 49.5;
      document.querySelector(".total_price").textContent = total + "0 kr.";
      document.querySelectorAll(".plan").forEach(plan => {
        plan.style.border = "3px groove var(--color-bggray)";
      });
      this.style.border = "3px groove var(--color-purple)";
      console.log(this);
    });
  });
}

document.querySelector(`form[action="choose_sub"]`).addEventListener("submit", event => {
  event.preventDefault();

  //lav validering for subs, no idea how

  showDelivery();
});

//JOSE'S DEL
function showDelivery() {
  document.querySelector("#step_subscription").style.display = "none";
  document.querySelector("#step_delivery").style.display = "block";
  document.querySelector(".step2 img").src = "img/checkbox-homemade.png";
  document.querySelector(".step2 p").style.color = "var(--color-green)";
  document.querySelector(`form[action="delivery"]`).addEventListener("submit", showPayment);
}

//NICKLAS' DEL
function showPayment(event) {
  event.preventDefault();
  document.querySelector("#step_delivery").style.display = "none";
  document.querySelector("#step_payment").style.display = "block";
  document.querySelector(".step3 img").src = "img/checkbox-homemade.png";
  document.querySelector(".step3 p").style.color = "var(--color-green)";
}

document.querySelector(`form[action="show_order_done"]`).addEventListener("submit", event => {
  event.preventDefault();
  location.reload();
});

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
  document.querySelector("body").addEventListener("click", listClickController);
}

function listClickController(event) {
  // controller for clicks
  let element = event.target;

  if (element.getAttribute("data-action") == "cta") {
    showStepSize();
  } else if (element.getAttribute("data-action") == "show_subs") {
    showSubs();
  } else if (element.getAttribute("data-action") == "show_delivery") {
    showDelivery();
  } else if (element.getAttribute("data-action") == "show_payment") {
    showPayment();
  }
}

function showStepSize() {
  console.log("showStepSize logged");
  document.querySelector(".basket_bg").style.display = "block";
  // document.querySelector(".basket_wrapper").style.bottom = "0";
  document.querySelector(".basket_wrapper").classList.add("slide");
  document.querySelector(".basket_wrapper").addEventListener("animationend", () => {
    document.querySelector(".basket_wrapper").style.bottom = "0";
  });
}

function showSubs() {
  console.log("showSubs logged");
  document.querySelector("#step_size").style.display = "none";
  document.querySelector("#step_subscription").style.display = "grid";

  document.querySelectorAll(".plan").forEach(plan => {
    plan.addEventListener("click", function() {
      console.log(this);
      document.querySelectorAll(".plan").forEach(plan => {
        plan.style.border = "2px groove var(--color-bggray)";
      });
      this.style.border = "2px groove var(--color-purple)";
    });
  });
}

//JOSE'S DEL
function showDelivery() {
  document.querySelector("#step_subscription").style.display = "none";
  document.querySelector("#step_delivery").style.display = "block";
}

//NICKLAS' DEL
function showPayment() {
  document.querySelector("#step_delivery").style.display = "none";
  document.querySelector("#step_payment").style.display = "block";
}

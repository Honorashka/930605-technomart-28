// add baskets
var buy = document.querySelector(".button-buy");
var popupbuy = document.querySelector(".modal-basket");
var closebuy = popupbuy.querySelector(".button-close");
var buttonbuy = popupbuy.querySelector(".basket-button-buy");

buy.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupbuy.classList.add("modal-show");
  buttonbuy.focus();

});
closebuy.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupbuy.classList.remove("modal-show")

});

window.addEventListener("keydown", function (evt) {
  if(evt.keyCode === 27){
    if (popupbuy.classList.contains("modal-show")){
      evt.preventDefault();
      popupbuy.classList.remove("modal-show")
    }
  }
});




// maps

var map = document.querySelector(".company-contact-maps");
var popupmap = document.querySelector(".modal-map");
var closemap = popupmap.querySelector(".button-close");



map.addEventListener("click",function (evt) {
  evt.preventDefault();
  popupmap.classList.add("modal-show");

});
closemap.addEventListener("click",function (evt) {
  evt.preventDefault();
  popupmap.classList.remove("modal-show");

});
window.addEventListener("keydown", function (evt) {
  if(evt.keyCode === 27){
    if (popupmap.classList.contains("modal-show")){
      evt.preventDefault();
      popupmap.classList.remove("modal-show")
    }
  }
})


// feedback show

var feedback = document.querySelector(".button-write");
var popupfeedback = document.querySelector(".modal-feedback");
var closefeedback = popupfeedback.querySelector(".button-close");
var loginfeedback = popupfeedback.querySelector(".login-feedback");
var loginemail = popupfeedback.querySelector(".feedback-email");
var loginform = popupfeedback.querySelector(".feedback-form");

var isStorageSupport = true;
var storage ="";

try {
  storage = localStorage.getItem("login");
}
catch (err) {
  isStorageSupport = false;
}

feedback.addEventListener ("click", function (evt) {
  evt.preventDefault();
  popupfeedback.classList.add("modal-show");
  loginfeedback.focus();
  if (storage) {
    loginfeedback.value = storage;
    loginemail.focus();
  } else {
    loginfeedback.focus();
  }
});


closefeedback.addEventListener ("click", function (evt) {
  evt.preventDefault();
  popupfeedback.classList.remove("modal-show");
  popupfeedback.classList.remove("modal-error");

});

loginform.addEventListener("submit", function (evt) {
  if (!loginfeedback.value || !loginemail.value) {
    evt.preventDefault();
    popupfeedback.classList.add("modal-error");
    popupfeedback.offsetWidth = popupfeedback.offsetWidth;
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", loginfeedback.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27){
    if (popupfeedback.classList.contains("modal-show")){
      evt.preventDefault();
      popupfeedback.classList.remove("modal-show")
    }
  }
});


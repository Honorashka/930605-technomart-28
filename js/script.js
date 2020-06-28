// add baskets
var buy = document.querySelectorAll(".button-buy");
var popupbuy = document.querySelector(".modal-basket");
var closebuy = popupbuy.querySelector(".button-close");

for(var i=0;i<buy.length;i++)buy[i].addEventListener("click",function(a){a.preventDefault();

  popupbuy.classList.add("modal-show")}
  );
  closebuy.addEventListener("click",function(a){a.preventDefault();
  popupbuy.classList.remove("modal-show");
  });
window.addEventListener("keydown", function (evt) {
  if(evt.keyCode === 27){
    if (popupbuy.classList.contains("modal-show")){
      evt.preventDefault();
      popupbuy.classList.remove("modal-show")
    }
  }
});

// slaider

var next = document.querySelector(".button-next");
var back = document.querySelector(".button-back");
var slaidernext = document.querySelector(".advantages-gallery-drill");
var slaiderback = document.querySelector(".advantages-gallery");


next.addEventListener("click", function (evt) {
  evt.preventDefault();
  slaidernext.classList.add("advantages-gallery-show")
});

back.addEventListener("click", function (evt) {
  evt.preventDefault();
  slaidernext.classList.remove("advantages-gallery-show");
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
});


// feedback show

var feedback = document.querySelector(".button-write");
var popupfeedback = document.querySelector(".modal-feedback");
var closefeedback = popupfeedback.querySelector(".button-close");
var loginfeedback = popupfeedback.querySelector(".login-feedback");
var loginemail = popupfeedback.querySelector(".email-feedback");
var loginform = popupfeedback.querySelector(".feedback-form");
var buttonfeed =popupfeedback.querySelector(".feedback-button");

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
    popupfeedback.classList.remove("modal-error");
    popupfeedback.offsetWidth = popupfeedback.offsetWidth;
    popupfeedback.classList.add("modal-error");
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


searchForm = document.querySelector(".form-search");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
};

// login form
let loginForm = document.querySelector(".login-form-container");
let registerForm = document.querySelector(".rigester-form-container");
let forgetForm = document.querySelector(".foregt-form-container");

document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
};

document.querySelector("#close-login-btn").onclick = () => {
  loginForm.classList.remove("active");
};

document.querySelector("#close-reg-btn").onclick = () => {
  registerForm.classList.remove("active");
  loginForm.classList.remove("active");
};

document.querySelector("#close-foregt-btn").onclick = () => {
  registerForm.classList.remove("active");
  loginForm.classList.remove("active");
  forgetForm.classList.remove("active");
};
document.querySelector("#back-btn").onclick = () => {
  registerForm.classList.remove("active");
  forgetForm.classList.remove("active");
};

document.querySelector("#log-btn").onclick = () => {
  registerForm.classList.remove("active");
  loginForm.classList.add("active");
};

document.querySelector("#register-btn").onclick = () => {
  registerForm.classList.add("active");
};

document.querySelector("#forget-btn").onclick = () => {
  forgetForm.classList.add("active");
};

// end login form

window.onscroll = () => {
  searchForm.classList.remove("active");

  if (window.scrollY > 80) {
    document.querySelector(".header .header-2").classList.add("active");
  } else {
    document.querySelector(".header .header-2").classList.remove("active");
  }
};

window.onload = () => {
  if (window.scrollY > 80) {
    document.querySelector(".header .header-2").classList.add("active");
  } else {
    document.querySelector(".header .header-2").classList.remove("active");
  }

  // loader();
  fadeOut();
};

// loader function
function loader() {
  document.querySelector(".loader-container").classList.add("active");
}

function fadeOut() {
  setTimeout(loader, 3000);
}

// custome swiper for stand  js
var swiper = new Swiper(".book-slider", {
  loop: true,
  centerdSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// custome swiper for feature book js
var swiper = new Swiper(".featured-slider", {
  spaceBetween: 10,
  loop: true,
  centerdSlides: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

// custum slide for new arrivals
var swiper = new Swiper(".arrivals-slider", {
  spaceBetween: 10,
  loop: true,
  centerdSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// custum slide for reviws
var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  centerdSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// custum slide for reviws
var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  centerdSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// dropdown

document.querySelector("#drop").onclick = () => {
  document.querySelector(".drop-content").classList.toggle("active");
};

document.querySelector("#big-drop").onclick = () => {
  document.querySelector(".dropdown").classList.toggle("active");
  document.querySelector(".box-icon").classList.toggle("active");
};

// profile doropdown

function profileDown() {
  document.querySelector(".profile-dropdowm").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropClick")) {
    var dropdowns = document.querySelector(".profile-dropdowm");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

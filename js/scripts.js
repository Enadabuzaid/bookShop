searchForm = document.querySelector('.form-search');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

// login form
    let loginForm = document.querySelector('.login-form-container');
    document.querySelector('#login-btn').onclick = () => {
        loginForm.classList.toggle('active');
    }

    document.querySelector('#close-login-btn').onclick = () => {
        loginForm.classList.remove('active');
    }
// end login form

window.onscroll = () =>{
    searchForm.classList.remove('active');

    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }
}


window.onload = () =>{
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }

    // loader();
    fadeOut();
}

// loader function
function loader(){
  document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
  setTimeout(loader,3000);
}

// custome swiper for stand  js 
var swiper = new Swiper(".book-slider", {
    loop:true,
    centerdSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
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
    spaceBetween:10,
    loop:true,
    centerdSlides:true,
    autoplay:{
        delay:4500,
        disableOnInteraction:false,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",

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
    spaceBetween:10,
    loop:true,
    centerdSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
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
      spaceBetween:10,
      grabCursor:true,
      loop:true,
      centerdSlides:true,
      autoplay:{
          delay:9500,
          disableOnInteraction:false,
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
  spaceBetween:10,
  grabCursor:true,
  loop:true,
  centerdSlides:true,
  navigation:{
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev",

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
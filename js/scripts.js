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
}

// custome swiper js 
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
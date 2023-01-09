let searchform=document.querySelector(".search-form");


document.querySelector("#searchbtn").onclick= () =>{
    searchform.classList.toggle('active');
    shopping_cart.classList.remove('active');
    form.classList.remove('active');
    navbar.classList.remove('active');
    
}


let shopping_cart=document.querySelector(".shopping-cart");


document.querySelector("#cartbtn").onclick= () =>{
    shopping_cart.classList.toggle('active');
    searchform.classList.remove('active');
    form.classList.remove('active');
    navbar.classList.remove('active');
    
}


let form=document.querySelector(".loginform");


document.querySelector("#loginbtn").onclick= () =>{
    form.classList.toggle('active');
    searchform.classList.remove('active');
    shopping_cart.classList.remove('active');
    navbar.classList.remove('active');
    
}

let navbar=document.querySelector(".navbar");


document.querySelector("#menubtn").onclick= () =>{
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
    shopping_cart.classList.remove('active');
    form.classList.remove('active');
    
}

window.onscroll= () =>{
    
    searchform.classList.remove('active');
    shopping_cart.classList.remove('active');
    form.classList.remove('active');
    navbar.classList.remove('active');
    
}


var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});









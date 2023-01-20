
window.addEventListener("scroll", function () {
    let nav = document.querySelector(".navbar");
    nav.classList.toggle("tranz", window.scrollY > 100);
    nav.classList.toggle("fix", window.scrollY > 150);
}) 

// //////////////////



$("#slider_1").owlCarousel({
    loop:true,
    margin: 5,
    navText:[`<i class="fa-solid fa-chevron-left"></i>`,`<i class="fa-solid fa-chevron-right"></i>`],
    autoplay: true,
    smartSpeed: 300,
    dots:false,
    animateIn:'fadeIn',
    animateOut: 'fadeOut',
    paginationSpeed:800,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
         1100:{
            items:3
        },
        1200:{
            items:4
        }
    }
})
// /////////////////
$("#slider_2").owlCarousel({
    loop:true,
    margin: 5,
    nav:false,
    autoplay: true,
    smartSpeed: 300,
    dots:true,
    paginationSpeed:800,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
         1100:{
            items:1
        },
        1200:{
            items:1
        }
    }
})
// /////////////////////////////////////
let heart = document.getElementById("heart");

heart.addEventListener("click", function () {
    heart.classList.toggle("onclick-heart");
})
/////////////////////



  let range = document.getElementById("formControlRange");

range.addEventListener("mousemove", function () {

    let label_range = document.getElementById("label_range");
    label_range.innerHTML = range.value;
})

// ///////////////////////////////////////////


window.addEventListener("scroll" , function () {
    let scrollUp = document.querySelector(".scroll_up");
    scrollUp.classList.toggle("scroll_transition", window.scrollY > 150);
    scrollUp.classList.toggle("show_scroll", window.scrollY > 200)
})
    let scrollUp = document.querySelector(".scroll_up");

scrollUp.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    })
})
//////////////////////////
window.addEventListener("load", function () {
    let loading = document.getElementById("loading");
    document.body.style.overflow = "hidden";
    
    setTimeout(function () {
        loading.style.display = "none";
        document.body.style.overflow = "auto";
    },1000);

})
// /////////////////////
const swiper1= new Swiper('.swiper1',{
    slidesPerView:4,
    slidesPerGroup:1,
    centeredSlides:true,
   
  
});
const swiper2 = new Swiper('.swiper2',{
    
    breakpoints:{
        1452:{
            slidesPerView:4,


        },
        768:{
            slidesPerView:2.5,


        },
    }
    

});
const swiper3 = new Swiper('.swiper3',{
    slidesPerView:4,
    breakpoints:{
        1452:{
            slidesPerView:4,


        },
        768:{
            slidesPerView:2.5,


        },
    }
    

})
const swiper4 = new Swiper('.hero__swiper',{
    slidesPerView:1,
    allowTouchMove: false,
    effect: "cards",
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    

})
const burger = document.querySelector('.header__burger');
if(burger){
    const menuBody=document.querySelector('.header__bar');
    burger.addEventListener("click", function(e){
        document.body.classList.toggle('_lock');
        burger.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}
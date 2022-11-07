const swiper1= new Swiper('.swiper1',{
    slidesPerView:4,
    slidesPerGroup:1,
    centeredSlides:true,
   
  
});
const swiper2 = new Swiper('.swiper2',{
    slidesPerView:4,
    

});
const swiper3 = new Swiper('.swiper3',{
    slidesPerView:4,
    

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
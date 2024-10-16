document.addEventListener('DOMContentLoaded',function(){
    document.querySelectorAll('.left-list__btn').forEach(function(tabsBtn){
        tabsBtn.addEventListener('click', function(event){
            const path = event.currentTarget.dataset.path
            
            document.querySelectorAll('.work__content-item').forEach(function(tabconten) {
              tabconten.classList.remove('tab-content-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
        })
    })
    document.querySelector('#burgers').addEventListener('click',function (){
        document.querySelector('#menus').classList.toggle('menu-active') 
    });
    document.querySelector('.close-menu').addEventListener('click',function(){
        document.querySelector('#menus').classList.remove('menu-active')
    })
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
      document.querySelector('.search__icon').addEventListener('click',function(){
      
        document.querySelector('.search-nav').classList.add('nav-active')
      })
               
      
     
})


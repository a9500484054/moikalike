document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('#moikalike-menu-btn');
    const menu = document.querySelector('#moikalike-menu');
    
    menuBtn.addEventListener('click', function() { 
        menuBtn.classList.toggle('menu-btn--active')
        menu.classList.toggle('moikalike-heder__nav-wrap--active')
    })
    
    
    const itemBtnOne = document.querySelector('#item-btn-one');
    const itemContentOne = document.querySelector('#item-content-one');
    const iconArrowOne = document.querySelector('.icon-arrow-one');

    itemBtnOne.addEventListener('click', function() {
        itemContentOne.classList.toggle('item-content-one--active')
        iconArrowOne.classList.toggle('icon-arrow--active')
    })

    const itemBtnTwo = document.querySelector('#item-btn-two');
    const itemContentTwo = document.querySelector('#item-content-two');
    const iconArrowTwo = document.querySelector('.icon-arrow-two');
    
    itemBtnTwo.addEventListener('click', function() {
        itemContentTwo.classList.toggle('item-content-two--active')
        iconArrowTwo.classList.toggle('icon-arrow--active')
    })
    
    const hiddenBtn = document.querySelector('.hidden-btn');
    const itemContentWrap = document.querySelector('.item-content-wrap');
    const hiddenBtnOpen = document.querySelector('.hidden-btn-open');
    const hiddenBtnClose = document.querySelector('.hidden-btn-close');
    
    hiddenBtn.addEventListener('click', function() {
        itemContentWrap.classList.toggle('item-content-wrap--active')
        hiddenBtnOpen.classList.toggle('hidden-btn--active')
        hiddenBtnClose.classList.toggle('hidden-btn--active')

    })

});


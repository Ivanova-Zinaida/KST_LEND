var link=document.querySelector('.call-back__toggle');
var modolCallBack=document.querySelector('.modal-call-back');



var openMenu=document.querySelector('.site-list__item--close');
var closeMenu=document.querySelector('.site-list__item--open');

var MenuContainer=document.querySelector('.main-nav');

openMenu.addEventListener('click', function(event){
    event.preventDefault();
    MenuContainer.classList.remove('main-nav--close');
    MenuContainer.classList.add('main-nav--open');
    
});
closeMenu.addEventListener('click', function(event){
    event.preventDefault();
    MenuContainer.classList.add('main-nav--close');
    MenuContainer.classList.remove('main-nav--open');
    
});



link.addEventListener('click', function(event){
    event.preventDefault();
    
    modolCallBack.classList.add('modal-show');
});
 modolCallBack.addEventListener('click', function(event){
      if(event.target===this){
          modolCallBack.classList.remove('modal-show');
      }
 });



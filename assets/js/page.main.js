console.log('main-start');

//--- scroll events
var intro = document.querySelector('.section-intro .section-image img');
 
var banner_top = document.querySelector('.banner-tutorial').offsetTop;
var banner_img = document.querySelector('.banner-tutorial .bg-image img');

document.addEventListener('scroll', function() {
 	var scrollTop = document.documentElement.scrollTop;
 	intro.style.top = -scrollTop/4 +'px';

 	banner_img.style.top = (((scrollTop-banner_top)/5)+126) + 'px';
});


	
//--- Section : XP
var li = document.querySelectorAll('.xp-button-container li');
var contents_li = document.querySelectorAll('.xp-contents li');

function li_click(idx){
  li[idx].onclick = function(){
    
    if(li[idx].getAttribute('class')!='selected'){
      for(var i=0;i<li.length;i++){
        li[i].removeAttribute('class');
        contents_li[i].removeAttribute('class');
      }
      li[idx].setAttribute('class', 'selected');  
      contents_li[idx].setAttribute('class', 'active');  
    } else{
      li[idx].removeAttribute('class');
      contents_li[idx].removeAttribute('class');  
    }
    
  };
}

for(var i=0; i<li.length; i++){
  li_click(i);
}


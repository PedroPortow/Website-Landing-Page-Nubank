'use strict';


const header = document.querySelector('header');
const secondPage = document.querySelector('.secondPage');
const nav = document.querySelector('nav');
const main = document.querySelector('.main')
const navHeight = nav.getBoundingClientRect().height;


///////////////////////////////////////////////////////////
////////// STICKY NAV ////////////////////////////////////
const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if(!entry.isIntersecting){
        nav.classList.add('sticky')
  }
  else{
      nav.classList.remove('sticky')
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
//   rootMargin: `-${navHeight}px`,
});

headerObserver.observe(main);


///////////////////////////////////////////////////////////
////////// SLIDE TO ////////////////////////////////////

const slideTo = document.querySelector('.slideTo')
const celphone = document.querySelector('.hey')

slideTo.addEventListener('click', function(){
    secondPage.scrollIntoView({behavior: 'smooth'})
})



///////////////////////////////////////////////////////////
////////// SLIDE UP ////////////////////////////////////

const slideUpAll = document.querySelectorAll('.slideUp');

const revealSection = function(entries, observer) {
    const[entry] = entries;
   

    if(!entry.isIntersecting) return;
    entry.target.classList.remove('sec-hidden');
}

const sectionObserver = new IntersectionObserver (revealSection, {
    root: null,
    threshold: 0.15,
});

slideUpAll.forEach(function(section){
    sectionObserver.observe(section);
    section.classList.add('sec-hidden')
});

////////////////////////////////////////////////////////////////
////////// SLIDE FROM RIGHT TO LEFT ////////////////////////////

const slideRL = document.querySelectorAll('.slideRL');

const revealSectionRL = function(entries, observer) {
    const[entry] = entries;
   

    if(!entry.isIntersecting) return;
    entry.target.classList.remove('sec-hiddenXL');
}

const sectionObserverRL = new IntersectionObserver (revealSectionRL, {
    root: null,
    threshold: 0.15,
});

slideRL.forEach(function(section){
    sectionObserverRL.observe(section);
    section.classList.add('sec-hiddenXL')
});



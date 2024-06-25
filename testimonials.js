let testimonials = document.getElementsByClassName('client');

window.addEventListener('scroll', function() {
    let scroll = window.scrollY;

    if (scroll > 750){
        testimonials[0].style.animationName = 'slide-in';
        testimonials[0].style.marginLeft = '10%';

    }

    if (scroll > 1100){
        testimonials[1].style.animationName = 'slide-in';
        testimonials[1].style.marginLeft = '10%';
    }
    
    if (scroll > 1450){
        testimonials[2].style.animationName = 'slide-in';
        testimonials[2].style.marginLeft = '10%';
    }
});

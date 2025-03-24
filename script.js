// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");



menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


//Adding motions

const sr = ScrollReveal ({
    distance: '65px',
    duration:2600,
    delay: 450,
    reset: true
});

//hero section Motions
sr.reveal('.section-detail',{delay:200, origin:'top'});
sr.reveal('.heroimg',{delay:450, origin:'right'});

//About page Motions
sr.reveal('.about-image',{delay:450, origin:'left'});
sr.reveal('.title',{delay:450, origin:'right'});
sr.reveal('.about-description',{delay:550, origin:'right'});
sr.reveal('.social-link-list',{delay:650, origin:'right'});


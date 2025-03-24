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

sr.reveal('.section-detail',{delay:200, origin:'top'});
sr.reveal('.heroimg',{delay:450, origin:'right'});

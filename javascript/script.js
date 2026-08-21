window.addEventListener('scroll', function () {

    var arrow = document.getElementById('arrow');
    var nav = document.getElementById('navbar');
    if (window.scrollY > 100) {
        nav.classList.add('navscroll');
        nav.classList.remove('navOrig');
        arrow.classList.add('opacity');
        arrow.classList.remove('non-opacity');

    }
    

    else {
        nav.classList.remove('navscroll');
        nav.classList.add('navOrig');
        arrow.classList.remove('opacity');
        arrow.classList.add('non-opacity');

    }
})



document.addEventListener("DOMContentLoaded", () => {
    let links = document.querySelectorAll("#list .nav-link");

    links.forEach((link) => {
        link.addEventListener("click", function () {

            links.forEach((l) => l.classList.remove("active"));

            this.classList.add("active");
        });
    });
});


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
    const top = window.scrollY;
    const offset = section.offsetTop - 120;
    const height = section.offsetHeight;

    if (top >= offset && top < offset + height) {
        currentSection = section.id;
    }
});

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
        link.classList.add("active");
        }
    });
    });











let filterationItems = document.querySelector('.list');
let fileteImages = document.querySelectorAll('.parts');



window.addEventListener('load', () => {
    filterationItems.addEventListener('click', (selectedItem) => {
        if (selectedItem.target.classList.contains('nav-link')) {

            document.querySelector('.menu-active').classList.remove('menu-active');
            selectedItem.target.classList.add('menu-active');

            let filterName = selectedItem.target.getAttribute('data-name');
            fileteImages.forEach((image) => {

                let filterImages = image.getAttribute('data-name');
                if ((filterImages == filterName) || filterName == 'all') {
                    image.style.display = 'block';
                }
                else {
                    image.style.display = 'none';
                }
            })



        }
    })
})
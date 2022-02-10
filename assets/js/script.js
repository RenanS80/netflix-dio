// Navbar Scroll
(function () {
    let menu = document.getElementById('menu');
    let navItem = document.querySelectorAll('.nav-item');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            menu.classList.add('fixedMenu');

            for (let i = 0; i < navItem.length; ++i) {
                navItem[i].classList.add('gray-color');
            }
        }
        else {
            menu.classList.remove('fixedMenu');

            for (let i = 0; i < navItem.length; ++i) {
                navItem[i].classList.remove('gray-color');
            }
        }
    });
})();


// Carrossel Filmes
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    responsive: {
        0: {
            items: 1.2
        },
        420: {
            items: 2
        },
        600: {
            items: 3
        },
        800: {
            items: 4
        },
        1000: {
            items: 5
        },
        1200: {
            items: 6
        },
        1400: {
            items: 7
        },
        1900: {
            items: 9
        }
    }
})



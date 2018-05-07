// Map
function initMap() {
    var chvenue = {lat: 35.158513, lng: -80.888407};
    var fakeCenter = {lat: 35.130522, lng: -80.5221028};
    
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 9,
      center: fakeCenter
    });

    var marker = new google.maps.Marker({
        position: chvenue,
        map: map,
        icon: "assets/wayfairer.png",
        title: "CH Venue"
    });
}

// Menu
let enable = false;
let navOverflow = document.getElementById("navOverflow");

function enableMenu() {    
    if (window.innerWidth <= 1024) {
        enable = true;
        navOverflow.style.overflow = "hidden";
    } else {
        enable = false;
        navOverflow.style.overflow = "inherit";
    }
}

function expandMenu() {
    let i, menu;
    let expanded = false;            
    menu = document.getElementById("menu");

    if (enable) {
        if (!this.expanded) {
        menu.className = "expanded";
        this.expanded = true;

        // Adjust overflow property on nav
        navOverflow.style.overflow = "inherit";

        } else {
            menu.className = menu.className.replace("expanded", "");
            this.expanded = false;

            // Adjust overflow property on nav
            navOverflow.style.overflow = "hidden";
        }
    } 
}

// Tabs
function openTab(evt, tabName) {
    let i, tab, imgCarousel;

    imgCarousel = document.getElementsByClassName("imgCarousel");
    for (i = 0; i < imgCarousel.length; i++) {
        imgCarousel[i].style.display = "none";
    }

    tab = document.getElementsByClassName("tab");
    for (i = 0; i < tab.length; i++) {
        tab[i].className = tab[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

    resetCarousel();
}

// Carousel
var carousel = document.querySelectorAll('.imgCarousel');
var slideAmount = 0;
var carouselWidth = 0;
var carouselSteps = 0;

function rotateCarousel(direction) {            
    for (let i = 0; i < carousel.length; i++) {
        if (carousel[i].style.display === 'block') {
            var slides = carousel[i].querySelectorAll('.imgCarousel img');

            // Count all the slides
            [].forEach.call(slides, function(slide) {
                slideAmount++;
                carouselWidth += 300;
                carousel[i].style.width = carouselWidth+"px";
            });

            if (direction === 'right') {
                if (carouselSteps <= 4) {
                  carouselSteps++;
                  moveCarousel();
                }
            }

            if (direction === 'left') {
                if(carouselSteps > 0) {
                  carouselSteps--;
                  moveCarousel();
                }
            }

            // move carousel based on click
            function moveCarousel() {
                carousel[i].style.transform = "translateX(-"+205*carouselSteps+"px)";
            }
        }
    }
};

function resetCarousel() {
    slideAmount = 0;
    carouselWidth = 0;
    carouselSteps = 0;

    console.log(slideAmount);
}
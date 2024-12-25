/* Up button*/
document.addEventListener("DOMContentLoaded", function () {
    // Get the "UP" link element
    var scrollToTopBtn = document.getElementById("scroll-to-top");
  
    // Add a click event listener to the link
    scrollToTopBtn.addEventListener("click", function (event) {
      event.preventDefault();
  
      // Scroll to the top of the page with smooth behavior
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  
    // Show/hide the "UP" link based on the scroll position
    window.addEventListener("scroll", function () {
      // Show the "UP" link when scrolling down, hide it when at the top
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    });
  });
  
    /*End Up Scroll*/

//Navigation Functionality
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', function() {
            this.querySelector('.dropdown-content').style.display = 'block';
        });

        dropdown.addEventListener('mouseleave', function() {
            this.querySelector('.dropdown-content').style.display = 'none';
        });
    });
});

/* Hero section */
// Hero Slider
const heroSlider = document.querySelector('.hero-slider');
const slides = heroSlider.querySelectorAll('.slide');
const prevBtn = heroSlider.querySelector('.prev');
const nextBtn = heroSlider.querySelector('.next');
const progressBar = heroSlider.querySelector('.progress');

let currentSlide = 0;
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    progressBar.style.width = `${((index + 1) / totalSlides) * 100}%`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Auto-rotate slides
setInterval(nextSlide, 5000);

/* End Hero Section */

// Counter animation
const counters = document.querySelectorAll('.count');
const speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});

/* Video Section */
// Select elements
const playButton = document.getElementById("play-button");
const popupOverlay = document.getElementById("popup-overlay");
const closeButton = document.getElementById("close-button");
const youtubeVideo = document.getElementById("youtube-video");

// YouTube video link
const videoURL = "https://www.youtube.com/embed/2dX-7SWYcg8?autoplay=1";

// Show popup and set YouTube video source
playButton.addEventListener("click", () => {
    youtubeVideo.src = videoURL;
    popupOverlay.style.display = "flex";
});

// Close popup and stop video
closeButton.addEventListener("click", () => {
    youtubeVideo.src = "";
    popupOverlay.style.display = "none";
});

/* End of Video Section */

// Partners Slider
const slider = document.querySelector('.slider');
const Slides = Array.from(document.querySelectorAll('.Slide')); // Fixed class name inconsistency
const slideWidth = slides[0].offsetWidth + 40; // Including padding
let index = 0;

// Clone slides to create an infinite loop
function cloneSlides() {
  slides.forEach((slide) => {
    const clone = slide.cloneNode(true);
    slider.appendChild(clone);
  });
}

// Move the slider to the next position
function moveSlider() {
  index++;
  slider.style.transform = `translateX(-${index * slideWidth}px)`;

  // Reset the slider position when reaching the end
  if (index >= slides.length) {
    setTimeout(() => {
      slider.style.transition = 'none';
      slider.style.transform = 'translateX(0)';
      index = 0;
      setTimeout(() => {
        slider.style.transition = 'transform 0.5s ease-in-out';
      }, 50);
    }, 500); // Match this duration with the CSS transition time
  }
}

// Initialize slider
cloneSlides();
setInterval(moveSlider, 8000); // Slower interval for the slider

/* h2 Functionality */
document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animate');
          }
      });
  }, {
      threshold: 0.1
  });

  // Observe all h2 elements
  document.querySelectorAll('h2').forEach(h2 => {
      observer.observe(h2);
  });
});

/* End h2 Functionality */

/* Horizontal Functionality */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('horizontal-square')) {
                entry.target.setAttribute('data-text', entry.target.textContent.trim());
                entry.target.innerHTML = `<span>${entry.target.textContent}</span>`;
            }
        }
    });
}, {
    threshold: 0.1
});

// Observe all horizontal squares
document.querySelectorAll('.horizontal-square').forEach(square => {
    observer.observe(square);
});

/* End horizontal functionality */
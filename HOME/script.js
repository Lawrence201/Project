let slideIndex = 1;
let autoSlideInterval = setInterval(autoSlide, 5000); // Automatically move to next slide every 5 seconds

showSlides(slideIndex);

function plusSlides(n) {
    clearInterval(autoSlideInterval); // Stop auto-sliding when manually moving
    showSlides(slideIndex += n, n);
    autoSlideInterval = setInterval(autoSlide, 5000); // Restart the auto-slide after manual slide
}

function currentSlide(n) {
    clearInterval(autoSlideInterval); // Stop auto-sliding when manually moving
    showSlides(slideIndex = n, 0); // 0 indicates no direction (direct jump)
    autoSlideInterval = setInterval(autoSlide, 5000); // Restart the auto-slide after manual slide
}

function autoSlide() {
    plusSlides(1); // Automatically move to the next slide
}

function showSlides(n, direction) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    // Ensure the slideIndex is within bounds
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides initially
    }
    
    // Calculate current slide and the next one based on direction
    let currentSlide = slides[slideIndex - 1]; // 1-based index for slideIndex
    let nextSlide;

    // Ensure the nextSlide is correctly calculated
    if (direction > 0) { // Moving forward (next)
        nextSlide = slides[(slideIndex % slides.length)];
    } else if (direction < 0) { // Moving backward (prev)
        nextSlide = slides[(slideIndex - 2 + slides.length) % slides.length];
    } else {
        nextSlide = currentSlide; // If no direction (direct jump)
    }
    
    // Display both the current and next slides
    currentSlide.style.display = "block";
    nextSlide.style.display = "block";
    
    // Set the position of the slides and initiate the transition
    if (direction > 0) { // Moving forward (next)
        currentSlide.style.left = "0";   // Start the current slide from center
        nextSlide.style.left = "100%";   // Set the next slide to the right
    } else if (direction < 0) { // Moving backward (prev)
        currentSlide.style.left = "0";   // Start the current slide from center
        nextSlide.style.left = "-100%";  // Set the next slide to the left
    }

    // Delay the sliding effect for smooth transition
    setTimeout(() => {
        currentSlide.style.left = (direction > 0) ? "-100%" : "100%"; // Move current slide out
        nextSlide.style.left = "0"; // Bring the next slide in
    }, 20);
    
    // Update dots to reflect the active slide
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex - 1].className += " active";
}

document.addEventListener("DOMContentLoaded", () => {
    const heartIcon = document.getElementById("heartIcon");
    const prayerForm = document.getElementById("prayerForm");

    heartIcon.addEventListener("click", () => {
        prayerForm.classList.toggle("show");
    });
});


//Ministries sliding
const slider = document.querySelector('.slider');
let ministries = document.querySelectorAll('.ministry');

// Duplicate ministries for continuous scrolling
slider.innerHTML += slider.innerHTML; // Double the content of the slider

let scrollSpeed = 1.0; // Adjusted scroll speed (higher value = faster)
let currentPosition = 0;
let isPaused = false; // Variable to control pause state

// Continuously scroll ministries to the right
function scrollMinistries() {
    function animateScroll() {
        if (!isPaused) {
            currentPosition -= scrollSpeed; // Move left continuously
        }

        // Reset position to create an infinite loop effect
        if (Math.abs(currentPosition) >= slider.scrollWidth / 2) {
            currentPosition = 0; // Reset position when halfway through
        }

        slider.style.transform = `translateX(${currentPosition}px)`; // Apply the movement in pixels
        requestAnimationFrame(animateScroll); // Keep the loop going infinitely
    }

    animateScroll(); // Start the animation
}

// Event listeners to pause scrolling when hovering on the slider or any ministry
slider.addEventListener('mouseenter', () => {
    isPaused = true; // Pause the scrolling when hovering over the slider
});

slider.addEventListener('mouseleave', () => {
    isPaused = false; // Resume the scrolling when the mouse leaves the slider
});

scrollMinistries(); // Start the continuous scroll



// Show the surprise message when the page loads
window.onload = function() {
    document.getElementById('footer-surprise').style.display = 'block';
};

// Close the surprise message when the close button is clicked
document.getElementById('close-surprise').onclick = function() {
    document.getElementById('footer-surprise').style.display = 'none';
};



//Event container slideshow
document.addEventListener('DOMContentLoaded', () => {
    const events = document.querySelectorAll('.event-container');
    const eventWrapper = document.querySelector('.events-wrapper');
    let currentIndex = 0;
    const displayCount = 2; // Number of events to show at a time
    let slideInterval; // To store the interval reference

    // Function to display the events
    function showEvents() {
        events.forEach((event, index) => {
            event.style.display = 'none';
            if (index >= currentIndex && index < currentIndex + displayCount) {
                event.style.display = 'flex';
            }
        });
    }

    // Function to move to the next set of events
    function nextEvents() {
        currentIndex = (currentIndex + displayCount) % events.length;
        showEvents();
    }

    // Function to start the sliding interval
    function startSliding() {
        slideInterval = setInterval(nextEvents, 3000);
    }

    // Function to stop the sliding interval
    function stopSliding() {
        clearInterval(slideInterval);
    }

    // Initial display of events
    showEvents();

    // Start auto-sliding
    startSliding();

    // Stop sliding on mouse enter and resume on mouse leave
    eventWrapper.addEventListener('mouseenter', stopSliding);
    eventWrapper.addEventListener('mouseleave', startSliding);
});




document.addEventListener("DOMContentLoaded", function() {
    const svg = document.querySelector(".zegen-hero-overlay svg");
    if (svg) {
        svg.classList.add("show"); // Adds the 'show' class to trigger animation
        console.log("SVG found and show class added.");
    } else {
        console.log("SVG not found.");
    }
});







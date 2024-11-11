let slideIndex = 1;

function openModal() {
    document.getElementById("myModal").style.display = "block";
    showSlides(slideIndex);
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

function openModal() {
    document.getElementById("myModal").style.display = "block";
    document.body.classList.add("no-scroll"); // Add this line
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
    document.body.classList.remove("no-scroll"); // Add this line
}
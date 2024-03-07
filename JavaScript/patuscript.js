let currentIndex = 0;

function showSlide(index) {
    const wrapper = document.getElementById("carouselWrapper");
    const totalItems = document.querySelectorAll(".carousel-item").length;

    if (index >= totalItems) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalItems - 1;
    } else {
        currentIndex = index;
    }

    const translateValue = -currentIndex * 100 + "%";
    wrapper.style.transform = `translateX(${translateValue})`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Optional: Auto-play the carousel
// setInterval(nextSlide, 3000); // Change the interval as needed
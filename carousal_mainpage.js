let currentIndex = 0;
  const container = document.getElementById('carouselContainer');
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;
  let intervalId;

  function startCarousel() {
    intervalId = setInterval(nextSlide, 5000); // Change 3000 to the desired interval in milliseconds (e.g., 5000 for 5 seconds)
  }

  function stopCarousel() {
    clearInterval(intervalId);
  }

  function nextSlide() {
    if (currentIndex < totalItems - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  }

  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalItems - 1;
    }
    updateCarousel();
  }

  function updateCarousel() {
    const newPosition = -currentIndex * 100 + '%';
    container.style.transform = 'translateX(' + newPosition + ')';
  }

  // Start the carousel automatically when the page loads
  startCarousel();
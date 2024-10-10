const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Function to update active link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 70; // Adjust for navbar height
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});




const items = document.getElementById('carousel-items');
            const totalItems = items.children.length;
            let currentIndex = 0;
            const dots = document.querySelectorAll('.dot');
        
            // Update carousel and active dot
            function updateCarousel() {
                items.style.transform = `translateX(-${currentIndex * 100}%)`;
                dots.forEach(dot => dot.classList.remove('bg-gray-900'));
                dots[currentIndex].classList.add('bg-gray-900');
            }
        
            // Next and Prev Button functionality
            document.getElementById('next').addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % totalItems;
                updateCarousel();
            });
        
            document.getElementById('prev').addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + totalItems) % totalItems;
                updateCarousel();
            });
        
            // Dots navigation
            dots.forEach(dot => {
                dot.addEventListener('click', (e) => {
                    currentIndex = parseInt(e.target.dataset.slide);
                    updateCarousel();
                });
            });
        
            // Initialize the first dot as active
            updateCarousel();

            function animateCounter(id, start, end, duration, stepSize = 1) {
                let obj = document.getElementById(id),
                  current = start,
                  increment = stepSize,
                  range = end - start,
                  step = Math.abs(Math.floor(duration / (range / increment)));
            
                let timer = setInterval(() => {
                  current += increment;
                  if (current >= end) {
                    current = end;
                    clearInterval(timer);
                  }
                  obj.textContent = current.toLocaleString() + "+"; // Add commas to large numbers and append "+"
                }, step);
              }
            
              // Intersection Observer to trigger counters when the section is in view
              document.addEventListener("DOMContentLoaded", function () {
                const counterSection = document.getElementById('counter-section');
                let hasCounted = false; // Ensure counters run only once
            
                // Intersection observer options
                const observerOptions = {
                  root: null, // viewport
                  threshold: 0.3 // Trigger when 30% of the section is visible
                };
            
                const observer = new IntersectionObserver((entries, observer) => {
                  entries.forEach(entry => {
                    if (entry.isIntersecting && !hasCounted) {
                      hasCounted = true;
            
                      // Start counters when the section becomes visible
                      const totalDuration = 2500; // Total duration for all counters (in milliseconds)
            
                      animateCounter('total-events', 0, 150, totalDuration);            // Small numbers count one by one
                      animateCounter('total-money', 0, 500000, totalDuration, 10000);   // Count in 10,000s
                      animateCounter('people-helped', 0, 20000, totalDuration, 1000);   // Count in 1,000s
                      animateCounter('years-service', 0, 10, totalDuration);            // Small numbers count one by one
                      
                      observer.unobserve(counterSection); // Stop observing once triggered
                    }
                  });
                }, observerOptions);
            
                observer.observe(counterSection); // Start observing the counter section
              });
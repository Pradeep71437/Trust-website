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
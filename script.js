function scrollLeft() {
    const container = document.getElementById('blurContainer');
    container.scrollBy({
        left: -150,
        behavior: 'smooth'
    });
}

function scrollRight() {
    const container = document.getElementById('blurContainer');
    container.scrollBy({
        left: 150,
        behavior: 'smooth'
    });
}

// Header hide/show on scroll
let lastScrollTop = 0;
const headerSection = document.getElementById('headerSection');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down - hide header
        headerSection.classList.add('hidden');
    } else {
        // Scrolling up - show header
        headerSection.classList.remove('hidden');
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);
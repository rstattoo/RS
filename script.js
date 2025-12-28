document.addEventListener('DOMContentLoaded', () => {
    const studioBtn = document.getElementById('studio-btn');
    const galleryBtn = document.getElementById('gallery-btn');

    // Function to toggle visibility of overlay boxes
    function toggleOverlay(target) {
        const overlays = document.querySelectorAll('.overlay, .content-box');
        
        if (target === 'studio') {
            document.querySelector('.studio').classList.toggle('active');
        } else if (target === 'gallery') {
            document.querySelector('.gallery').classList.toggle('active');
        }
    }

    // Event listeners for menu buttons
    studioBtn.addEventListener('click', () => toggleOverlay('studio'));
    galleryBtn.addEventListener('click', () => toggleOverlay('gallery'));

    // Close overlay when clicking outside
    overlays.forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (!e.target.closest('.content-box')) {
                overlay.classList.remove('active');
            }
        });
    });

    // Adjust content box positioning based on button size and spacing
    const menuSpacing = 20; // pixels between buttons
    const viewportWidth = window.innerWidth;

    function updateMenuLayout() {
        studioBtn.style.marginRight = `${menuSpacing}px`;
        galleryBtn.style.marginLeft = `${menuSpacing}px`;

        if (viewportWidth < 768) { // Adjust for mobile view
            document.body.classList.add('mobile-view');
        } else {
            document.body.classList.remove('mobile-view');
        }
    }

    updateMenuLayout();
    
    window.addEventListener('resize', () => {
        updateMenuLayout();
        
        if (window.innerWidth < 768) { // Hide studio info on mobile
            document.querySelector('.studio').classList.remove('active');
        }
    });
});

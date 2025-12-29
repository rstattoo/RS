/* ----------------------------------------------------------
   Utility functions – hide/show the info boxes
---------------------------------------------------------- */
const studioBox = document.getElementById('studio-box');
const galleryBox = document.getElementById('gallery-box');

function hideAll() {
    studioBox.style.display = 'none';
    galleryBox.style.display = 'none';
}

function toggleBox(box) {
    // If the box is already visible, just hide it
    if (box.style.display === 'block') {
        box.style.display = 'none';
    } else {
        hideAll();            // close any other open box first
        box.style.display = 'block';
    }
}

/* ----------------------------------------------------------
   Event listeners for the two menu buttons
---------------------------------------------------------- */
document.getElementById('studio-btn').addEventListener('click', e => {
    e.stopPropagation();          // prevent the body click handler from firing
    toggleBox(studioBox);
});

document.getElementById('gallery-btn').addEventListener('click', e => {
    e.stopPropagation();
    toggleBox(galleryBox);
});

/* ----------------------------------------------------------
   Close any open box when clicking anywhere else on the page
---------------------------------------------------------- */
document.body.addEventListener('click', () => {
    hideAll();
});

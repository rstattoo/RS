/* ----------------------------------
   Utility functions
---------------------------------- */
const infoBox = document.getElementById('info-box');
let currentTarget = null;

/* ----------------------------------
   Show content for the clicked button
---------------------------------- */
function openInfo(type) {
    // If another box is already open, close it first
    if (currentTarget && currentTarget !== type) {
        closeInfo();
    }

    // Example placeholder – replace with real data later
    const contents = {
        studio: '<h2>Studio</h2><p>Coming soon…</p>',
        gallery: '<h2>Gallery</h2><p>Gallery images will appear here.</p>'
    };

    infoBox.innerHTML = contents[type] || '';
    infoBox.style.display = 'block';
    currentTarget = type;
}

/* ----------------------------------
   Close the box
---------------------------------- */
function closeInfo() {
    infoBox.style.display = 'none';
    currentTarget = null;
}

/* ----------------------------------
   Event listeners
---------------------------------- */
// Menu buttons
document.querySelectorAll('.menu-btn').forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        const target = e.currentTarget.dataset.target; // studio or gallery
        if (currentTarget === target) {      // toggle behaviour
            closeInfo();
        } else {
            openInfo(target);
        }
    });
});

// Click anywhere to close
document.addEventListener('click', e => {
    if (!e.target.closest('.menu-btn') && !e.target.closest('#info-box')) {
        closeInfo();
    }
});

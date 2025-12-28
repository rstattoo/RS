/* --------------------------------------------------------------
   Grab DOM elements
-------------------------------------------------------------- */
const studioBtn = document.getElementById('studioBtn');
const galleryBtn = document.getElementById('galleryBtn');
const modal = document.getElementById('modal');

/* --------------------------------------------------------------
   Content to display – change these strings when you have data
-------------------------------------------------------------- */
const content = {
    STUDIO: `<h2>Studio</h2>
             <p>This is where the studio information will go.</p>`,

    GALLERY: `<h2>Gallery</h2>
              <p>Images will be displayed here once added.</p>`
};

/* --------------------------------------------------------------
   Utility functions
-------------------------------------------------------------- */
function openModal(type) {
    modal.innerHTML = content[type];
    modal.classList.remove('hidden');
}

function closeModal() {
    modal.classList.add('hidden');
}

/* --------------------------------------------------------------
   Event listeners
-------------------------------------------------------------- */
studioBtn.addEventListener('click', () => {
    if (!modal.classList.contains('hidden')) closeModal();
    openModal('STUDIO');
});

galleryBtn.addEventListener('click', () => {
    if (!modal.classList.contains('hidden')) closeModal();
    openModal('GALLERY');
});

/* Close modal when clicking anywhere outside it */
document.body.addEventListener('click', (e) => {
    // If click is on the modal itself, ignore
    if (e.target.closest('.modal') || e.target.closest('.menu-btn')) return;
    closeModal();
});

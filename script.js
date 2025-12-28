/* ---------- Helper to close any open box ----------
   It simply adds the 'hidden' class back */
function closeBox() {
    const box = document.getElementById('infoBox');
    if (!box.classList.contains('hidden')) {
        box.classList.add('hidden');
    }
}

/* ---------- Open the appropriate info box ----------
   `content` is the HTML string that will be shown inside the box */
function openBox(content) {
    const box = document.getElementById('infoBox');
    box.innerHTML = content;
    box.classList.remove('hidden');
}

/* ---------- Button click handlers ---------- */
document.getElementById('btnStudio').addEventListener('click', () => {
    closeBox(); // close any existing
    openBox('<h2>STUDIO</h2><p>Content for Studio will go here.</p>');
});

document.getElementById('btnGallery').addEventListener('click', () => {
    closeBox();
    openBox('<h2>GALLERY</h2><p>Images will be displayed here later.</p>');
});

/* ---------- Click anywhere to close the box ----------
   We stop propagation when clicking inside the box so it doesn\'t close immediately */
document.body.addEventListener('click', (e) => {
    if (!e.target.closest('.info-box')) {
        closeBox();
    }
});

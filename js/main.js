/* ==========================================================
   Helper – close all info boxes
========================================================= */
function closeAllBoxes() {
    document.querySelectorAll('.info-box').forEach(box => box.style.display = 'none');
}

/* ==========================================================
   Show specific info box
========================================================= */
function openBox(id) {
    const box = document.getElementById(`info-${id}`);
    if (box) {
        closeAllBoxes();               // ensures only one is visible
        box.style.display = 'block';
    }
}

/* ==========================================================
   Event listeners for menu buttons
========================================================= */
document.querySelectorAll('.menu-btn').forEach(btn => {
    btn.addEventListener('click', () => openBox(btn.dataset.target));
});

/* ==========================================================
   Click anywhere to close the open box
========================================================= */
window.addEventListener('click', (e) => {
    // if click is NOT on a menu button or inside an info box -> close
    if (!e.target.closest('.menu-btn') && !e.target.closest('.info-box')) {
        closeAllBoxes();
    }
});

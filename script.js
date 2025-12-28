/* ---------- Utility functions ---------- */
function createContent(text) {
    const div = document.createElement('div');
    div.className = 'content';
    div.innerHTML = `<p>${text}</p>`;
    return div;
}

/* ---------- Overlay logic ---------- */
const overlay = document.getElementById('overlay');

function showOverlay(content) {
    // Remove any previous content
    overlay.innerHTML = '';
    overlay.appendChild(createContent(content));
    overlay.classList.remove('hidden');
}

function hideOverlay() {
    overlay.classList.add('hidden');
}

/* ---------- Button event handlers ---------- */
document.getElementById('btn-studio').addEventListener('click', () => {
    showOverlay(`
        <h2>Studio</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Studio details go here.</p>
    `);
});

document.getElementById('btn-gallery').addEventListener('click', () => {
    showOverlay(`
        <h2>Gallery</h2>
        <p>Gallery will be populated here once you add images.</p>
    `);
});

/* ---------- Close overlay when clicking anywhere outside content ---------- */
overlay.addEventListener('click', hideOverlay);

/* ---------- Ensure only one overlay is open at a time ----------
   (the click handlers above automatically replace the old content) */


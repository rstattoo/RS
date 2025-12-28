// Grab elements
const studioBtn = document.getElementById('studioBtn');
const galleryBtn = document.getElementById('galleryBtn');
const content   = document.getElementById('content');

let currentPopup = null; // keeps track of the open popup

// Helper: create a simple popup element
function createPopup(html) {
    const div = document.createElement('div');
    div.className = 'popup';
    div.innerHTML = html;
    return div;
}

// Event handlers for each button
studioBtn.addEventListener('click', () => {
    togglePopup(
        '<h2>Studio</h2><p>Information about the studio will go here.</p>'
    );
});

galleryBtn.addEventListener('click', () => {
    togglePopup(
        '<h2>Gallery</h2>' +
        '<div style="display:flex;gap:10px;flex-wrap:wrap;">' +
        // placeholder images – replace with real ones later
        '<img src="https://picsum.photos/200/150" alt="sample1">' +
        '<img src="https://picsum.photos/201/150" alt="sample2">' +
        '</div>'
    );
});

// Toggle logic
function togglePopup(contentHTML) {
    // If the same popup is already open, close it
    if (currentPopup && currentPopup.getAttribute('data-id') === contentHTML) {
        closePopup();
        return;
    }

    // Close any existing popup first
    closePopup();

    // Create and show new popup
    const popup = createPopup(contentHTML);
    popup.setAttribute('data-id', contentHTML); // simple id to compare later
    content.appendChild(popup);
    currentPopup = popup;

    // Click anywhere outside the popup closes it
    setTimeout(() => {
        document.addEventListener('click', handleOutsideClick, { once: true });
    }, 0);
}

// Close the current popup
function closePopup() {
    if (currentPopup) {
        content.removeChild(currentPopup);
        currentPopup = null;
    }
}

// Detect clicks outside the popup
function handleOutsideClick(e) {
    // If click target is inside currentPopup, ignore
    if (currentPopup && !currentPopup.contains(e.target)) {
        closePopup();
    } else {
        // Click inside popup – reattach listener for next external click
        document.addEventListener('click', handleOutsideClick, { once: true });
    }
}

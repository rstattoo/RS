const studioBtn = document.getElementById('btn-studio');
const galleryBtn = document.getElementById('btn-gallery');
const studioBox = document.getElementById('studio-box');
const galleryBox = document.getElementById('gallery-box');

function toggleBox(box, otherBox) {
  if (otherBox.classList.contains('hidden')) return;
  otherBox.classList.add('hidden');          // close the other one
}
studioBtn.onclick = () => {
  toggleBox(studioBox, galleryBox);
  studioBox.classList.toggle('hidden');
};
galleryBtn.onclick = () => {
  toggleBox(galleryBox, studioBox);
  galleryBox.classList.toggle('hidden');
};

// hide boxes when clicking outside them
document.addEventListener('click', e=>{
  if (!studioBox.contains(e.target) && !studioBtn.contains(e.target))
    studioBox.classList.add('hidden');
  if (!galleryBox.contains(e.target) && !galleryBtn.contains(e.target))
    galleryBox.classList.add('hidden');
});

const modal = document.getElementById("img-modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.getElementById("close-modal");

// Événement click sur les images pour les afficher en grand
document.querySelectorAll('.screen').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  });
});

// Événement click sur le bouton pour fermer la modale
closeBtn.addEventListener('click', () => {
  modal.style.display = "none";
});

// Événement click sur la modale pour la fermer
modal.addEventListener('click', (e) => {
  if (e.target === modal || e.target === modalImg) {
    modal.style.display = "none";
  }
});


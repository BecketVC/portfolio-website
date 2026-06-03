function playSound() {
  alert("Song preview coming soon! 🎧");
}

document.addEventListener('DOMContentLoaded', () => {
  const particleLayer = document.querySelector('.particle-layer');
  if (!particleLayer) return;

  const particleCount = 50;
  for (let i = 0; i < particleCount; i += 1) {
    const particle = document.createElement('span');
    particle.className = 'particle';

    const size = Math.round(Math.random() * 4) + 2;
    const opacity = (Math.random() * 0.4 + 0.45).toFixed(2);
    const duration = `${Math.random() * 8 + 10}s`;
    const delay = `${Math.random() * -10}s`;
    const dx = `${Math.round(Math.random() * 60 - 30)}px`;
    const dy = `${Math.round(Math.random() * 40 - 20)}px`;

    particle.style.setProperty('--particle-size', `${size}px`);
    particle.style.setProperty('--particle-opacity', opacity);
    particle.style.setProperty('--particle-duration', duration);
    particle.style.setProperty('--particle-delay', delay);
    particle.style.setProperty('--dx', dx);
    particle.style.setProperty('--dy', dy);
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;

    particleLayer.appendChild(particle);
  }

  const favoriteTrack = document.querySelector('.favorite-track');
  const favoritePrev = document.querySelector('.favorite-prev');
  const favoriteNext = document.querySelector('.favorite-next');
  const favoriteDots = document.querySelectorAll('.favorite-dot');
  let favoriteIndex = 0;

  const updateFavoriteButtons = () => {
    favoritePrev.disabled = favoriteIndex === 0;
    favoriteNext.disabled = favoriteIndex === 1;
    favoriteDots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === favoriteIndex);
    });
  };

  const slideFavorites = (index) => {
    favoriteIndex = Math.max(0, Math.min(index, 1));
    favoriteTrack.style.transform = `translateX(-${favoriteIndex * 50}%)`;
    updateFavoriteButtons();
  };

  if (favoritePrev && favoriteNext && favoriteTrack) {
    favoritePrev.addEventListener('click', () => slideFavorites(favoriteIndex - 1));
    favoriteNext.addEventListener('click', () => slideFavorites(favoriteIndex + 1));
    updateFavoriteButtons();
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const tiles = document.querySelectorAll('.tile');

  tiles.forEach(tile => {
    tile.addEventListener('click', () => {
      const detail = tile.querySelector('.tile-details');
      detail.classList.toggle('hidden');
    });
  });
});

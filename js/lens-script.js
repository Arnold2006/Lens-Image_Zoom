(function(){
  document.addEventListener('DOMContentLoaded', function(){
    const imgs = document.querySelectorAll('img.zoom-lens');
    imgs.forEach(img => {
      const lens = document.createElement('div');
      lens.className = 'zoom-lens-lens';
      img.parentElement.style.position = 'relative';
      img.parentElement.appendChild(lens);

      const ratio = 2;
      lens.style.backgroundImage = `url('${img.src}')`;
      lens.style.backgroundSize = (img.width * ratio) + 'px ' +
                                   (img.height * ratio) + 'px';

      img.addEventListener('mousemove', moveLens);
      img.addEventListener('mouseleave', () => lens.style.visibility = 'hidden');

      function moveLens(e) {
        lens.style.visibility = 'visible';
        const rect = img.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        x = Math.max(0, Math.min(x, img.width));
        y = Math.max(0, Math.min(y, img.height));

        const lx = x - lens.offsetWidth / 2;
        const ly = y - lens.offsetHeight / 2;
        lens.style.left = lx + 'px';
        lens.style.top = ly + 'px';

        lens.style.backgroundPosition = `-${x * ratio - lens.offsetWidth / 2}px ` +
                                        `-${y * ratio - lens.offsetHeight / 2}px`;
      }
    });
  });
})();

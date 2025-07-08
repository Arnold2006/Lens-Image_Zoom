(function(){
  document.addEventListener("DOMContentLoaded", function () {
  const zoomImages = document.querySelectorAll("img.zoom-lens");

  zoomImages.forEach((img) => {
    // Wrap in a container if needed
    let wrapper = img.parentElement;
    if (getComputedStyle(wrapper).position === 'static') {
      wrapper.style.position = 'relative';
    }

    const lens = document.createElement("div");
    lens.className = "zoom-lens-lens";
    wrapper.appendChild(lens);

    const zoomRatio = 2;
    lens.style.backgroundImage = `url('${img.src}')`;
    lens.style.backgroundSize = `${img.width * zoomRatio}px ${img.height * zoomRatio}px`;

    img.addEventListener("mousemove", moveLens);
    img.addEventListener("mouseleave", () => lens.style.visibility = "hidden");

    function moveLens(e) {
      lens.style.visibility = "visible";
      const rect = img.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const lensSize = 120;
      const lensX = x - lensSize / 2;
      const lensY = y - lensSize / 2;

      lens.style.left = `${lensX}px`;
      lens.style.top = `${lensY}px`;

      lens.style.backgroundPosition = `-${x * zoomRatio - lensSize / 2}px -${y * zoomRatio - lensSize / 2}px`;
    }
  });
});

})();

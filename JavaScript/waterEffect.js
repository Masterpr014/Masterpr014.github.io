document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");

  header.addEventListener("mousemove", function (e) {
    const ripple = document.createElement("div");
    ripple.classList.add("ripple");
    header.appendChild(ripple);

    const size = Math.random() * 50 + 20; // Ajusta el rango del tamaño de las burbujas
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;

    const posX = e.clientX - header.getBoundingClientRect().left - size / 2;
    const posY = e.clientY - header.getBoundingClientRect().top - size / 2;

    ripple.style.left = `${posX}px`;
    ripple.style.top = `${posY}px`;

    const colors = ["#4e4376", "#2ab0ff", "#00d68f", "#ffd700", "#ff6b6b"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    ripple.style.background = color;

    ripple.addEventListener("animationend", function () {
      ripple.remove();
    });
  });
});

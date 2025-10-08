document.addEventListener("DOMContentLoaded", () => {
  const cardContainer = document.querySelector(".card-container");
  const card = document.querySelector(".card");

  // Faktor seberapa sensitif efek miringnya
  const tiltIntensity = 15;

  cardContainer.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = cardContainer.getBoundingClientRect();

    // Menghitung posisi mouse dari tengah kartu (dari -0.5 sampai 0.5)
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;

    // Menghitung rotasi sumbu X dan Y
    const rotateY = x * tiltIntensity;
    const rotateX = -y * tiltIntensity; // Dibalik agar terasa natural

    // Terapkan transformasi 3D ke kartu
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  // Reset posisi kartu saat mouse keluar dari area container
  cardContainer.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  });
});

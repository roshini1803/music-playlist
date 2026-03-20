const allImages = [
    "../assets/images/gallery/Screenshot 2026-01-12 020640.png",
    "../assets/images/gallery/Screenshot 2026-01-12 020838.png",
    "../assets/images/gallery/Screenshot 2026-01-12 020909.png",
    "../assets/images/gallery/Screenshot 2026-01-12 020944.png",
    "../assets/images/gallery/Screenshot 2026-01-12 020944 - Copy.png",
    "../assets/images/gallery/Screenshot 2026-01-12 023440.png",
    "../assets/images/gallery/Screenshot 2026-03-06 180014.png",
    "../assets/images/roshini/r1.jpeg",
    "../assets/images/roshini/r2.jpeg",
    "../assets/images/roshini/r3.jpeg",
    "../assets/images/roshini/r4.jpeg",
    "../assets/images/roshini/r5.jpeg",
    "../assets/images/roshini/r6.jpeg",
    "../assets/images/roshini/r7.jpeg"
];

function renderAllImages() {
    const grid = document.getElementById("allImagesGrid");
    if (!grid) return;

    allImages.forEach((imagePath, index) => {
        const card = document.createElement("article");
        card.className = "simple-gallery-item";

        const image = document.createElement("img");
        image.src = imagePath;
        image.alt = `Gallery image ${index + 1}`;
        image.loading = "lazy";

        const caption = document.createElement("p");
        caption.textContent = imagePath.split("/").pop() || "image";

        card.appendChild(image);
        card.appendChild(caption);
        grid.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", renderAllImages);

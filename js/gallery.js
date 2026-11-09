const allImages = [
    "../assets/images/gallery/Screenshot 2026-01-12 020640.png",
    "../assets/images/gallery/Screenshot 2026-01-12 020838.png",
    "../assets/images/gallery/Screenshot 2026-01-12 020909.png",
    "../assets/images/gallery/Screenshot 2026-01-12 020944.png",
    "../assets/images/gallery/Screenshot 2026-01-12 020944 - Copy.png",
    "../assets/images/gallery/Screenshot 2026-01-12 023440.png",
    "../assets/images/gallery/Screenshot 2026-03-06 180014.png",
    "../assets/images/roshini/r1.jpeg", "../assets/images/roshini/r2.jpeg",
    "../assets/images/roshini/r3.jpeg", "../assets/images/roshini/r4.jpeg",
    "../assets/images/roshini/r5.jpeg", "../assets/images/roshini/r6.jpeg",
    "../assets/images/roshini/r7.jpeg"
];

let activeGalleryIndex = 0;
function renderAllImages() {
    const grid = document.getElementById("allImagesGrid");
    if (!grid) return;
    allImages.forEach((imagePath, index) => {
        const card = document.createElement("button");
        card.type = "button";
        card.className = "simple-gallery-item";
        card.setAttribute("aria-label", `Open gallery image ${index + 1}`);
        const image = document.createElement("img");
        image.src = imagePath;
        image.alt = `Gallery image ${index + 1}`;
        image.loading = "lazy";
        card.appendChild(image);
        card.addEventListener("click", () => openGalleryLightbox(index));
        grid.appendChild(card);
    });
}
function openGalleryLightbox(index) {
    activeGalleryIndex = index;
    updateGalleryLightbox();
    const box = document.getElementById("galleryLightbox");
    box.classList.add("is-open");
    box.setAttribute("aria-hidden", "false");
}
function updateGalleryLightbox() {
    const image = document.getElementById("lightboxImage");
    const caption = document.getElementById("lightboxCaption");
    if (!image || !caption) return;
    image.src = allImages[activeGalleryIndex];
    image.alt = `Gallery image ${activeGalleryIndex + 1}`;
    caption.textContent = `${activeGalleryIndex + 1} / ${allImages.length}`;
}
function closeGalleryLightbox() {
    const box = document.getElementById("galleryLightbox");
    if (!box) return;
    box.classList.remove("is-open");
    box.setAttribute("aria-hidden", "true");
}
document.addEventListener("DOMContentLoaded", () => {
    renderAllImages();
    document.querySelector(".lightbox-close")?.addEventListener("click", closeGalleryLightbox);
    document.querySelector(".lightbox-prev")?.addEventListener("click", () => {
        activeGalleryIndex = (activeGalleryIndex - 1 + allImages.length) % allImages.length;
        updateGalleryLightbox();
    });
    document.querySelector(".lightbox-next")?.addEventListener("click", () => {
        activeGalleryIndex = (activeGalleryIndex + 1) % allImages.length;
        updateGalleryLightbox();
    });
    document.getElementById("galleryLightbox")?.addEventListener("click", (event) => {
        if (event.target.id === "galleryLightbox") closeGalleryLightbox();
    });
    document.addEventListener("keydown", (event) => {
        const box = document.getElementById("galleryLightbox");
        if (!box?.classList.contains("is-open")) return;
        if (event.key === "Escape") closeGalleryLightbox();
        if (event.key === "ArrowLeft") document.querySelector(".lightbox-prev")?.click();
        if (event.key === "ArrowRight") document.querySelector(".lightbox-next")?.click();
    });
});

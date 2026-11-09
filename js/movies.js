document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("moviesTrack");
    const prev = document.getElementById("moviePrev");
    const next = document.getElementById("movieNext");
    if (!track || !prev || !next) return;

    const scrollAmount = () => {
        const card = track.querySelector(".movie-card");
        return card ? card.getBoundingClientRect().width + 18 : 240;
    };

    prev.addEventListener("click", () => {
        track.scrollBy({ left: -scrollAmount(), behavior: "smooth" });
    });
    next.addEventListener("click", () => {
        track.scrollBy({ left: scrollAmount(), behavior: "smooth" });
    });
});

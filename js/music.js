const musicTitles = [
    "Art & Music",
    "Beautiful Backgrounds",
    "Voice & Sweetness",
    "Addiction",
    "Sugar & Voice",
    "Dance Song",
    "Reels Conversation",
    "Black & White",
    "Sun will get angry",
    "Ante Sundaraniki Song",
    "Sitaramam reference",
    "Teddy Dress"
];

function renderMusicTitles() {
    const list = document.getElementById("musicTitlesList");
    if (!list) return;

    musicTitles.forEach((title, index) => {
        const item = document.createElement("li");

        const number = document.createElement("span");
        number.className = "track-no";
        number.textContent = String(index + 1).padStart(2, "0");

        const name = document.createElement("span");
        name.textContent = title;

        item.appendChild(number);
        item.appendChild(name);
        list.appendChild(item);
    });
}

document.addEventListener("DOMContentLoaded", renderMusicTitles);

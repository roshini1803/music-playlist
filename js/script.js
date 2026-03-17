// ===== TRACK DATA =====
const tracks = [
    {
        track: 1,
        name: "Art & Music",
        lyrics: "Your music is only an art Roshini",
        duration: "0:45",
        theme: "track-theme-1"
    },
    {
        track: 2,
        name: "Beautiful Backgrounds",
        lyrics: "You need to add a very beautiful background to the lyrics because it should match the beauty of your music",
        duration: "1:30",
        theme: "track-theme-2"
    },
    {
        track: 3,
        name: "Voice & Sweetness",
        lyrics: "Neekedhi chiraku veyyadhu asalu\n- Ehh nee voice ee",
        duration: "0:55",
        theme: "track-theme-3"
    },
    {
        track: 4,
        name: "Addiction",
        lyrics: "I don't know how ppl get addicted to alcohol\n- Just the same way how they get addicted to your voice",
        duration: "1:20",
        theme: "track-theme-1"
    },
    {
        track: 5,
        name: "Sugar & Voice",
        lyrics: "Mee mummy ki nee voice ekkuva sarlu vinte sugar vachesthadi emo ani bayapadthundi",
        duration: "1:15",
        theme: "track-theme-2"
    },
    {
        track: 6,
        name: "Dance Song",
        lyrics: "Idi paadu\n(Idhi dance song raa)\nNuvvu paata paadina dance vesinatte untadi le",
        duration: "1:00",
        theme: "track-theme-3"
    },
    {
        track: 7,
        name: "Reels Conversation",
        lyrics: "reel 1(sent by Devaj): Entha pogidina kontha migili poyentha Andham needhi\nreel 2(sent by Devaj): Bayata pandhulu patte vallu thiruguthunnaru anta nuvvu bayata thiragaku\nrosh- okka sari nuvvu pampinchina last 2 reels chudu, complete opposite\ndevaj- Noo, Oka andamaina pandi undakudadha",
        duration: "2:00",
        theme: "track-theme-1"
    },
    {
        track: 8,
        name: "Black & White",
        lyrics: "Naaku ippudu ardamayyindhi black n white Endhuku pettavi\nNee voice chaalu kadaa vere vallani colours tho nimpeyadanikii\nAnduke kadaa nuvvu holi kooda adavu\nNee voice inka smile chusi nuvve colour ani andharu confuse avutharu\nSry colour kaadu colour palette motham\nchudu nene confuse avuthunna",
        duration: "1:45",
        theme: "track-theme-4"
    },
    {
        track: 9,
        name: "Sun will get angry",
        lyrics: "rosh- nenu chudadaniki dayyam la unnanu \n devaj-sun ni ala ante dhaniki kopam vastadhi",
        duration: "1:45",
        theme: "track-theme-2"
    },
    {
        track: 10,
        name: "Ante Sundaraniki Song",
        lyrics: "devaj- Aa post ki nee voice tho voiceover ivvaledu kadaa.. andukenreach ravatledu emo\n\nrosh- Andhuke aa post antha beautiful ga undhi\n\ndevaj- Beautiful ga kanabadithe chaala\ndevaj- Vinabadali kooda kadaa\n\nrosh- Already chala beautiful ga vundhi, Ante sundaraniki song pettav gaa\n\ndevaj- Ante sundaraniki song is ok\nBut antha kanna sundaramga unde ammayi paadithe vinali ani untadi kadaa😁",
        duration: "2:10",
        theme: "track-theme-1"
    },
    {
        track: 11,
        name: "Sitaramam reference",
        lyrics: "Nee noru endhuku aagipodho telusa\nEndhukante nuvvu noru aapukunte prapancham aagipodhi\n(Sitaramam movie reference)",
        duration: "0:20",
        theme: "track-theme-3",
        audio: {
            src: "assets/audio/Inthandham.mp3",
            start: 43,
            end: 63
        }
    },
    {
        track: 12,
        name: "Teddy Dress",
        lyrics: "Rosh- Teddy bear is soo cutee because of that dress\n\nDevaj- Inthaka mundhu aa dress nuvvu veskunnappudu evaraina cute ga undhi annara\n\nRosh- Yess\n\nDevaj- Nuvveskunnavu kabatti bagundhi",
        duration: "0:25",
        theme: "track-theme-2"
    }
];

// ===== STATE MANAGEMENT =====
let currentPlaying = null;
let favorites = JSON.parse(localStorage.getItem('playlistFavorites')) || [];
let playCounts = JSON.parse(localStorage.getItem('playlistPlayCounts')) || new Array(tracks.length).fill(0);
let reactions = JSON.parse(localStorage.getItem('playlistReactions')) || {};

// ===== PHOTO GALLERY DATA =====
const basePhotos = [
    { src: 'assets/images/gallery/Screenshot 2026-01-12 020640.png', caption: '1' },
    { src: 'assets/images/gallery/Screenshot 2026-01-12 020838.png', caption: '2' },
    { src: 'assets/images/gallery/Screenshot 2026-01-12 020909.png', caption: '3' },
    { src: 'assets/images/gallery/Screenshot 2026-01-12 023440.png', caption: '4' },
    { src: 'assets/images/gallery/Screenshot 2026-03-06 180014.png', caption: '5' }
];

const rImages = [
    { src: 'assets/images/roshini/r1.jpeg', caption: 'r1' },
    { src: 'assets/images/roshini/r2.jpeg', caption: 'r2' },
    { src: 'assets/images/roshini/r3.jpeg', caption: 'r3' },
    { src: 'assets/images/roshini/r4.jpeg', caption: 'r4' },
    { src: 'assets/images/roshini/r5.jpeg', caption: 'r5' },
    { src: 'assets/images/roshini/r6.jpeg', caption: 'r6' },
    { src: 'assets/images/roshini/r7.jpeg', caption: 'r7' }
];

// Shuffle function
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Combine and shuffle all photos, with r1 always first
const shuffledPhotos = shuffleArray([...basePhotos, ...rImages.slice(1)]);
const galleryPhotos = [rImages[0], ...shuffledPhotos];

// ===== FLOATING PARTICLES =====
function createParticles() {
    const container = document.getElementById('particlesContainer');
    const particleCount = 25;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle note';
        particle.textContent = ['♪', '♫', '♬', '♩', '♭', '♯'][Math.floor(Math.random() * 6)];

        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.fontSize = (Math.random() * 24 + 16) + 'px';

        container.appendChild(particle);
    }
}

// ===== LOADING SCREEN =====
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    setTimeout(() => {
        loadingScreen.classList.add('hide');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 800);
    }, 2500);
}

// ===== RENDER TRACKS =====
function renderTracks() {
    const container = document.getElementById('tracksContainer');
    container.innerHTML = '';

    tracks.forEach((track, index) => {
        const trackEl = document.createElement('div');
        trackEl.className = 'track-item';
        trackEl.id = `track-${index}`;
        trackEl.onclick = () => openTrackModal(index);

        const preview = track.lyrics.length > 50 ? track.lyrics.substring(0, 50) + '...' : track.lyrics;
        const isFavorite = favorites.includes(index);

        trackEl.innerHTML = `
            <div class="track-index">
                <span class="track-number">${track.track}</span>
                <span class="play-icon">▶</span>
            </div>
            <div class="track-info">
                <div class="track-name">${track.name}</div>
                <div class="track-preview">${preview}</div>
            </div>
            <div class="track-preview" style="grid-column: 3;">${track.lyrics.substring(0, 40)}...</div>
            <div class="track-duration">
                ${track.duration}
                ${isFavorite ? '<span class="favorite-indicator">♥</span>' : ''}
            </div>
        `;

        container.appendChild(trackEl);
    });
}

// ===== RENDER GALLERY =====
function renderGallery() {
    const container = document.getElementById('galleryContainer');
    if (!container) return;
    container.innerHTML = '';

    galleryPhotos.forEach((photo, index) => {
        const photoEl = document.createElement('div');
        photoEl.className = 'gallery-item';
        photoEl.onclick = () => openGalleryModal(index);

        photoEl.innerHTML = `
            <img src="${photo.src}" alt="${photo.caption}" class="gallery-image" loading="lazy">
            <div class="gallery-overlay">
                <div class="gallery-caption">${photo.caption}</div>
            </div>
        `;

        container.appendChild(photoEl);
    });

    localStorage.setItem('galleryVisited', 'true');
}

// ===== CHAT BUBBLE FORMATTING =====
function formatChatBubbles(lyrics) {
    const lines = lyrics.split('\n');
    let formattedHTML = '';

    lines.forEach(line => {
        if (line.trim() === '') return;

        let bubbleClass = 'system';
        let content = line.trim();

        if (line.toLowerCase().startsWith('rosh') || line.toLowerCase().includes('rosh-') || line.toLowerCase().includes('rosh:')) {
            bubbleClass = 'rosh';
            content = line.replace(/^(rosh-?\s*:?\s*)/i, '').trim();
        } else if (line.toLowerCase().startsWith('devaj') || line.toLowerCase().includes('devaj-') || line.toLowerCase().includes('devaj:')) {
            bubbleClass = 'devaj';
            content = line.replace(/^(devaj-?\s*:?\s*)/i, '').replace(/reel \d+\(sent by devaj\):\s*/i, '').trim();
        } else if (line.includes('-')) {
            // Handle other dialogue formats
            const parts = line.split('-');
            if (parts.length === 2) {
                const speaker = parts[0].trim().toLowerCase();
                if (speaker.includes('rosh')) {
                    bubbleClass = 'rosh';
                    content = parts[1].trim();
                } else if (speaker.includes('devaj')) {
                    bubbleClass = 'devaj';
                    content = parts[1].trim();
                } else {
                    content = line;
                }
            }
        }

        formattedHTML += `<div class="chat-bubble ${bubbleClass}">${content}</div>`;
    });

    return formattedHTML;
}

// ===== MODAL FUNCTIONS =====
const trackAudio = document.createElement('audio');
trackAudio.id = 'trackAudio';
trackAudio.preload = 'auto';
trackAudio.style.display = 'none';
document.body.appendChild(trackAudio);

let audioEndTime = null;

// Stop audio when it reaches the specified end time
trackAudio.addEventListener('timeupdate', () => {
    if (audioEndTime !== null && trackAudio.currentTime >= audioEndTime) {
        trackAudio.pause();
    }
});

// Instagram post background music
const instaAudio = document.createElement('audio');
instaAudio.id = 'instaAudio';
instaAudio.src = 'assets/audio/amelia_island.mp3';
instaAudio.preload = 'auto';
instaAudio.loop = true;
instaAudio.style.display = 'none';
document.body.appendChild(instaAudio);

let instaAudioPlaying = false;

function toggleInstaAudio() {
    const btn = document.getElementById('instaMuteBtn');
    if (instaAudioPlaying) {
        instaAudio.pause();
        instaAudioPlaying = false;
        btn.textContent = '🔇';
    } else {
        instaAudio.play().catch(() => {
            // Autoplay may be blocked by browser; still allow manual unmute.
        });
        instaAudioPlaying = true;
        btn.textContent = '🔊';
    }
}


function openTrackModal(index) {
    const track = tracks[index];

    // Pause any previous audio before switching
    if (!trackAudio.paused) {
        trackAudio.pause();
    }

    // Increment play count
    playCounts[index]++;
    localStorage.setItem('playlistPlayCounts', JSON.stringify(playCounts));

    // Apply track theme
    document.getElementById('trackModal').className = `modal ${track.theme}`;

    document.getElementById('modalTrackNum').textContent = `Track ${String(track.track).padStart(2, '0')}`;
    document.getElementById('modalTitle').textContent = track.name;

    // Format lyrics as chat bubbles
    const formattedLyrics = formatChatBubbles(track.lyrics);
    document.getElementById('modalLyrics').innerHTML = formattedLyrics;

    // Update favorite button
    const favoriteBtn = document.getElementById('modalFavoriteBtn');
    const isFavorite = favorites.includes(index);
    favoriteBtn.classList.toggle('favorited', isFavorite);
    favoriteBtn.querySelector('.heart-icon').textContent = isFavorite ? '♥' : '♡';
    favoriteBtn.querySelector('.favorite-text').textContent = isFavorite ? 'Favorited' : 'Favorite';

    // Show reactions
    renderReactions(index);

    // Play audio snippet if provided
    if (track.audio && track.audio.src) {
        audioEndTime = track.audio.end || null;
        const requestedStart = track.audio.start || 0;

        trackAudio.src = track.audio.src;
        trackAudio.pause();

        const setStart = () => {
            try {
                trackAudio.currentTime = requestedStart;
            } catch (err) {
                // Some browsers require metadata before seeking.
            }
        };

        if (trackAudio.readyState >= 1) {
            setStart();
        } else {
            trackAudio.addEventListener('loadedmetadata', setStart, { once: true });
        }

        trackAudio.play().catch(() => {
            // Autoplay may be blocked; user can still click to play.
        });
    } else {
        audioEndTime = null;
    }

    currentPlaying = index;
    document.getElementById(`track-${index}`).classList.add('active');
    document.getElementById('trackModal').classList.add('show');
}

function closeTrackModal() {
    document.getElementById('trackModal').classList.remove('show');
    document.getElementById('trackModal').className = 'modal';
    document.querySelectorAll('.track-item').forEach(el => el.classList.remove('active'));
    currentPlaying = null;

    // Stop audio playback when closing the modal
    if (!trackAudio.paused) {
        trackAudio.pause();
    }
    audioEndTime = null;
}

// ===== FAVORITES =====
function toggleFavorite() {
    if (currentPlaying === null) return;

    const index = favorites.indexOf(currentPlaying);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(currentPlaying);
    }

    localStorage.setItem('playlistFavorites', JSON.stringify(favorites));
    renderTracks();
    openTrackModal(currentPlaying); // Refresh modal
}

// ===== EMOJI REACTIONS =====
function toggleEmojiPicker() {
    const picker = document.getElementById('emojiPicker');
    picker.style.display = picker.style.display === 'none' ? 'block' : 'none';
}

function addReaction(emoji) {
    if (currentPlaying === null) return;

    if (!reactions[currentPlaying]) {
        reactions[currentPlaying] = {};
    }

    reactions[currentPlaying][emoji] = (reactions[currentPlaying][emoji] || 0) + 1;
    localStorage.setItem('playlistReactions', JSON.stringify(reactions));

    renderReactions(currentPlaying);
    document.getElementById('emojiPicker').style.display = 'none';
}

function renderReactions(trackIndex) {
    const container = document.getElementById('reactionsDisplay');
    container.innerHTML = '';

    if (!reactions[trackIndex]) return;

    Object.entries(reactions[trackIndex]).forEach(([emoji, count]) => {
        const reactionEl = document.createElement('div');
        reactionEl.className = 'reaction-item';
        reactionEl.innerHTML = `${emoji} ${count}`;
        container.appendChild(reactionEl);
    });
}

// ===== GALLERY MODAL =====
function openGalleryModal(index) {
    const photo = galleryPhotos[index];

    // Create gallery modal
    const galleryModal = document.createElement('div');
    galleryModal.className = 'modal show';
    galleryModal.innerHTML = `
        <div class="modal-content" style="max-width: 700px; text-align: center;">
            <button class="modal-close" onclick="this.parentElement.parentElement.remove()">✕</button>
            <img src="${photo.src}" alt="${photo.caption}" style="width: 100%; max-height: 500px; object-fit: cover; border-radius: 12px; margin-bottom: 20px; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);">
            <h3 style="color: #1db954; margin-bottom: 10px; font-size: 1.4rem;">${photo.caption}</h3>
            <p style="color: #b3b3b3; font-style: italic;">Captured memory #${index + 1}</p>
        </div>
    `;

    galleryModal.onclick = function(event) {
        if (event.target === galleryModal) {
            galleryModal.remove();
        }
    };

    document.body.appendChild(galleryModal);
}

// ===== BLEND LINK =====
function openBlend() {
    window.open('https://open.spotify.com/playlist/37i9dQZF1EJyvgRP4Phg8c?si=e3c29b8aab9a484e', '_blank');
}

// ===== INSTAGRAM LINK =====
function openInstagram() {
    window.open('https://www.instagram.com/roshh._.unplugged?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank');
}

// ===== INSTAGRAM POST CAROUSEL =====
let currentPostSlide = 0;

function nextPostSlide() {
    currentPostSlide = (currentPostSlide + 1) % 4;
    updatePostCarousel();
}

function goToPostSlide(index) {
    currentPostSlide = index;
    updatePostCarousel();
}

function updatePostCarousel() {
    // Hide all images
    document.querySelectorAll('.carousel-image').forEach(img => {
        img.classList.remove('active');
    });

    // Show current image
    document.getElementById(`carouselImg${currentPostSlide + 1}`).classList.add('active');

    // Update dots
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentPostSlide);
    });
}

// ===== UTILITY FUNCTIONS =====
function playPlaylist() {
    openTrackModal(0);
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('trackModal');
    if (event.target === modal) {
        closeTrackModal();
    }
};

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    renderTracks();
    renderGallery();
    hideLoadingScreen();
});

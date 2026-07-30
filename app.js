const music = new Audio('audio/1.mp3');

const songs = [
    { id: 1, songName: `Lord Shiva <br><div class="subtitle">Bahubali</div>`, poster: "img/1.jpg" },
    { id: 2, songName: `Rolex <br><div class="subtitle">Vikram</div>`, poster: "img/2.jpg" },
    { id: 3, songName: `Varaha Roopam <br><div class="subtitle">Kantara</div>`, poster: "img/3.jpg" },
    { id: 4, songName: `Global Gear <br><div class="subtitle">Album</div>`, poster: "img/4.jpg" },
    { id: 5, songName: `Magician's call <br><div class="subtitle">Mersal</div>`, poster: "img/5.jpg" },
    { id: 6, songName: `Veera's Entry <br><div class="subtitle">Beast</div>`, poster: "img/6.jpg" },
    { id: 7, songName: `Inkem Inkem <br><div class="subtitle">Geetha Govindam</div>`, poster: "img/7.jpg" },
    { id: 8, songName: `Imaye Imaye <br><div class="subtitle">Raja Rani</div>`, poster: "img/8.jpg" },
    { id: 9, songName: `Love Score <br><div class="subtitle">Premalu</div>`, poster: "img/9.jpg" },
    { id: 10, songName: `Pularadha <br><div class="subtitle">Dear Comrade</div>`, poster: "img/10.jpg" },
    { id: 11, songName: `Kadhale Kadhale <br><div class="subtitle">96</div>`, poster: "img/11.jpg" },
    { id: 12, songName: `Munbe Vaa <br><div class="subtitle">Sillunu oru kadhal</div>`, poster: "img/12.jpg" },
    { id: 13, songName: `Pudhu Vellai Mazhai <br><div class="subtitle">Roja</div>`, poster: "img/13.jpg" },
    { id: 14, songName: `Megham karukaadha <br><div class="subtitle">Thiruchitrambalam</div>`, poster: "img/14.jpg" },
    { id: 15, songName: `Aathadi Aathadi <br><div class="subtitle">Anegan</div>`, poster: "img/15.jpg" },
    { id: 16, songName: `Idhu Enna Mayamo <br><div class="subtitle">Adhithya Varma</div>`, poster: "img/16.jpg" },
    { id: 17, songName: `Theme of 3 <br><div class="subtitle">3</div>`, poster: "img/17.jpg" },
    { id: 18, songName: `Uyire Uyire <br><div class="subtitle">Amaran</div>`, poster: "img/18.jpg" },
    { id: 19, songName: `Snehidane <br><div class="subtitle">Alaipayuthey</div>`, poster: "img/19.jpg" },
    { id: 20, songName: `Chella Kutty <br><div class="subtitle">Theri</div>`, poster: "img/20.jpg" },
    { id: 21, songName: `Newyork Nagaram <br><div class="subtitle">Sillunu oru kadhal</div>`, poster: "img/21.jpg" },
    { id: 22, songName: `Nalla Nanban <br><div class="subtitle">Nanban</div>`, poster: "img/22.jpg" },
    { id: 23, songName: `Death of Bahubali<br><div class="subtitle">Bahubali</div>`, poster: "img/23.jpg" },
    { id: 24, songName: `Muthu Mazhaiye <br><div class="subtitle">Mazhai</div>`, poster: "img/24.jpg" },
    { id: 25, songName: `Pain Of Love <br><div class="subtitle">3</div>`, poster: "img/25.jpg" },
    { id: 26, songName: `Theme of Sita Ramam <br><div class="subtitle">Sita Ramam</div>`, poster: "img/26.jpg" },
    { id: 27, songName: `Life Of Pazham <br><div class="subtitle">Thiruchitrambalam</div>`, poster: "img/27.jpg" },
    { id: 28, songName: `Hello bgm <br><div class="subtitle">Hello</div>`, poster: "img/28.jpg" },
    { id: 29, songName: `Unnale Ennalum <br><div class="subtitle">Theri</div>`, poster: "img/29.jpg" },
    { id: 30, songName: `Uyire Uyire <br><div class="subtitle">Santhosh Subramanian</div>`, poster: "img/30.jpg" },
    { id: 31, songName: `Hukum <br><div class="subtitle">Jailer</div>`, poster: "img/31.jpg" },
    { id: 32, songName: `Naa Ready <br><div class="subtitle">Leo</div>`, poster: "img/32.jpg" },
    { id: 33, songName: `Arabic Kuthu <br><div class="subtitle">Beast</div>`, poster: "img/33.jpg" },
    { id: 34, songName: `Vaathi Coming <br><div class="subtitle">Master</div>`, poster: "img/34.jpg" },
    { id: 35, songName: `Enjoy Enjaami <br><div class="subtitle">Dhee ft. Arivu</div>`, poster: "img/35.jpg" },
    { id: 36, songName: `Ranjithame <br><div class="subtitle">Varisu</div>`, poster: "img/36.jpg" },
];

const songDescriptions = {
    1: "Olir Vidum En Desane....Kulir Mazhai Than Vaasane.... <br>Ezhil Migu En Nesane....Alitholikum Eesane....",
    2: "Rolex Sir... Name is Rolex! The ruthless, iconic crime boss theme score from Vikram.",
    3: "Singara Siriye... Mystical & divine traditional music score from Kantara.",
    4: "High-octane synth rhythms, ambient electronica, and pulse-pounding basslines.",
    5: "Neethanae Neethanae... Enchanting romantic melody composed by A.R. Rahman.",
    6: "Meaner, Leaner, Stronger! Power-packed action theme score from Beast.",
    7: "Inkem Inkem Inkem Kaavaale... Heartwarming acoustic chartbuster.",
    8: "Imaye Imaye... Touching emotional violin & vocal duet from Raja Rani.",
    9: "Aha... Vibrant youth romantic soundtrack from Premalu.",
    10: "Pularadha... Soft acoustic duet that touches your heart & soul.",
    11: "Kadhale Kadhale... Nostalgic, heartwarming masterpiece theme from 96.",
    12: "Munbe Vaa En Anbe Vaa... Immortal love ballad from Sillunu Oru Kadhal.",
    13: "Pudhu Vellai Mazhai... Classic romantic melody from Roja.",
    14: "Megham Karukaadha... Breezy hit track from Thiruchitrambalam.",
    15: "Aathadi Aathadi... Energetic folk romance fusion track from Anegan.",
    16: "Idhu Enna Mayamo... Passionate acoustic love anthem from Adhithya Varma.",
    17: "Theme of 3... Melancholic instrumental masterpiece composed by Anirudh.",
    18: "Uyire Uyire... Epic emotional score from Amaran.",
    19: "Snehidane Snehidane... A.R. Rahman's timeless romantic melody from Alaipayuthey.",
    20: "Chella Kutty... Playful, catchy hit duet from Theri.",
    21: "Newyork Nagaram Urangum Pothum... Soulful acoustic melody from Sillunu Oru Kadhal.",
    22: "Nalla Nanban Vendum Enru... Heartfelt friendship ballad from Nanban.",
    23: "Death of Bahubali... Dramatic, emotional instrumental theme from Bahubali.",
    24: "Muthu Mazhaiye... Soft acoustic rain melody from Mazhai.",
    25: "Pain Of Love... Heart-wrenching instrumental theme from 3.",
    26: "Theme of Sita Ramam... Poetic, sweeping orchestral romance score.",
    27: "Life Of Pazham... Relaxed, introspective acoustic track from Thiruchitrambalam.",
    28: "Hello BGM... Catchy, uplifting background instrumentals from Hello.",
    29: "Unnale Ennalum... Vibrant romantic melody from Theri.",
    30: "Uyire Uyire... Touching love track from Santhosh Subramanian.",
    31: "Hukum Tiger Ka Hukum! Massive chart-topping mass anthem composed by Anirudh for Jailer.",
    32: "Naa Ready Than Varava... High energy mass dance chartbuster from Leo.",
    33: "Halamithi Habibo... Global viral sensation Arabic Kuthu track from Beast.",
    34: "Vaathi Coming... Unstoppable shoulder dance party anthem from Master.",
    35: "Enjoy Enjaami... Cuckoo Cuckoo... Iconic indie hit celebrating nature & roots.",
    36: "Ranjithame Ranjithame... Electrifying folk beat dance track from Varisu."
};

let index = 1;
let heroCurrentTrackId = 1;
let isShuffle = false;
let isRepeat = false;

let favorites = JSON.parse(localStorage.getItem('tunes_favorites') || '[]');

const showToast = (message, iconClass = 'bi-info-circle-fill') => {
    const container = document.getElementById('toast_container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast_item';
    toast.innerHTML = `<i class="bi ${iconClass}"></i> <span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.classList.add('fade_out');
        setTimeout(() => toast.remove(), 300);
    }, 2500);
};

// Initialize song items on page load
Array.from(document.getElementsByClassName(`songItem`)).forEach((e, i) => {
    if (songs[i]) {
        let imgTag = e.getElementsByTagName('img')[0];
        let h5Tag = e.getElementsByTagName('h5')[0];
        if (imgTag) imgTag.src = songs[i].poster;
        if (h5Tag) h5Tag.innerHTML = songs[i].songName;
    }
});

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');
let likeBtn = document.getElementById('like_btn');

// Mobile Sidebar Drawer Logic
const menuSide = document.getElementById('menu_side');
const mobileMenuBtn = document.getElementById('mobile_menu_btn');
const closeSidebarBtn = document.getElementById('close_sidebar_btn');
const sidebarOverlay = document.getElementById('sidebar_overlay');

const openMobileSidebar = () => {
    if (menuSide) menuSide.classList.add('mobile_open');
    if (sidebarOverlay) sidebarOverlay.classList.add('active');
};

const closeMobileSidebar = () => {
    if (menuSide) menuSide.classList.remove('mobile_open');
    if (sidebarOverlay) sidebarOverlay.classList.remove('active');
};

if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileSidebar);
if (closeSidebarBtn) closeSidebarBtn.addEventListener('click', closeMobileSidebar);
if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeMobileSidebar);

// Update Hero Banner Dynamically
const updateHeroBanner = (trackId) => {
    heroCurrentTrackId = trackId;
    let heroTitle = document.getElementById('hero_title');
    let heroDesc = document.getElementById('hero_desc');
    let heroSection = document.getElementById('hero_section');
    let heroBtn = document.getElementById('hero_play_btn');

    let songObj = songs.find((s) => s.id == trackId);
    if (!songObj) return;

    let cleanTitle = songObj.songName.split('<br>')[0].replace(/<[^>]*>/g, '').trim();

    if (heroTitle) heroTitle.innerText = cleanTitle;
    if (heroDesc) heroDesc.innerHTML = songDescriptions[trackId] || songObj.songName;
    if (heroSection) {
        heroSection.style.backgroundImage = `linear-gradient(135deg, rgba(0, 242, 254, 0.22) 0%, rgba(15, 20, 32, 0.92) 100%), url('${songObj.poster}')`;
        heroSection.style.backgroundSize = 'cover';
        heroSection.style.backgroundPosition = 'center';
    }

    if (heroBtn) {
        if (!music.paused && index == trackId) {
            heroBtn.innerHTML = `<i class="bi bi-pause-fill"></i> Pause`;
        } else {
            heroBtn.innerHTML = `<i class="bi bi-play-fill"></i> Play Now`;
        }
    }
};

// Update Favorite Button State
const updateFavoriteButton = (trackId) => {
    if (!likeBtn) return;
    if (favorites.includes(Number(trackId))) {
        likeBtn.classList.remove('bi-heart');
        likeBtn.classList.add('bi-heart-fill', 'liked');
    } else {
        likeBtn.classList.remove('bi-heart-fill', 'liked');
        likeBtn.classList.add('bi-heart');
    }
};

// Master Play/Pause Toggle
masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play().catch(() => {});
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        updatePlayIconsState(index || 1, true);
        updateHeroBanner(index || 1);
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        updatePlayIconsState(index || 1, false);
        updateHeroBanner(index || 1);
    }
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('BluesPlay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    });
};

const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = 'transparent';
    });
};

const updatePlayIconsState = (trackId, isPlaying) => {
    makeAllPlays();
    let currentIcon = document.getElementById(`${trackId}`);
    if (currentIcon) {
        if (isPlaying) {
            currentIcon.classList.remove('bi-play-circle-fill');
            currentIcon.classList.add('bi-pause-circle-fill');
        } else {
            currentIcon.classList.add('bi-play-circle-fill');
            currentIcon.classList.remove('bi-pause-circle-fill');
        }
    }
};

// Play Song Function
const playTrack = (trackId) => {
    index = Number(trackId);
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active1');
    music.play().catch(() => {});

    let targetSong = songs.find((els) => els.id == index);
    if (targetSong) {
        title.innerHTML = targetSong.songName;
        let cleanName = targetSong.songName.replace(/<br>/g, ' - ').replace(/<[^>]*>/g, '').trim();
        download_music.href = `audio/${index}.mp3`;
        download_music.setAttribute('download', `${cleanName}.mp3`);
        showToast(`Now Playing: ${cleanName}`, 'bi-music-note-beamed');
    }

    makeAllBackground();
    let allItems = document.getElementsByClassName('songItem');
    if (allItems[index - 1]) {
        allItems[index - 1].style.background = "rgba(0, 242, 254, 0.08)";
    }
    updatePlayIconsState(index, true);
    updateHeroBanner(index);
    updateFavoriteButton(index);
    closeMobileSidebar();
};

// Play icon listeners
Array.from(document.getElementsByClassName('BluesPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        el.stopPropagation();
        playTrack(el.target.id);
    });
});

// Whole song item clickability
Array.from(document.getElementsByClassName('songItem')).forEach((e) => {
    e.addEventListener('click', () => {
        let playIcon = e.querySelector('.BluesPlay');
        if (playIcon && playIcon.id) {
            playTrack(playIcon.id);
        }
    });
});

// Hero Play Button Interaction
let heroPlayBtn = document.getElementById('hero_play_btn');
if (heroPlayBtn) {
    heroPlayBtn.addEventListener('click', () => {
        if (index === heroCurrentTrackId && !music.paused) {
            music.pause();
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            wave.classList.remove('active1');
            updatePlayIconsState(index, false);
            updateHeroBanner(index);
        } else {
            playTrack(heroCurrentTrackId || 1);
        }
    });
}

// Timeline and Time Progress
let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    if (!isNaN(music_dur) && music_dur > 0) {
        let min1 = Math.floor(music_dur / 60);
        let sec1 = Math.floor(music_dur % 60);
        if (sec1 < 10) sec1 = `0${sec1}`;
        currentEnd.innerText = `${min1}:${sec1}`;

        let min2 = Math.floor(music_curr / 60);
        let sec2 = Math.floor(music_curr % 60);
        if (sec2 < 10) sec2 = `0${sec2}`;
        currentStart.innerText = `${min2}:${sec2}`;

        let progressBar = parseInt((music_curr / music_dur) * 100);
        seek.value = progressBar;
        bar2.style.width = `${progressBar}%`;
        if (dot) dot.style.left = `${progressBar}%`;
    }
});

seek.addEventListener('change', () => {
    if (music.duration) {
        music.currentTime = (seek.value * music.duration) / 100;
    }
});

// Song Ended Handling
music.addEventListener('ended', () => {
    if (isRepeat) {
        music.currentTime = 0;
        music.play();
    } else if (isShuffle) {
        let randomId = Math.floor(Math.random() * songs.length) + 1;
        playTrack(randomId);
    } else {
        index++;
        if (index > songs.length) index = 1;
        playTrack(index);
    }
});

// Shuffle & Repeat Buttons
let shuffleBtn = document.getElementById('shuffle_btn');
let repeatBtn = document.getElementById('repeat_btn');

if (shuffleBtn) {
    shuffleBtn.addEventListener('click', () => {
        isShuffle = !isShuffle;
        shuffleBtn.classList.toggle('active_mode', isShuffle);
        showToast(isShuffle ? 'Shuffle Mode ON' : 'Shuffle Mode OFF', 'bi-shuffle');
    });
}

if (repeatBtn) {
    repeatBtn.addEventListener('click', () => {
        isRepeat = !isRepeat;
        repeatBtn.classList.toggle('active_mode', isRepeat);
        showToast(isRepeat ? 'Repeat Track ON' : 'Repeat Track OFF', 'bi-repeat');
    });
}

// Favorite Toggle Button
if (likeBtn) {
    likeBtn.addEventListener('click', () => {
        let songIdNum = Number(index);
        let songObj = songs.find((s) => s.id == songIdNum);
        let titleClean = songObj ? songObj.songName.split('<br>')[0].replace(/<[^>]*>/g, '').trim() : 'Track';

        if (favorites.includes(songIdNum)) {
            favorites = favorites.filter((id) => id !== songIdNum);
            showToast(`Removed "${titleClean}" from Favorites`, 'bi-heartbreak-fill');
        } else {
            favorites.push(songIdNum);
            showToast(`Added "${titleClean}" to Favorites`, 'bi-heart-fill');
        }
        localStorage.setItem('tunes_favorites', JSON.stringify(favorites));
        updateFavoriteButton(index);
        populateLibraryTable();
    });
}

// Volume Controls
let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('input', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill', 'bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    } else if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill', 'bi-volume-off-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    } else {
        vol_icon.classList.remove('bi-volume-up-fill', 'bi-volume-off-fill');
        vol_icon.classList.add('bi-volume-down-fill');
    }
    let vol_a = vol.value;
    if (vol_bar) vol_bar.style.width = `${vol_a}%`;
    if (vol_dot) vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});

// Skip Back and Next
let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
    if (isShuffle) {
        let randomId = Math.floor(Math.random() * songs.length) + 1;
        playTrack(randomId);
    } else {
        index -= 1;
        if (index < 1) index = songs.length;
        playTrack(index);
    }
});

next.addEventListener('click', () => {
    if (isShuffle) {
        let randomId = Math.floor(Math.random() * songs.length) + 1;
        playTrack(randomId);
    } else {
        index += 1;
        if (index > songs.length) index = 1;
        playTrack(index);
    }
});

// Carousel Scroll Controls
let trending_song_left = document.getElementById('trending_song_left');
let trending_song_right = document.getElementById('trending_song_right');
let trending_song = document.getElementsByClassName('trending_song')[0];

if (trending_song_right && trending_song) {
    trending_song_right.addEventListener('click', () => { trending_song.scrollLeft += 330; });
}
if (trending_song_left && trending_song) {
    trending_song_left.addEventListener('click', () => { trending_song.scrollLeft -= 330; });
}

let bliss_song_left = document.getElementById('bliss_song_left');
let bliss_song_right = document.getElementById('bliss_song_right');
let bliss_song = document.getElementsByClassName('bliss_song')[0];

if (bliss_song_right && bliss_song) {
    bliss_song_right.addEventListener('click', () => { bliss_song.scrollLeft += 330; });
}
if (bliss_song_left && bliss_song) {
    bliss_song_left.addEventListener('click', () => { bliss_song.scrollLeft -= 330; });
}

let blues_song_left = document.getElementById('blues_song_left');
let blues_song_right = document.getElementById('blues_song_right');
let blues_song = document.getElementsByClassName('blues_song')[0];

if (blues_song_right && blues_song) {
    blues_song_right.addEventListener('click', () => { blues_song.scrollLeft += 330; });
}
if (blues_song_left && blues_song) {
    blues_song_left.addEventListener('click', () => { blues_song.scrollLeft -= 330; });
}

/* ==========================================================================
   PAGE NAVIGATION & LIBRARY / SEARCH / RADIO LOGIC
   ========================================================================== */

// 1. Navigation Tab Switching
const navDiscover = document.getElementById('nav_discover');
const navLibrary = document.getElementById('nav_library');
const navRadio = document.getElementById('nav_radio');

const pageDiscover = document.getElementById('page_discover');
const pageLibrary = document.getElementById('page_library');
const pageRadio = document.getElementById('page_radio');

const switchTab = (activeNav, activePage) => {
    [navDiscover, navLibrary, navRadio].forEach((tab) => {
        if (tab) {
            tab.classList.remove('active_tab');
            let span = tab.querySelector('span');
            if (span) span.remove();
        }
    });

    [pageDiscover, pageLibrary, pageRadio].forEach((page) => {
        if (page) page.style.display = 'none';
    });

    let searchSection = document.getElementById('search_results_section');
    if (searchSection) searchSection.style.display = 'none';

    if (activeNav) {
        activeNav.classList.add('active_tab');
        activeNav.innerHTML = activeNav.innerText + '<span></span>';
    }

    if (activePage) {
        activePage.style.display = 'block';
    }
};

if (navDiscover) navDiscover.addEventListener('click', () => switchTab(navDiscover, pageDiscover));
if (navLibrary) navLibrary.addEventListener('click', () => switchTab(navLibrary, pageLibrary));
if (navRadio) navRadio.addEventListener('click', () => switchTab(navRadio, pageRadio));

// 2. Populate My Library Track Table & Favorite Filter
let currentLibraryFilter = 'all';

const populateLibraryTable = () => {
    const tableBody = document.getElementById('library_track_list');
    const favCountSpan = document.getElementById('fav_count');
    if (!tableBody) return;

    if (favCountSpan) favCountSpan.innerText = favorites.length;

    let displayList = songs;
    if (currentLibraryFilter === 'fav') {
        displayList = songs.filter((s) => favorites.includes(Number(s.id)));
    }

    tableBody.innerHTML = '';
    if (displayList.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="5" style="text-align: center; padding: 32px; color: #64748b;">No favorite tracks added yet. Click the heart icon on any song to add it!</td></tr>`;
        return;
    }

    displayList.forEach((song, idx) => {
        let tr = document.createElement('tr');
        tr.className = 'track_row';
        tr.onclick = () => playTrack(song.id);

        let titleClean = song.songName.split('<br>')[0].replace(/<[^>]*>/g, '').trim();
        let albumClean = (song.songName.split('<br>')[1] || '').replace(/<[^>]*>/g, '').trim() || 'Single';
        let isFav = favorites.includes(Number(song.id));

        tr.innerHTML = `
            <td class="num">${String(idx + 1).padStart(2, '0')}</td>
            <td class="title_cell">
                <img src="${song.poster}" alt="${titleClean}">
                <div>
                    <div class="song_title_txt">${titleClean}</div>
                    <div class="song_artist_txt">${albumClean}</div>
                </div>
            </td>
            <td class="album_cell">${albumClean}</td>
            <td class="dur_cell"><i class="bi ${isFav ? 'bi-heart-fill' : 'bi-heart'}" style="color: ${isFav ? '#00f2fe' : '#64748b'}"></i></td>
            <td class="action_cell">
                <button class="lib_play_btn"><i class="bi bi-play-fill"></i> Play</button>
            </td>
        `;
        tableBody.appendChild(tr);
    });
};

const filterAllBtn = document.getElementById('filter_all');
const filterFavBtn = document.getElementById('filter_fav');

if (filterAllBtn && filterFavBtn) {
    filterAllBtn.addEventListener('click', () => {
        currentLibraryFilter = 'all';
        filterAllBtn.classList.add('active');
        filterFavBtn.classList.remove('active');
        populateLibraryTable();
    });
    filterFavBtn.addEventListener('click', () => {
        currentLibraryFilter = 'fav';
        filterFavBtn.classList.add('active');
        filterAllBtn.classList.remove('active');
        populateLibraryTable();
    });
}
populateLibraryTable();

// 3. Live Search Functionality
const searchInput = document.getElementById('search_input');
const clearSearchBtn = document.getElementById('clear_search');
const searchResultsSection = document.getElementById('search_results_section');
const searchResultsGrid = document.getElementById('search_results_grid');
const searchCountBadge = document.getElementById('search_count_badge');

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();

        if (query.length > 0) {
            clearSearchBtn.style.display = 'block';
            [pageDiscover, pageLibrary, pageRadio].forEach((page) => {
                if (page) page.style.display = 'none';
            });
            searchResultsSection.style.display = 'block';

            const matches = songs.filter((s) => {
                let text = s.songName.replace(/<[^>]*>/g, ' ').toLowerCase();
                return text.includes(query);
            });

            searchCountBadge.innerText = `${matches.length} matches`;
            searchResultsGrid.innerHTML = '';

            if (matches.length === 0) {
                searchResultsGrid.innerHTML = `<div class="no_results"><i class="bi bi-music-note-list"></i><p>No songs found for "${query}"</p></div>`;
            } else {
                matches.forEach((s) => {
                    let card = document.createElement('div');
                    card.className = 'search_card';
                    card.onclick = () => playTrack(s.id);
                    card.innerHTML = `
                        <div class="search_img">
                            <img src="${s.poster}" alt="Cover">
                            <i class="bi bi-play-circle-fill"></i>
                        </div>
                        <div class="search_info">
                            ${s.songName}
                        </div>
                    `;
                    searchResultsGrid.appendChild(card);
                });
            }
        } else {
            clearSearch();
        }
    });
}

const clearSearch = () => {
    if (searchInput) searchInput.value = '';
    if (clearSearchBtn) clearSearchBtn.style.display = 'none';
    if (searchResultsSection) searchResultsSection.style.display = 'none';
    switchTab(navDiscover, pageDiscover);
};

if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', clearSearch);
}

// 4. Radio Station Instant Play Helper
window.playRadioStation = (songId) => {
    switchTab(navDiscover, pageDiscover);
    playTrack(songId);
};

// 5. Global Keyboard Shortcuts
window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    if (e.code === 'Space') {
        e.preventDefault();
        masterPlay.click();
    } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        music.currentTime = Math.max(0, music.currentTime - 5);
        showToast('-5s', 'bi-rewind-fill');
    } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        music.currentTime = Math.min(music.duration || 0, music.currentTime + 5);
        showToast('+5s', 'bi-fast-forward-fill');
    } else if (e.code === 'ArrowUp') {
        e.preventDefault();
        let newVol = Math.min(100, Number(vol.value) + 5);
        vol.value = newVol;
        vol.dispatchEvent(new Event('input'));
        showToast(`Volume: ${newVol}%`, 'bi-volume-up-fill');
    } else if (e.code === 'ArrowDown') {
        e.preventDefault();
        let newVol = Math.max(0, Number(vol.value) - 5);
        vol.value = newVol;
        vol.dispatchEvent(new Event('input'));
        showToast(`Volume: ${newVol}%`, 'bi-volume-down-fill');
    } else if (e.key.toLowerCase() === 'm') {
        e.preventDefault();
        if (music.volume > 0) {
            music.volume = 0;
            vol.value = 0;
            vol.dispatchEvent(new Event('input'));
            showToast('Muted', 'bi-volume-mute-fill');
        } else {
            music.volume = 0.8;
            vol.value = 80;
            vol.dispatchEvent(new Event('input'));
            showToast('Unmuted', 'bi-volume-up-fill');
        }
    } else if (e.key.toLowerCase() === 'l') {
        e.preventDefault();
        if (likeBtn) likeBtn.click();
    }
});

// Initial Setup
updateHeroBanner(1);
updateFavoriteButton(1);
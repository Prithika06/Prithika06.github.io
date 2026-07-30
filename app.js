const music = new Audio('audio/1.mp3');

const songs = [
    {
        id: 1,
        songName: `Lord Shiva <br>
        <div class="subtitle">Bahubali</div>`,
        poster: "img/1.jpg"
    },
    {
        id: 2,
        songName: `Rolex <br>
        <div class="subtitle">Vikram</div>`,
        poster: "img/2.jpg"
    },
    {
        id: 3,
        songName: `Varaha Roopam <br>
        <div class="subtitle">Kantara</div>`,
        poster: "img/3.jpg"
    },
    {
        id: 4,
        songName: `Global Gear <br>
        <div class="subtitle">Album</div>`,
        poster: "img/4.jpg"
    },
    {
        id: 5,
        songName: `Magician's call <br>
        <div class="subtitle">Mersal</div>`,
        poster: "img/5.jpg"
    },
    {
        id: 6,
        songName: `Veera's Entry <br>
        <div class="subtitle">Beast</div>`,
        poster: "img/6.jpg"
    },
    {
        id: 7,
        songName: `Inkem Inkem <br>
        <div class="subtitle">Geetha Govindam</div>`,
        poster: "img/7.jpg"
    },
    {
        id: 8,
        songName: `Imaye Imaye <br>
        <div class="subtitle">Raja Rani</div>`,
        poster: "img/8.jpg"
    },
    {
        id: 9,
        songName: `Love Score <br>
        <div class="subtitle">Premalu</div>`,
        poster: "img/9.jpg"
    },
    {
        id: 10,
        songName: `Pularadha <br>
        <div class="subtitle">Dear Comrade</div>`,
        poster: "img/10.jpg"
    },
    {
        id: 11,
        songName: `Kadhale Kadhale <br>
        <div class="subtitle">96</div>`,
        poster: "img/11.jpg"
    },
    {
        id: 12,
        songName: `Munbe Vaa <br>
        <div class="subtitle">Sillunu oru kadhal</div>`,
        poster: "img/12.jpg"
    },
    {
        id: 13,
        songName: `Pudhu Vellai Mazhai <br>
        <div class="subtitle">Roja</div>`,
        poster: "img/13.jpg"
    },
    {
        id: 14,
        songName: `Megham karukaadha <br>
        <div class="subtitle">Thiruchitrambalam</div>`,
        poster: "img/14.jpg"
    },
    {
        id: 15,
        songName: `Aathadi Aathadi <br>
        <div class="subtitle">Anegan</div>`,
        poster: "img/15.jpg"
    },
    {
        id: 16,
        songName: `Idhu Enna Mayamo <br>
        <div class="subtitle">Adhithya Varma</div>`,
        poster: "img/16.jpg"
    },
    {
        id: 17,
        songName: `Theme of 3 <br>
        <div class="subtitle">3</div>`,
        poster: "img/17.jpg"
    },
    {
        id: 18,
        songName: `Uyire Uyire <br>
        <div class="subtitle">Amaran</div>`,
        poster: "img/18.jpg"
    },
    {
        id: 19,
        songName: `Snehidane <br>
        <div class="subtitle">Alaipayuthey</div>`,
        poster: "img/19.jpg"
    },
    {
        id: 20,
        songName: `Chella Kutty <br>
        <div class="subtitle">Theri</div>`,
        poster: "img/20.jpg"
    },
    {
        id: 21,
        songName: `Newyork Nagaram <br>
        <div class="subtitle">Sillunu oru kadhal</div>`,
        poster: "img/21.jpg"
    },
    {
        id: 22,
        songName: `Nalla Nanban <br>
        <div class="subtitle">Nanban</div>`,
        poster: "img/22.jpg"
    },
    {
        id: 23,
        songName: `Death of Bahubali<br>
        <div class="subtitle">Bahubali</div>`,
        poster: "img/23.jpg"
    },
    {
        id: 24,
        songName: `Muthu Mazhaiye <br>
        <div class="subtitle">Mazhai</div>`,
        poster: "img/24.jpg"
    },
    {
        id: 25,
        songName: `Pain Of Love <br>
        <div class="subtitle">3</div>`,
        poster: "img/25.jpg"
    },
    {
        id: 26,
        songName: `Theme of Sita Ramam <br>
        <div class="subtitle">Sita Ramam</div>`,
        poster: "img/26.jpg"
    },
    {
        id: 27,
        songName: `Life Of Pazham <br>
        <div class="subtitle">Thiruchitrambalam</div>`,
        poster: "img/27.jpg"
    },
    {
        id: 28,
        songName: `Hello bgm <br>
        <div class="subtitle">Hello</div>`,
        poster: "img/28.jpg"
    },
    {
        id: 29,
        songName: `Unnale Ennalum <br>
        <div class="subtitle">Theri</div>`,
        poster: "img/29.jpg"
    },
    {
        id: 30,
        songName: `Uyire Uyire <br>
        <div class="subtitle">Santhosh Subramanian</div>`,
        poster: "img/30.jpg"
    },
];

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

// Master Play/Pause Toggle
masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play().catch(() => {});
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        updatePlayIconsState(index || 1, true);
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        updatePlayIconsState(index || 1, false);
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

let index = 1;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');

// Play Song Function
const playTrack = (trackId) => {
    index = trackId;
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
    }

    makeAllBackground();
    let allItems = document.getElementsByClassName('songItem');
    if (allItems[index - 1]) {
        allItems[index - 1].style.background = "rgba(0, 242, 254, 0.08)";
    }
    updatePlayIconsState(index, true);
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
    e.addEventListener('click', (el) => {
        let playIcon = e.querySelector('.BluesPlay');
        if (playIcon && playIcon.id) {
            playTrack(playIcon.id);
        }
    });
});

// Hero Play Button
let heroPlayBtn = document.getElementById('hero_play_btn');
if (heroPlayBtn) {
    heroPlayBtn.addEventListener('click', () => {
        playTrack(1); // Play Shiva (Song #1)
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

music.addEventListener('ended', () => {
    index++;
    if (index > songs.length) {
        index = 1;
    }
    playTrack(index);
});

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
    index -= 1;
    if (index < 1) {
        index = songs.length;
    }
    playTrack(index);
});

next.addEventListener('click', () => {
    index += 1;
    if (index > songs.length) {
        index = 1;
    }
    playTrack(index);
});

// Carousel Scroll Buttons
let bliss_song_left = document.getElementById('bliss_song_left');
let bliss_song_right = document.getElementById('bliss_song_right');
let bliss_song = document.getElementsByClassName('bliss_song')[0];

if (bliss_song_right && bliss_song) {
    bliss_song_right.addEventListener('click', () => {
        bliss_song.scrollLeft += 330;
    });
}
if (bliss_song_left && bliss_song) {
    bliss_song_left.addEventListener('click', () => {
        bliss_song.scrollLeft -= 330;
    });
}

let blues_song_left = document.getElementById('blues_song_left');
let blues_song_right = document.getElementById('blues_song_right');
let blues_song = document.getElementsByClassName('blues_song')[0];

if (blues_song_right && blues_song) {
    blues_song_right.addEventListener('click', () => {
        blues_song.scrollLeft += 330;
    });
}
if (blues_song_left && blues_song) {
    blues_song_left.addEventListener('click', () => {
        blues_song.scrollLeft -= 330;
    });
}

/* ==========================================================================
   NEW FEATURES & PAGE NAVIGATION
   ========================================================================== */

// 1. Navigation Tab Switching (DISCOVER, MY LIBRARY, RADIO)
const navDiscover = document.getElementById('nav_discover');
const navLibrary = document.getElementById('nav_library');
const navRadio = document.getElementById('nav_radio');

const pageDiscover = document.getElementById('page_discover');
const pageLibrary = document.getElementById('page_library');
const pageRadio = document.getElementById('page_radio');

const switchTab = (activeNav, activePage) => {
    // Reset tabs
    [navDiscover, navLibrary, navRadio].forEach((tab) => {
        if (tab) {
            tab.classList.remove('active_tab');
            let span = tab.querySelector('span');
            if (span) span.remove();
        }
    });

    // Reset page views
    [pageDiscover, pageLibrary, pageRadio].forEach((page) => {
        if (page) page.style.display = 'none';
    });

    // Hide search results if open
    let searchSection = document.getElementById('search_results_section');
    if (searchSection) searchSection.style.display = 'none';

    // Set active tab
    if (activeNav) {
        activeNav.classList.add('active_tab');
        activeNav.innerHTML = activeNav.innerText + '<span></span>';
    }

    // Show active page
    if (activePage) {
        activePage.style.display = 'block';
    }
};

if (navDiscover) navDiscover.addEventListener('click', () => switchTab(navDiscover, pageDiscover));
if (navLibrary) navLibrary.addEventListener('click', () => switchTab(navLibrary, pageLibrary));
if (navRadio) navRadio.addEventListener('click', () => switchTab(navRadio, pageRadio));

// 2. Populate My Library Track Table
const populateLibraryTable = () => {
    const tableBody = document.getElementById('library_track_list');
    if (!tableBody) return;

    tableBody.innerHTML = '';
    songs.forEach((song, idx) => {
        let tr = document.createElement('tr');
        tr.className = 'track_row';
        tr.onclick = () => playTrack(song.id);

        let titleClean = song.songName.split('<br>')[0].replace(/<[^>]*>/g, '').trim();
        let albumClean = (song.songName.split('<br>')[1] || '').replace(/<[^>]*>/g, '').trim() || 'Single';

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
            <td class="dur_cell">3:45</td>
            <td class="action_cell">
                <button class="lib_play_btn"><i class="bi bi-play-fill"></i> Play</button>
            </td>
        `;
        tableBody.appendChild(tr);
    });
};
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

            // Filter songs
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
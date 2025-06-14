const music = new Audio('audio/1.mp3');
music.play();

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
        songName: ` Magician's call <br>
        <div class="subtitle">Mersal</div>`,
        poster: "img/5.avif"
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
        poster: "img/9.png"
    },
    {
        id: 10,
        songName: ` Pularadha <br>
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
]

Array.from(document.getElementsByClassName(`songItem`)).forEach((e,i) =>{
    e.getElementsByTagName('img')[0].src= songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML= songs[i].songName;
});

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', ()=>{
    if(music.paused || music.currentTime <=0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } 
    else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('BluesPlay')).forEach((el)=>{
    wave.classList.add('active1');
    })
}
const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background = 'rgb(105, 105, 105, .0)';
        
    })
}


let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('BluesPlay')).forEach((e)=>{
    e.addEventListener('click', (el)=>{
    index = el.target.id;
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active1');
    music.play();
    download_music.href = `audio/${index}.mp3`;
    
    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
        //download_music.setAttribute('download', songName);
    })

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllPlays();
    wave.classList.add('active1');
   });
})

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    //console.log(min1);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    //console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});


seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration / 100;
});

music.addEventListener('ended', () => {
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.remove('active1');
    wave.classList.add('active1');
    index++;
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
        //download_music.setAttribute('download', songName);
    })
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[`${index - 1}`].style.background = "rgb(105, 105, 105, .1)";
    makeAllPlays();
})

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', ()=>{
    if (vol.value == 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value > 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if (vol.value > 50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    

    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
    });

    
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
})

next.addEventListener('click', ()=>{
    index ++;
    //if (index > Array.from(document.getElementsByClassName('songItem')).length) {
    //    index = 1;
    //}
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    

    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
    });

    
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
});



let bliss_song_left = document.getElementById('bliss_song_left')
let bliss_song_right = document.getElementById('bliss_song_right')
let bliss_song = document.getElementsByClassName('bliss_song')[0];

bliss_song_right.addEventListener('click', () => {
    bliss_song.scrollLeft +=330;
});

bliss_song_left.addEventListener('click', () => {
    bliss_song.scrollLeft -=330;
});

let blues_song_left = document.getElementById('blues_song_left')
let blues_song_right = document.getElementById('blues_song_right')
let blues_song = document.getElementsByClassName('blues_song')[0];

blues_song_right.addEventListener('click', () => {
    blues_song.scrollLeft +=330;
});

blues_song_left.addEventListener('click', () => {
    blues_song.scrollLeft -=330;
});


//shuffle
//menu_side play icons changing
//search songs
//login system
//autoplay
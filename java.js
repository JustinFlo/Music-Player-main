const music = new Audio('Fingerbang.mp3');

// create array

const songs = [
    {
        id:'1',
        songName:`  On My Way <br> <div class="subtitle">Alan Walker</div>`,
        poster: "Placeholder.png"
    },
    {
        id:'2',
        songName:`  On My Way <br> <div class="subtitle">Alan Walker</div>`,
        poster: "Placeholder.png",
    },
    {
        id:'3',
        songName:`  On My Way <br> <div class="subtitle">Alan Walker</div>`,
        poster: "Placeholder.png",
    },
    {
        id:'4',
        songName:`  On My Way <br> <div class="subtitle">Alan Walker</div>`,
        poster: "Placeholder.png",
    },
    {
        id:'5',
        songName:`  On My Way <br> <div class="subtitle">Alan Walker</div>`,
        poster: "Placeholder.png",
        },
    {
        id:'6',
        songName:`  On My Way <br> <div class="subtitle">Alan Walker</div>`,
        poster: "Placeholder.png",
            },
    {
        id:'7',
        songName:`  On My Way <br> <div class="subtitle">Alan Walker</div>`,
        poster: "Placeholder.png",
    },
    {
        id:'8',
        songName:`  On My Way <br> <div class="subtitle">Alan Walker</div>`,
        poster: "Placeholder.png",
    },
    {
        id:'9',
        songName:`  On My Way <br> <div class="subtitle">Alan Walker</div>`,
        poster: "Placeholder.png",
    },
    {
        id:'10',
        songName:`  On My Way <br> <div class="subtitle">Alan Walker</div>`,
        poster: "Placeholder.png",
    },
    {
        id:'11',
        songName:`  On My Way <br> <div class="subtitle">Alan Walker</div>`,
         poster: "Placeholder.png",
    },
    {
         id:'12',
         songName:`  On My Way <br> <div class="subtitle">Alan Walker</div>`,
         poster: "Placeholder.png",
    },
    {
        id:'13',
        songName:`  On My Way <br> <div class="subtitle">Alan Walker</div>`,
        poster: "Placeholder.png",
    },
    {
    id:'14',
    songName:`  On My Way <br> <div class="subtitle">Alan Walker</div>`,
    poster: "Placeholder.png",
    },
    {
    id:'15',
    songName:`  On My Way <br> <div class="subtitle">Alan Walker</div>`,
    poster: "Placeholder.png",
    },
    {
    id:'16',
    songName:`  On My Way <br> <div class="subtitle">Alan Walker</div>`,
    poster: "Placeholder.png",
    },
    {
    id:'17',
    songName:`  On My Way <br> <div class="subtitle">Alan Walker</div>`,
    poster: "Placeholder.png",
    },
    {
    id:'18',
    songName:`  On My Way <br> <div class="subtitle">Alan Walker</div>`,
    poster: "Placeholder.png",
    },
]

Array.from(document.getElementsByClassName('songitem')).forEach((element, i)=>{
    element.getElementsByClassName('img')[0].src = [i].poster;
    element.getElementsByClassName('h5')[0].innerHTML = [i].songName;
})

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];
masterPlay.addEventListener('click', ()=>{
    if (music.paused || music.currentTime <=0){
        music.play();
        masterPlay.classList.remove(' bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else{
      music.pause();
      masterPlay.classList.add(' bi-play-fill');
      masterPlay.classList.remove('bi-pause-fill');
      wave.classList.remove('active2');
    }
} )

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playlistPlay')).forEach((element)=>{
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
        })      
}


let index = 0;

Array.from(document.getElementsByClassName('playlistPlay')).forEach((element)=>{
        element.addEventListener('click', (e) =>{
            index = e.target.id;
            makeAllPlays();
            e.target.classList.remove('bi-play-circle-fill');
            e.target.classList.add('bi-pause-circle-fill');
            music.src = `audio/$(index).mp3`;
            music.play()
        })

        
})
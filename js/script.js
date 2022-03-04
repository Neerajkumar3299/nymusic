var songIndex=1
var audioObj=new Audio(`songs/${songIndex}.mp3`)
var playing_gif=document.getElementById("playing-gif")
var play_song=document.getElementById("play-song")
var songIndex;
var song_container=document.getElementById("song-container")
var range=document.getElementById("progressBar")
var progress=0
var previous=document.getElementById("previous")
var next=document.getElementById("next")

let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
]



// -----------------Initialize song details--------------------------


var song=""
for(let i=0;i<songs.length;i++){
    song+=`<div class='song'>
    <img src='./covers/${i+1}.jpg' alt=''>
    <p id='songName'>${songs[i].songName}</p>
    <p >5:30 <i id='${i+1}' class='fa-solid fa-circle-play' onclick='play(${i+1})'></i></p>
</div>`
}
song_container.innerHTML=song

// --------------------------Play Song ----------------------------

play_song.addEventListener("click",()=>{
    if(!audioObj.paused){
        play_song.classList.remove("fa-circle-pause")
        play_song.classList.add("fa-circle-play")
        document.getElementById(songIndex).classList.remove("fa-circle-pause")
        document.getElementById(songIndex).classList.add("fa-circle-play")
        playing_gif.style.opacity='0'
        audioObj.pause()
        
    }
    else{
        play_song.classList.add("fa-circle-pause")
        play_song.classList.remove("fa-circle-play")
        document.getElementById(songIndex).classList.remove("fa-circle-play")
        document.getElementById(songIndex).classList.add("fa-circle-pause")
        playing_gif.style.opacity='1'

        audioObj.play()
       
    }
})

// ---------------------------- Play Songs from index --------------------

function play(index){
    console.log(index)
    if(!(songIndex==index)){
        document.getElementById(songIndex).classList.remove("fa-circle-pause")
        document.getElementById(songIndex).classList.add("fa-circle-play")
        songIndex=index
        audioObj.src = `songs/${songIndex}.mp3`;
    }
    else{

    }
    let elem=document.getElementById(index)

    if(!audioObj.paused){
        play_song.classList.remove("fa-circle-pause")
        play_song.classList.add("fa-circle-play")
        elem.classList.remove("fa-circle-pause")
        elem.classList.add("fa-circle-play")
        playing_gif.style.opacity='0'
        audioObj.pause()
        
    }
    else{
        play_song.classList.add("fa-circle-pause")
        play_song.classList.remove("fa-circle-play")
        elem.classList.add("fa-circle-pause")
        elem.classList.remove("fa-circle-play")
        playing_gif.style.opacity='1'
        audioObj.play()
       
    }
}

audioObj.addEventListener("timeupdate",()=>{
    progress=parseInt((audioObj.currentTime*100)/audioObj.duration)
    range.value=progress

    if(audioObj.currentTime>=audioObj.duration){
        range.value=0;
        play_song.classList.remove("fa-circle-pause")
        play_song.classList.add("fa-circle-play")
        document.getElementById(songIndex).classList.remove("fa-circle-pause")
    
        document.getElementById(songIndex).classList.add("fa-circle-play")
        playing_gif.style.opacity='0'

        if(songIndex>=1 && songIndex<(songs.length-1)){
            play(songIndex+1)
        }
    }
})
range.addEventListener("change",()=>{
    console.log("Hii")
    audioObj.currentTime=(range.value * audioObj.duration)/100

    
})


// ------------------------------Previous click event-----------------

previous.addEventListener("click",()=>{
    if(songIndex>1){
        play(songIndex-1)
    }
})

// ---------------------------- Next click event -----------------------

next.addEventListener("click",()=>{
    if(songIndex<(songs.length)){
        play(songIndex+1)
    }
})

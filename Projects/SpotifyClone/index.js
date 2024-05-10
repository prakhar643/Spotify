let songIndex = 0;
let audioElement = new Audio('./Clone/songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = Array.from(document.getElementsByClassName('masterSongName'));
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Wario", filePath:"./Clone/songs/1.mp3", coverPath: "./Clone/covers/1.jpg"},
    {songName: "Cielo", filePath:"./Clone/songs/2.mp3", coverPath: "./Clone/covers/2.jpg"},
    {songName: "Deaf", filePath:"./Clone/songs/3.mp3", coverPath: "./Clone/covers/3.jpg"},
    {songName: "Great", filePath:"./Clone/songs/4.mp3", coverPath: "./Clone/covers/4.jpg"},
    {songName: "Love Dose", filePath:"./Clone/songs/5.mp3", coverPath: "./Clone/covers/5.jpg"},
    {songName: "Blue Eyes", filePath:"./Clone/songs/6.mp3", coverPath: "./Clone/covers/6.jpg"},
    {songName: "No Way Home", filePath:"./Clone/songs/7.mp3", coverPath: "./Clone/covers/7.jpg"},
    {songName: "Habibi", filePath:"./Clone/songs/8.mp3", coverPath: "./Clone/covers/8.jpg"},
    {songName: "9 LPA", filePath:"./Clone/songs/9.mp3", coverPath: "./Clone/covers/9.jpg"},
    {songName: "Engineering", filePath:"./Clone/songs/10.mp3", coverPath: "./Clone/covers/10.jpg"}
]
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

masterPlay.addEventListener('click',()=>{
    if (audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');   
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');  
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate')
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
}
)}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `./Clone/songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex =0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `./Clone/songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex =0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `./Clone/songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
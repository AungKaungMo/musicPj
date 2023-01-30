
const playingSongImg = document.getElementById("playingSongImg");
const playingSongSingerName = document.getElementById("playingSongSingerName");
const playingSongName = document.getElementById("playingSongName");
const clickSong = document.getElementsByClassName("clickSong");
const clickSingerName = document.getElementsByClassName("clickSingerName");
const clickSingerSongName = document.getElementsByClassName("clickSingerSongName");
const clickAudio = document.getElementsByClassName("clickAudio");
const songTime = document.getElementById("songTime");
const playingTime = document.getElementById("playingTime");
const currentTimeWidth = document.getElementById("currentTimeWidth");
const playS = document.getElementById("play");
const pauseS = document.getElementById("pause");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const songLine = document.getElementsByClassName("song-line")[0];
const blankHeart = document.getElementById("blankHeart");
const fullHeart = document.getElementById("fullHeart");
// const OrgAudio = document.getElementById("OrgAudio");
const favouriteMusicBox = document.getElementsByClassName("favourite-music-box")[0];

let UserClickSongImg ;
let currentPlayingAudioIndex;
let audioDurationText;
// let randomSongs;

let favSongStop;

for(let i=0; i<clickSong.length; i++){
    
        clickSong[i].addEventListener("click",()=>{
            stopAllAudio();
            // document.getElementsByClassName("already")
            // randomSongs = Math.floor(Math.random() * clickSong.length);
           forSongContainerChange(i);
         if(clickAudio[i].classList.contains("favourite")){
            blankHeart.classList.add("blankHeartChg");
           fullHeart.classList.add("fullHeartChg");
          
         }
        })
    
    }
    playS.addEventListener("click",()=>{
        playS.classList.add("playChg");
        pauseS.classList.add("pausePlay");
        clickAudio[currentPlayingAudioIndex].play();
       })
       pauseS.addEventListener("click",()=>{
        playS.classList.remove("playChg");
        pauseS.classList.remove("pausePlay");
        clickAudio[currentPlayingAudioIndex].pause();
       })
       let counter = 0;
        next.addEventListener("click",()=>{
        stopAllAudio();
            clickAudio[counter].play();
            forSongContainerChange(counter);
// console.log(counter)
            counter += 1;
            if(counter == clickSong.length){
                counter = 0;
            }
        })

        prev.addEventListener("click",()=>{
            stopAllAudio();      
            clickAudio[counter].play();
            forSongContainerChange(counter);
    
            counter -= 1;
            if(counter == -1){
                counter = clickSong.length - 1;
            }
           })

    const forSongContainerChange = (something) =>{

        playingSongImg.src = clickSong[something].src;

        playingSongName.innerText = clickSingerSongName[something].innerText;
        playingSongSingerName.innerText = clickSingerName[something].innerText;
    
        playS.classList.add("playChg");
        pauseS.classList.add("pausePlay");
        clickAudio[something].play();
    
        currentPlayingAudioIndex = something;
        let audioDuration = Math.floor(clickAudio[something].duration);
        audioDurationText = forSongPlayTime(audioDuration);
        songTime.innerText = audioDurationText;
        
        let currentTim;
        clickAudio[something].addEventListener("timeupdate",()=>{
        currentTim = Math.floor(clickAudio[something].currentTime);
        let currentPlayingTime = forSongPlayTime(currentTim);
        playingTime.innerText = currentPlayingTime;
        
        const currentPlayingAudioWidth = (180/audioDuration) * currentTim;
        currentTimeWidth.style.width = currentPlayingAudioWidth.toString() + "px";

        if(currentTim == audioDuration){
            currentTim = 0;
            clickAudio[something].play()
        }
    })
    }


const forSongPlayTime = (totalSeconds)  => {
    const minute = Math.floor(totalSeconds / 60);
    const second = Math.floor(totalSeconds % 60);

    const audioMinute = minute < 10 ? "0"+ minute.toString() : minute;
    const audioSecond = second < 10 ? "0"+ second.toString() : second;

    return audioMinute + " : "+ audioSecond;
};

 

    songLine.addEventListener("click",(e)=>{
        let progressWidthval = songLine.clientWidth;

        // console.log(progressWidthval)
        let clickedOffSetX = e.offsetX;
       // console.log(clickedOffSetX);
        let songDuration ;
        if(clickAudio[currentPlayingAudioIndex].play()){
            songDuration = Math.floor(clickAudio[currentPlayingAudioIndex].duration);
            clickAudio[currentPlayingAudioIndex].currentTime = (clickedOffSetX/progressWidthval) * songDuration;
        }else{
            songDuration = Math.floor(clickAudio[counter].duration);
            clickAudio[counter].currentTime = (clickedOffSetX/progressWidthval) * songDuration;
        }
        // console.log(songDuration)

        
    });
    let box2 ;let horizontal;
    blankHeart.addEventListener("click",()=>{


     
        blankHeart.classList.add("blankHeartChg");
        fullHeart.classList.add("fullHeartChg");

        let forFavSongDuration;
        let forFavSongSinger;
        let forFavSongName;
        let favSongs;
        if(clickAudio[currentPlayingAudioIndex].play()){
            forFavSongDuration = forSongPlayTime(clickAudio[currentPlayingAudioIndex].duration);
                 forFavSongSinger = clickSingerName[currentPlayingAudioIndex].innerHTML;
            forFavSongName = clickSingerSongName[currentPlayingAudioIndex].innerHTML;
            favSongs = clickAudio[currentPlayingAudioIndex].src;
            clickAudio[currentPlayingAudioIndex].classList.add("favourite");
        }else{
            forFavSongDuration = forSongPlayTime(clickAudio[counter].duration);
            forFavSongSinger = clickSingerName[counter].innerHTML;
            forFavSongName = clickSingerSongName[counter].innerHTML;
            favSongs = clickAudio[counter].src;
            clickAudio[counter].classList.add("favourite");
        }

        box2 = document.createElement("div");
        box2.classList.add("favourite-box-line2");
        const musicDiv = document.createElement("div");
        musicDiv.classList.add("music-left-details");
        const musicSingerName = document.createElement("h3");
        musicSingerName.innerHTML = forFavSongSinger;
        const cdIcon = document.createElement("i");
        cdIcon.classList.add("fa-solid");
        cdIcon.classList.add("fa-compact-disc");
        const favouriteSong = document.createElement("audio");
        favouriteSong.src = favSongs;
       
        const spanSongName = document.createElement("span");
        spanSongName.innerHTML = forFavSongName;
        const timing = document.createElement("p");
        timing.innerHTML = forFavSongDuration;
        horizontal = document.createElement("hr");
        musicDiv.append(musicSingerName,cdIcon,spanSongName);
        box2.append(musicDiv,timing);
        favouriteMusicBox.append(box2,horizontal);
   
     

    });

    fullHeart.addEventListener("click",()=>{
       
            blankHeart.classList.remove("blankHeartChg");
            fullHeart.classList.remove("fullHeartChg");
            clickAudio[currentPlayingAudioIndex].classList.remove("favourite");
            clickAudio[counter].classList.remove("favourite");
            favouriteMusicBox.removeChild(box2);
            favouriteMusicBox.removeChild(horizontal);
         
    });
  
    function stopAllAudio(){
        blankHeart.classList.remove("blankHeartChg");
        fullHeart.classList.remove("fullHeartChg");
        for(let j=0; j<clickAudio.length; j++){
            clickAudio[j].pause();
            clickAudio[j].currentTime = 0;
        }
        
    };
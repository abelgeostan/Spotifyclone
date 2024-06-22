
let songIndex =0;
let audioELement = new Audio('assets/NGGYU.mp3')
let masterPlay=document.getElementById("masterPlay")
let progressBar=document.getElementById("myProgressBar")
let songItems=Array.from(document.getElementsByClassName("songItem"))



let songs=[
    {songName:"Never Gonna Give You Up",filepath:"/assets/NGGYU.mp3",coverPath:"/assets/never_coverpic.jpg"},
    {songName:"Devan kn",filepath:"/assets/1_track.mp3",coverPath:"/assets/1_cover.jpg"},
    {songName:"Tarun Nair",filepath:"/assets/2_track.mp3",coverPath:"/assets/2_cover.jpg"},
    {songName:"Teo thaliath",filepath:"/assets/3_track.mp3",coverPath:"/assets/3_cover.jpg"},
    {songName:"Mevin manual",filepath:"/assets/4_track.mp3",coverPath:"/assets/4_cover.jpg"},
    {songName:"Kurien Nakkara",filepath:"/assets/5_track.mp3",coverPath:"/assets/5_cover.jpg"},
    {songName:"Nafil Nasar",filepath:"/assets/6_track.mp3",coverPath:"/assets/6_cover.jpg"},
    {songName:"MS Saurav",filepath:"/assets/7_track.mp3",coverPath:"/assets/7_cover.jpg"}
]

songItems.forEach((element,i)=>{
    // console.log(element,i)
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
    

})

// audioELement.play();

masterPlay.addEventListener('click',()=>{
    if(audioELement.paused || audioELement.currentTime<=0){
        audioELement.play()
        masterPlay.classList.remove('fa-regular', 'fa-circle-play');
        masterPlay.classList.add('fa-regular', 'fa-circle-pause');

    } else {
        audioELement.pause()
        masterPlay.classList.remove('fa-regular','fa-circle-pause')
        masterPlay.classList.add('fa-regular','fa-circle-play')
    }
})

audioELement.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
    //updateseekbar
    progress=parseInt((audioELement.currentTime/audioELement.duration)*100)
    console.log(progress)
    myProgressBar.value=progress
    
})
myProgressBar.addEventListener('change',()=>{
        
    audioELement.currentTime = (myProgressBar.value * audioELement.duration)/100
})

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e);
        e.target.classList.remove('fa-regular', 'fa-circle-play');
        e.target.classList.add('fa-regular', 'fa-circle-pause');
    })
})
console.log("hello")
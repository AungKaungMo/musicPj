const header = document.querySelector(".header");
const homedot1 = document.getElementById("homedot1");
const homedot2 = document.getElementById("homedot2");
const homedot3 = document.getElementById("homedot3");

const conHeader = document.getElementById("conHeader");
const condot1 = document.getElementById("condot1");
const condot2 = document.getElementById("condot2");
const condot3 = document.getElementById("condot3");

const msHeader = document.getElementById("msHeader");
const msdot1 = document.getElementById("msdot1");
const msdot2 = document.getElementById("msdot2");
const msdot3 = document.getElementById("msdot3");

const newsHeader = document.getElementById("newsHeader");
const newdot1 = document.getElementById("newdot1");
const newdot2 = document.getElementById("newdot2");
const newdot3 = document.getElementById("newdot3");

function homeslide(hobj){
    if(hobj.id == "homedot1"){
        header.style.backgroundImage = 'url(./Img/Homeslider1.jpg)';
        homedot1.style.backgroundColor = 'red';
        homedot2.style.backgroundColor = 'white';
        homedot3.style.backgroundColor = 'white';
    }else if(hobj.id == "homedot2"){
        header.style.backgroundImage = 'url(./Img/Homeslider2.jpg)';
        homedot2.style.backgroundColor = 'red';
        homedot1.style.backgroundColor = 'white';
        homedot3.style.backgroundColor = 'white';
    }else{
        header.style.backgroundImage = 'url(./Img/Homeslider3.jpg)';
        homedot3.style.backgroundColor = 'red';
        homedot2.style.backgroundColor = 'white';
        homedot1.style.backgroundColor = 'white';
    }
}

function conslide(obj){
    if(obj.id == "condot1"){
        conHeader.style.backgroundImage = 'url(./Img/concertSlider1.jpg)';
        condot1.style.backgroundColor = 'red';
        condot2.style.backgroundColor = 'white';
        condot3.style.backgroundColor = 'white';
    }else if(obj.id == "condot2"){
        conHeader.style.backgroundImage = 'url(./Img/concertSlider2.png)';
        condot2.style.backgroundColor = 'red';
        condot1.style.backgroundColor = 'white';
        condot3.style.backgroundColor = 'white';
    }else{
        conHeader.style.backgroundImage = 'url(./Img/concertSlider3.jpg)';
        condot3.style.backgroundColor = 'red';
        condot2.style.backgroundColor = 'white';
        condot1.style.backgroundColor = 'white';
    }
}
function msislide(mobj){
    if(mobj.id == "msdot1"){
        msHeader.style.backgroundImage = 'url(./Img/SongSlider1.jpg)';
        msdot1.style.backgroundColor = 'red';
        msdot2.style.backgroundColor = 'white';
        msdot3.style.backgroundColor = 'white';
    }else if(mobj.id == "msdot2"){
        msHeader.style.backgroundImage = 'url(./Img/songslider2.jpg)';
        msdot2.style.backgroundColor = 'red';
        msdot1.style.backgroundColor = 'white';
        msdot3.style.backgroundColor = 'white';
    }else{
        msHeader.style.backgroundImage = 'url(./Img/songslider3.jpg)';
        msdot3.style.backgroundColor = 'red';
        msdot2.style.backgroundColor = 'white';
        msdot1.style.backgroundColor = 'white';
    }
}

function newsslide(nobj){
    if(nobj.id == "newdot1"){
        newsHeader.style.backgroundImage = 'url(./Img/newsslide1.jpg)';
        newdot1.style.backgroundColor = 'red';
        newdot2.style.backgroundColor = 'white';
        newdot3.style.backgroundColor = 'white';
    }else if(nobj.id == "newdot2"){
        newsHeader.style.backgroundImage = 'url(./Img/newsslide2.jpg)';
        newdot2.style.backgroundColor = 'red';
        newdot1.style.backgroundColor = 'white';
        newdot3.style.backgroundColor = 'white';
    }else{
        newsHeader.style.backgroundImage = 'url(./Img/newsslide3.jpg)';
        newdot3.style.backgroundColor = 'red';
        newdot2.style.backgroundColor = 'white';
        newdot1.style.backgroundColor = 'white';
    }
}

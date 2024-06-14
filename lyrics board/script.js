/**
* api haku @author Veeti
*/
var artist = "Five Finger Death Punch";
var title = "Welcome to the circus";

var artist1 = artist.replace(" ", "%20")
var title1 = title.replace(" ", "%20")

var api_url = `https://private-anon-d5611ba563-lyricsovh.apiary-proxy.com/v1/${artist1}/${title1}`;

function getAllWords(str) {
    if (str ==='') {
        return[];
    }
    return str.split(' ');
}

async function get_lyrics() {
    const response = await fetch(api_url);
    const data = await response.json();
    const {lyrics} = data;

    const fixed_lyrics = lyrics.replace(/(\r\n|\n|\r)/gm," ");

    const artist_len = artist.length;
    const title_len = title.length;
    const slicer = artist_len + title_len + 28;
    const sliced = fixed_lyrics.slice(slicer);

    const lyrics_list = getAllWords(sliced);

    const lyrics_list_len = lyrics_list.length - 6;

    const choose_lyrics = Math.floor(Math.random() * lyrics_list_len);
    const chosen_lyrics1 = lyrics_list[choose_lyrics];
    const chosen_lyrics2 = lyrics_list[choose_lyrics + 1];
    const chosen_lyrics3 = lyrics_list[choose_lyrics + 2];
    const chosen_lyrics4 = lyrics_list[choose_lyrics + 3];
    const chosen_lyrics5 = lyrics_list[choose_lyrics + 4];
    const chosen_lyrics6 = lyrics_list[choose_lyrics + 5];

    document.getElementById("lyrics").innerText = chosen_lyrics1 + " " + chosen_lyrics2 + " " + chosen_lyrics3 + " " + chosen_lyrics4 + " " + chosen_lyrics5 + " " + chosen_lyrics6;
    
    console.log(chosen_lyrics1, chosen_lyrics2, chosen_lyrics3, chosen_lyrics4, chosen_lyrics5, chosen_lyrics6);

    document.getElementById("lyrics1").innerText = chosen_lyrics1;
    document.getElementById("lyrics2").innerText = chosen_lyrics2;
    document.getElementById("lyrics3").innerText = chosen_lyrics3;
    document.getElementById("lyrics4").innerText = chosen_lyrics4;
    document.getElementById("lyrics5").innerText = chosen_lyrics5;
    document.getElementById("lyrics6").innerText = chosen_lyrics6;
}

get_lyrics();

function show1() {
    document.getElementById("lyrics1").style.display = "block";
}

function show2() {
    document.getElementById("lyrics2").style.display = "block";
}

function show3() {
    document.getElementById("lyrics3").style.display = "block";
}

function show4() {
    document.getElementById("lyrics4").style.display = "block";
}

function show5() {
    document.getElementById("lyrics5").style.display = "block";
}

function show6() {
    document.getElementById("lyrics6").style.display = "block";
}
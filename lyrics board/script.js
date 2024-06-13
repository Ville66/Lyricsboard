/**
* api haku testi @author Veeti
*/
var artist = "Metallica";
var title = "Enter sandman";

var api_url = `https://private-anon-d5611ba563-lyricsovh.apiary-proxy.com/v1/Metallica/Enter%20sandman`;

async function get_lyrics() {
    const response = await fetch(api_url);
    const data = await response.json();
    const {lyrics} = data;
    console.log(lyrics);

    document.getElementById('lyrics').textContent = lyrics;
}

get_lyrics();
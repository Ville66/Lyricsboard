/**
* api haku @author Veeti
*/
var artist = "Survivor";
var title = "Eye of the Tiger";

var artist1 = artist.replace(" ", "%20");
var title1 = title.replace(" ", "%20");

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

    const fixed_lyrics1 = lyrics.replace(/(\r\n|\n|\r)/gm," ");
    const fixed_lyrics2 = fixed_lyrics1.replace(/\s+/g, ' ');

    const artist_len = artist.length;
    const title_len = title.length;
    const slicer = artist_len + title_len + 28;
    const sliced = fixed_lyrics2.slice(slicer);

    const lyrics_list = getAllWords(sliced);

    const lyrics_list_len = lyrics_list.length - 6;

    const choose_lyrics = Math.floor(Math.random() * lyrics_list_len);
    const chosen_lyrics1 = lyrics_list[choose_lyrics];
    const chosen_lyrics2 = lyrics_list[choose_lyrics + 1];
    const chosen_lyrics3 = lyrics_list[choose_lyrics + 2];
    const chosen_lyrics4 = lyrics_list[choose_lyrics + 3];
    const chosen_lyrics5 = lyrics_list[choose_lyrics + 4];
    const chosen_lyrics6 = lyrics_list[choose_lyrics + 5];

    //document.getElementById("lyrics").innerText = chosen_lyrics1 + " " + chosen_lyrics2 + " " + chosen_lyrics3 + " " + chosen_lyrics4 + " " + chosen_lyrics5 + " " + chosen_lyrics6;
    
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
    document.getElementById("lyrics1").style.visibility = "visible";
}

function show2() {
    document.getElementById("lyrics2").style.visibility = "visible";
}

function show3() {
    document.getElementById("lyrics3").style.visibility = "visible";
}

function show4() {
    document.getElementById("lyrics4").style.visibility = "visible";
}

function show5() {
    document.getElementById("lyrics5").style.visibility = "visible";
}

function show6() {
    document.getElementById("lyrics6").style.visibility = "visible";
}

var points_counter = 0;

function guess1() {
    const try1 = document.getElementById("guess_input1");

    if (try1.value == "Eye of the Tiger") {
        points_counter += 10;
        document.getElementById("points_counter").innerText = points_counter;
        
        document.getElementById("song1guess").style.display = "none";
        document.getElementById("song2guess").style.display = "block";
        
        document.getElementById("lyrics1").style.visibility = "hidden";
        document.getElementById("lyrics2").style.visibility = "hidden";
        document.getElementById("lyrics3").style.visibility = "hidden";
        document.getElementById("lyrics4").style.visibility = "hidden";
        document.getElementById("lyrics5").style.visibility = "hidden";
        document.getElementById("lyrics6").style.visibility = "hidden";

        artist = "Smash Mouth";
        title = "All Star";

        artist1 = artist.replace(" ", "%20");
        title1 = title.replace(" ", "%20");

        api_url = `https://private-anon-d5611ba563-lyricsovh.apiary-proxy.com/v1/${artist1}/${title1}`;

        get_lyrics();


        alert("Right answer! +10 points! Guess the next song!")
    } else {
        points_counter -= 1;
        document.getElementById("points_counter").innerText = points_counter;
        alert("Wrong answer! -1 point! Try again!");
    }
}

function guess2() {
    const try2 = document.getElementById("guess_input2");

    if (try2.value == "All Star") {
        points_counter += 10;
        document.getElementById("points_counter").innerText = points_counter;
        
        document.getElementById("song2guess").style.display = "none";
        document.getElementById("song3guess").style.display = "block";
        
        document.getElementById("lyrics1").style.visibility = "hidden";
        document.getElementById("lyrics2").style.visibility = "hidden";
        document.getElementById("lyrics3").style.visibility = "hidden";
        document.getElementById("lyrics4").style.visibility = "hidden";
        document.getElementById("lyrics5").style.visibility = "hidden";
        document.getElementById("lyrics6").style.visibility = "hidden";

        artist = "Aerosmith";
        title = "Dream On";

        artist1 = artist.replace(" ", "%20");
        title1 = title.replace(" ", "%20");

        api_url = `https://private-anon-d5611ba563-lyricsovh.apiary-proxy.com/v1/${artist1}/${title1}`;

        get_lyrics();


        alert("Right answer! +10 points! Guess the next song!")
    } else {
        points_counter -= 1;
        document.getElementById("points_counter").innerText = points_counter;
        alert("Wrong answer! -1 point! Try again!");
    }
}

function guess3() {
    const try3 = document.getElementById("guess_input3");

    if (try3.value == "Dream On") {
        points_counter += 10;
        document.getElementById("points_counter").innerText = points_counter;
        
        document.getElementById("song3guess").style.display = "none";
        
        document.getElementById("lyrics1").style.visibility = "hidden";
        document.getElementById("lyrics2").style.visibility = "hidden";
        document.getElementById("lyrics3").style.visibility = "hidden";
        document.getElementById("lyrics4").style.visibility = "hidden";
        document.getElementById("lyrics5").style.visibility = "hidden";
        document.getElementById("lyrics6").style.visibility = "hidden";

        alert(`Right answer! You win! You got ${points_counter} points!"`)
    } else {
        points_counter -= 1;
        document.getElementById("points_counter").innerText = points_counter;
        alert("Wrong answer! -1 point! Try again!");
    }
}
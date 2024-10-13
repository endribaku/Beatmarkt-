function Track(image, title, track_length, bpm, price, tag1, tag2, tag3, genre, audio) {
    this.image = image;
    this.title = title;
    this.tracklength = track_length;
    this.bpm = bpm;
    this.price = price;
    this.tag1 = tag1;
    this.tag2 = tag2;
    this.tag3 = tag3;
    this.genre = genre;
    this.audio = audio;
}




// Genre and BPM filters
let Genres = [ "Hip-hop", "Trap", "Pop", "R&B", "Rock", 
                "Electronic", "Reggae", "Country", 
                "World", "Drill", "Hyperpop", 
                "Lo-fi", "Neo Soul"];



// All tracks content

let img1 = new Image();
img1.src = "../images/beat-images/sandman.webp";
let img2 = new Image();
img2.src = "../images/beat-images/nomads.webp";
let img3 = new Image();
img3.src = "../images/beat-images/letmedown.webp";
let img4 = new Image();
img4.src = "../images/beat-images/longtalk.webp";
let img5 = new Image();
img5.src = "../images/beat-images/misery.png";
let img6 = new Image();
img6.src = "../images/beat-images/supervention.webp";
let img7 = new Image();
img7.src = "../images/beat-images/jersey.webp";
let img8 = new Image();
img8.src = "../images/beat-images/smoke.webp";

// audio files
let audio1 = new Audio("../audio/sandman-buy-2-get-1-free_TK12131454.mp3.mp3");
let audio2 = new Audio("../audio/nomads-buy-2-get-1-free_TK11752897.mp3.mp3")
let audio3 = new Audio("../audio/let-me-down-buy-2-get-1-free_TK17729388.mp3.mp3")
let audio4 = new Audio("../audio/long-talk-buy-2-get-1-free_TK16585534.mp3.mp3")
let audio6 = new Audio("../audio/supervention-buy-2-get-1-free_TK15737160.mp3.mp3")
let audio8 = new Audio("../audio/smoke-buy-2-get-1-free_11318083.mp3");


let tracklistArray = [];


let track1 = new Track(img1.src, "SANDMAN (BUY 2 GET 1 FREE)", "2:12", 
    "96", "$19.95", "utopia", "asap rocky", undefined, "Trap", audio1);
tracklistArray.push(track1);

let track2 = new Track(img2.src, "NOMADS (BUY 2 GET 1 FREE)", 
    "3:06", "136", "$19.95", "kendrick lamar", "baby keem", "kodak black", "Trap", audio2);
tracklistArray.push(track2);

let track3 = new Track(img3.src, "LET ME DOWN (BUY 2 GET 1 FREE)", "3:05", 
    "166", "$19.95", "ty dolla sign", "vultures", "kanye west", "Hip-hop", audio3);
tracklistArray.push(track3);

let track4 = new Track(img4.src, "LONG TALK (BUY 2 GET 1 FREE)", "3:18", 
    "145", "$19.95", "soul", "pray for paris", "westside gunn", "Hip-hop", audio4);
tracklistArray.push(track4);

let track5 = new Track(img5.src, "MISERY (BUY 2 GET 1 FREE", "3:22", 
    "152", "$19.95", "playboi carti", "wlr", "rage", "Rock");
tracklistArray.push(track5);

let track6 = new Track(img6.src, "SUPERVENTION (BUY 2 GET 1 FREE)", "3:40", 
    "125", "$19.95", "clams casino", "asap rocky", "ambient", "Lo-fi", audio6);
tracklistArray.push(track6);

let track7 = new Track(img7.src, "JERSEY (BUY 2 GET 1 FREE)", "3:47", "114", 
    "$19.95", "drake", "honestly nevermind", "dance", "Electronic");
tracklistArray.push(track7);

let track8 = new Track(img8.src, "SMOKE (BUY 2 GET 1 FREE)", "3:08", "121", "$19.95", 
    "travis scott", "travis scott utopia", "kanye west", "Trap", audio8);
tracklistArray.push(track8);





// tracklist creator
function createTracklist(tracklistArray) {
    
    let tracklist = document.querySelector(".track-list");
    

    // Info for each track
    tracklistArray.forEach( (track) => {
        
        let trackInfo = document.createElement("div");
        trackInfo.classList.add("track-info");
        tracklist.appendChild(trackInfo);
          
        let trackImage = document.createElement("div");
        trackImage.classList.add("track-image");
        trackImage.style.backgroundImage = `url(${track.image})`;
        trackImage.style.backgroundSize = 'contain';
        trackInfo.appendChild(trackImage);

        let trackData = document.createElement("div");
        trackData.classList.add("track-data");
        trackInfo.appendChild(trackData);

        let trackNameTags = document.createElement("div");
        trackNameTags.classList.add("track-name-tags");
        trackData.appendChild(trackNameTags);

        let trackName = document.createElement("div");
        trackName.classList.add("track-title");
        trackName.textContent = track.title;
        trackNameTags.appendChild(trackName);

        let trackTags = document.createElement("div");
        trackTags.classList.add("track-tag");
        trackNameTags.appendChild(trackTags);      
        if(track.tag1 != undefined) {
            
            let tag1 = document.createElement("div");
            tag1.classList.add("tag1");
            trackTags.appendChild(tag1);

            let tagText = document.createElement("div");
            tagText.classList.add("tag-text");
            tagText.textContent = track.tag1;
            
            let hashimg = document.createElement("img");
            hashimg.src = "../images/hash icon.png";

            tag1.appendChild(hashimg);
            tag1.appendChild(tagText);
        }
        if(track.tag2 != undefined) {
            let tag2 = document.createElement("div");
            tag2.classList.add("tag2");
            trackTags.appendChild(tag2);

            let tagText = document.createElement("div");
            tagText.classList.add("tag-text");
            tagText.textContent = track.tag2;
            
            let hashimg = document.createElement("img");
            hashimg.src = "../images/hash icon.png";

            tag2.appendChild(hashimg);
            tag2.appendChild(tagText);
        }
        if(track.tag3 != undefined) {
            let tag3 = document.createElement("div");
            tag3.classList.add("tag3");
            trackTags.appendChild(tag3);

            let tagText = document.createElement("div");
            tagText.classList.add("tag-text");
            tagText.textContent = track.tag3;
            
            let hashimg = document.createElement("img");
            hashimg.src = "../images/hash icon.png";

            tag3.appendChild(hashimg);
            tag3.appendChild(tagText);
        }

        let trackDetails = document.createElement("div");
        trackDetails.classList.add("track-details");
        trackData.appendChild(trackDetails);
            let trackLength = document.createElement("div");
            trackLength.classList.add("track-length");
            trackDetails.appendChild(trackLength);
            
            let textLength = document.createElement("div");
            textLength.classList.add("text-length");
            textLength.textContent = "Length";
            trackLength.appendChild(textLength);
            
            let detailValue = document.createElement("div");
            detailValue.classList.add("detail-value");
            
            let audioElement = track.audio;  // Assuming track.audio is an HTMLAudioElement
        
    // Listen for the 'loadedmetadata' event to make sure the duration is available
            audioElement.addEventListener('loadedmetadata', () => {
                let trackAudioLength = Math.floor(audioElement.duration);
                let trackMinutes = Math.floor(trackAudioLength / 60);
                let trackSeconds = trackAudioLength % 60;

                 if (trackSeconds < 10) {
                trackSeconds = "0" + trackSeconds;
                }
                detailValue.textContent = `${trackMinutes}:${trackSeconds}`;
                console.log(`Track length: ${trackMinutes}:${trackSeconds}`);
                });
            
            trackLength.appendChild(detailValue);
            
            
            let trackBpm = document.createElement("div");
            trackBpm.classList.add("track-bpm");
            trackDetails.appendChild(trackBpm);

            let bpm = document.createElement("div");
            bpm.classList.add("bpm-value");
            bpm.textContent = "BPM";
            trackBpm.appendChild(bpm);
            let bpmValue = document.createElement("div");
            bpmValue.classList.add("detail-value");
            bpmValue.textContent = track.bpm;
            trackBpm.appendChild(bpmValue);

            let trackButtons = document.createElement("div");
            trackButtons.classList.add("track-buttons");
            trackDetails.appendChild(trackButtons);

            let downloadButton = document.createElement("button");
            downloadButton.type = "button";
            downloadButton.classList.add("download-button");
            let downloadImage = document.createElement("img");
            downloadImage.src = "../images/download-icon.png";
            downloadButton.appendChild(downloadImage);
            trackButtons.appendChild(downloadButton);
            
            let shareButton = document.createElement("button");
            shareButton.type = "button";
            shareButton.classList.add("share-button");
            let shareButtonImage = document.createElement("img");
            shareButtonImage.src = "../images/share icon.png";
            shareButton.appendChild(shareButtonImage);
            trackButtons.appendChild(shareButton);
            
            let buyButton = document.createElement("button");
            buyButton.type = "button";
            buyButton.classList.add("buy-button");
            let buyButtonImage = document.createElement("img");
            buyButtonImage.classList.add("buy-icon");
            buyButtonImage.src = "../images/shopping-cart.png";
            let buyButtonPrice = document.createElement("div");
            buyButtonPrice.classList.add("buy-price");
            buyButtonPrice.textContent = track.price;
            trackButtons.appendChild(buyButton);
            buyButton.appendChild(buyButtonImage);
            buyButton.appendChild(buyButtonPrice);
            

            //Add Event Listener
            trackInfo.addEventListener("mouseenter", () => {
                trackInfo.classList.add("selectedTrack");
                
                let playImage = document.createElement("img");
                playImage.classList.add("playImage");
                playImage.src = "../images/player-play.svg";
                
                trackImage.classList.add("selectedTrackImage");
                
                trackImage.appendChild(playImage);
                
               
                trackInfo.addEventListener("mouseleave", removeSelectedTrack);
                
                trackInfo.addEventListener("click", () => {
                    if(document.querySelector(".track-playback") == undefined) {
                        createTrackPlayer(track);
                        trackInfo.classList.add("selectedTrack");
                        trackInfo.removeEventListener("mouseleave", () => removeSelectedTrack);
                    } else {
                        let trackPlayback = document.querySelector(".track-playback");
                        let body = document.querySelector("body");
                        body.removeChild(trackPlayback);

                        createTrackPlayer(track);
                        trackInfo.classList.add("selectedTrack");
                        trackInfo.removeEventListener("mouseleave", () => removeSelectedTrack);

                    }      
                });                 
            })        
    }) 
}




function removeSelectedTrack() {
    let trackInfo = document.querySelector(".selectedTrack");
    trackInfo.classList.remove("selectedTrack");
    
    let trackImage = document.querySelector(".selectedTrackImage")
    trackImage.classList.remove("selectedTrackImage");
    
    let playImage = document.querySelector(".playImage");
    trackImage.removeChild(playImage);
  
}


function createTrackPlayer(track) {
    let body = document.querySelector("body");
    let trackPlayback = document.createElement("div");
    trackPlayback.classList.add("track-playback");
    body.appendChild(trackPlayback);
    
    let trackCaptions = document.createElement("div");
    trackCaptions.classList.add("track-captions");
    trackPlayback.appendChild(trackCaptions);

    let audioImageLink = document.createElement("div");
    audioImageLink.classList.add("audio-image");
    let audioImage = document.createElement("img");
    audioImage.src = track.image;
    audioImage.classList.add("audio-image-link");
    trackCaptions.appendChild(audioImageLink);
    audioImageLink.appendChild(audioImage);

    let trackNames = document.createElement("div");
    trackNames.classList.add("track-names");
    let trackName = document.createElement("div");
    trackName.textContent = track.title;
    trackName.classList.add("track-name");
    let trackCreator = document.createElement("div");
    trackCreator.textContent = "endribaku";
    trackCreator.classList.add("track-creator");
    trackCaptions.appendChild(trackNames);
    trackNames.appendChild(trackName);
    trackNames.appendChild(trackCreator);

    let trackAudio = document.createElement("div");
    trackAudio.classList.add("track-audio");
    trackPlayback.appendChild(trackAudio);

    let audioButtons = document.createElement("div");
    audioButtons.classList.add("audio-buttons");
    trackAudio.appendChild(audioButtons);
    
    //// all buttons
        let repeat = document.createElement("button");
        repeat.classList.add("repeat");
        let repeatImage = document.createElement("img");
        repeatImage.src = "../images/repeating.svg";
        audioButtons.appendChild(repeat);
        repeat.appendChild(repeatImage);

        let skipBack = document.createElement("button");
        skipBack.classList.add("skip-back");
        let skipBackImage = document.createElement("img");
        skipBackImage.src = "../images/skip-back.svg"
        audioButtons.appendChild(skipBack);
        skipBack.appendChild(skipBackImage);

        let pause = document.createElement("button");
        pause.classList.add("pause");
        let pauseImage = document.createElement("img");
        pauseImage.src = "../images/pause.svg";
        audioButtons.appendChild(pause);
        pause.appendChild(pauseImage);

        let skipForward = document.createElement("button");
        skipForward.classList.add("skip-forward");
        let skipForwardImage = document.createElement("img");
        skipForwardImage.src = "../images/skip-forward.svg";
        audioButtons.appendChild(skipForward);
        skipForward.appendChild(skipForwardImage);

        let shuffling = document.createElement("button");
        shuffling.classList.add("shuffling");
        let shufflingImage = document.createElement("img");
        shufflingImage.src = "../images/shuffling.svg";
        audioButtons.appendChild(shuffling);
        shuffling.appendChild(shufflingImage);
    
    let trackLength = document.createElement("div");
    let trackAudioLength = parseInt(track.audio.duration)
    trackLength.classList.add("track-timelength");
    trackAudio.appendChild(trackLength);
        let trackMinutes = parseInt(trackAudioLength / 60);
        let trackSeconds = trackAudioLength % 60;
        
        if(trackSeconds < 10) {
            trackSeconds = "0" + trackSeconds;
        }
        let currentTime = document.createElement("div");
        currentTime.classList.add("current-time");
        currentTime.textContent = "0:00";
        trackLength.appendChild(currentTime);
        
        let timeSlider = document.createElement("input");
        timeSlider.classList.add("time-slider")
        timeSlider.type = "range";
        timeSlider.min = "0";
        timeSlider.max = track.audio.duration;
        timeSlider.step =  "0.1";
        trackLength.appendChild(timeSlider);
        
        let trackTime = document.createElement("div");
        trackTime.classList.add("track-time");
        trackTime.textContent = `${trackMinutes}:${trackSeconds}`;
        trackLength.appendChild(trackTime);

        
        let audioCustomization = document.createElement("div");
        trackPlayback.appendChild(audioCustomization);

        let volumeSliderImage = document.createElement("img");
        volumeSliderImage.src = "../images/volume.png";
        audioCustomization.appendChild(volumeSliderImage);
        
        let volumeSlider = document.createElement("input");
        volumeSlider.classList.add("volume-slider");
        volumeSlider.type = "range";
        volumeSlider.min = "0";
        volumeSlider.max = "100";
        audioCustomization.appendChild(volumeSlider);
};





function removeMenu() {
    let menu = document.getElementsByClassName(".dropdown-menu");
    menu[0].remove();
    genre_filter.removeEventListener("click", removeMenu);
    genre_filter.addEventListener("click", addGenreDropdownList);
}




// event listener function
function addGenreDropdownList() {
    
    genre_filter.removeEventListener("click", addGenreDropdownList);
    let dropDownMenu = document.createElement("div");
    dropDownMenu.classList.add(".dropdown-menu");
    filter.appendChild(dropDownMenu);

    //style
    dropDownMenu.style.height = "160px";
    dropDownMenu.style.position = "absolute";
    dropDownMenu.style.width = "120px";
    
    
    let dropDownContent = document.createElement("div");
    dropDownContent.classList.add(".dropdown-content");
    dropDownMenu.appendChild(dropDownContent);

    // style
    dropDownContent.style.listStyle = "none";
    dropDownContent.style.boxShadow = "0px 1px 2px 0px #00000040";
    dropDownContent.style.backgroundColor = "hsl(240, 7%, 8%)";
    dropDownContent.style.border = "1px solid #2D2E33";
    dropDownContent.style.borderRadius = "12px";
    dropDownContent.style.height = "160px";
    dropDownContent.style.width = "115px";
    dropDownContent.style.overflow = "scroll";
    dropDownContent.style.position = "absolute";
    dropDownContent.style.marginBlockStart = "10px";
    


    Genres.forEach( (genre) => {
        let dropDownGenre = document.createElement("li");
        dropDownGenre.classList.add(".dropdown-genre")
        dropDownGenre.textContent = genre;
        dropDownContent.appendChild(dropDownGenre);

        dropDownGenre.style.borderBlockEnd = "1px solid rgb(32, 32, 39)";
        dropDownGenre.style.fontSize = "11px";
        dropDownGenre.style.color = "#585860";
        dropDownGenre.style.paddingBlock = "10px";
        dropDownGenre.style.paddingInlineStart = "10px";
        dropDownGenre.addEventListener("mouseover", () => {
            dropDownGenre.style.color = "white";
        })
        dropDownGenre.addEventListener("mouseleave", () => {
            dropDownGenre.style.color = "#585860";
        })
        dropDownGenre.addEventListener("click", () => {
            let tracklist = document.querySelector(".track-list");
            let allTracks = document.querySelectorAll(".track-info");
            allTracks = Array.from(allTracks);
            let newTracklistArray = tracklistArray.filter((track) => {
               return track.genre == dropDownGenre.textContent;
            } );
            allTracks.forEach((track) => {
                tracklist.removeChild(track);
            });
            createTracklist(newTracklistArray);
        })
    })

    
    
    dropDownContent.addEventListener("click", removeMenu);
    genre_filter.addEventListener("click", removeMenu); 


}


function removeBpmRange() {
    let bpm_menu = document.getElementsByClassName("bpm-specifier");
    bpm_menu[0].remove();
    
    bpm_filter.removeEventListener("click", removeBpmRange);
    bpm_filter.addEventListener("click", addBpmRange);
    
}


function addBpmRange() {
    

    let bpm_specifier = document.createElement("div");
    bpm_specifier.classList.add("bpm-specifier");

    let bpmdropDownMenu = document.querySelector(".bpm-dropdown");
    bpmdropDownMenu.appendChild(bpm_specifier);

    let from_range = document.createElement("input");
    from_range.type = "text";
    from_range.placeholder = "0";
    from_range.classList.add("bpm-from");

    bpm_specifier.appendChild(from_range);

    let to_text = document.createElement("div");
    to_text.classList.add("to");
    to_text.textContent = "to"

    bpm_specifier.appendChild(to_text);

    let to_range = document.createElement("input");
    to_range.type = "text";
    to_range.placeholder = "300";
    to_range.classList.add("bpm-to");
    to_range.value = "300";

    bpm_specifier.appendChild(to_range);

    bpm_filter.removeEventListener("click", addBpmRange);
    bpm_filter.addEventListener("click", removeBpmRange);

    from_range.addEventListener("change", () => {
        let tracklist = document.querySelector(".track-list");
        let allTracks = document.querySelectorAll(".track-info");
        
        allTracks = Array.from(allTracks);
        let newTracklistArray = tracklistArray.filter( (track) => {
            return ((track.bpm >= Number(from_range.value)) && (track.bpm <= Number(to_range.value)));
        })
        allTracks.forEach((track) => {
            tracklist.removeChild(track);
        });
        createTracklist(newTracklistArray);
    })
    

    to_range.addEventListener("change", () => {
        let tracklist = document.querySelector(".track-list");
        let allTracks = document.querySelectorAll(".track-info");
        
        allTracks = Array.from(allTracks);
        let newTracklistArray = tracklistArray.filter( (track) => {
            return ((track.bpm >= Number(from_range.value)) && (track.bpm <= Number(to_range.value)));
        })
        allTracks.forEach((track) => {
            tracklist.removeChild(track);
        });
        createTracklist(newTracklistArray);
    })
}

function searchBarFilter() {
    let tracklist = document.querySelector(".track-list");
    let allTracks = document.querySelectorAll(".track-info");
    allTracks = Array.from(allTracks);
    let word = search_bar.value;
    word = Array.from(word);

    let newTracklistArray = tracklistArray.filter( (track) => {
        let yes = false;
        let trackname = Array.from(track.title);
        for(let i = 0; i < word.length; i++) {
            if(word[i].toUpperCase() == trackname[i].toUpperCase()) {
                yes = true;
            } else {
                yes = false;
                break;
            }    
        }
        //if search bar is empty
        if (word.length == 0) {
            yes = true;
        }
        return yes;
    });
    
    allTracks.forEach((track) => {
        tracklist.removeChild(track);
    });
    createTracklist(newTracklistArray);
    
}














// event listener
let filter = document.querySelector(".genre-dropdown");

let genre_filter = document.querySelector(".genre-filter-image");
genre_filter.addEventListener("click", addGenreDropdownList);

let bpm_filter = document.querySelector(".bpm-filter-image");
bpm_filter.addEventListener("click", addBpmRange);

let search_bar = document.querySelector(".search-bar");
search_bar.addEventListener("change", searchBarFilter);



// function calls
createTracklist(tracklistArray);










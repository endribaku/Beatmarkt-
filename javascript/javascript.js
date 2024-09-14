function Track(image, title, track_length, bpm, price, tag1, tag2, tag3, genre) {
    this.image = image;
    this.title = title;
    this.tracklength = track_length;
    this.bpm = bpm;
    this.price = price;
    this.tag1 = tag1;
    this.tag2 = tag2;
    this.tag3 = tag3;
    this.genre = genre;
}




// Genre and BPM filters
let Genres = [ "Hip-hop", "Pop", "R&B", "Rock", 
                "Electronic", "Reggae", "Country", 
                "World", "Drill", "Hyperpop", 
                "Lo-fi", "Neo Soul"];




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

    bpm_specifier.appendChild(to_range);

    bpm_filter.removeEventListener("click", addBpmRange);
    bpm_filter.addEventListener("click", removeBpmRange);


}

// event listener
let filter = document.querySelector(".genre-dropdown");

let genre_filter = document.querySelector(".genre-filter-image");
genre_filter.addEventListener("click", addGenreDropdownList);

let bpm_filter = document.querySelector(".bpm-filter-image");
bpm_filter.addEventListener("click", addBpmRange);



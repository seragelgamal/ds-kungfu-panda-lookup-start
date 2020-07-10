// Kung Fu Panda Look Up

let characterArray = [];
createCharacterArray();
let slideIndex = 0;

// Event Listener
document.getElementById('search').addEventListener('click', characterSearch);
document.getElementById('prev').addEventListener('click', previousSlide);
document.getElementById('next').addEventListener('click', nextSlide);

// Event Function
function characterSearch() {
    // Get Input Value (what character to look for?)
    let name = document.getElementById('input-name').value;
    name = name.toLowerCase();

    let characterIndex = getCharacterIndexByName(name);
    slideIndex = characterIndex;
    if (characterIndex == -1) {
        displayQuestionMark();
    } else {
        displayCharacter(characterArray[characterIndex]);
    }

}

function previousSlide() {
    slideIndex--;
    if (slideIndex == -1) {
        slideIndex = characterArray.length - 1;
    }
    displayCharacter(characterArray[slideIndex]);
}

function nextSlide() {
    slideIndex++;
    if (slideIndex == characterArray.length) {
        slideIndex = 0;
    }
    displayCharacter(characterArray[slideIndex]);
}

function displayCharacter(characterObject) {
    // Update page to new character info
    document.getElementById('main-img').src = 'images/' + characterObject.imgPath;
    document.getElementById('character-name').innerHTML = characterObject.name;
    document.getElementById('quote').innerHTML = characterObject.quote;
    document.getElementById('wiki-link').innerHTML = characterObject.name + ' Wiki';
    document.getElementById('wiki-link').href = 'https://kungfupanda.fandom.com/wiki/' + characterObject.urlName;
}

function displayQuestionMark() {
    // Update page to Question Mark
    document.getElementById('main-img').src = 'images/question-mark.png';
    document.getElementById('character-name').innerHTML = '?????';
    document.getElementById('quote').innerHTML = '"Character Not Found"';
    document.getElementById('wiki-link').innerHTML = 'Wiki Home';
    document.getElementById('wiki-link').href = 'https://kungfupanda.fandom.com/wiki/Kung_Fu_Panda_Wiki';
}

function createCharacterArray() {
    fetch("character-data.txt")
        .then((rawData) => rawData.text())
        .then(processData);


}

function processData(data) {
    let lines = data.split("\r\n");
    for (let i = 0; i < lines.length; i++) {
        let lineArray = lines[i].split(';');
        characterArray.push({
            name: lineArray[0],
            quote: lineArray[1],
            imgPath: lineArray[2],
            urlName: lineArray[3]
        });
    }
}

function getCharacterIndexByName(name) {
    for (let i = 0; i < characterArray.length; i++) {
        if (characterArray[i].name.toLowerCase() == name) {
            return i;
        }
    }
    return -1;
}
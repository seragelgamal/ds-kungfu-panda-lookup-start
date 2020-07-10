// Kung Fu Panda Look Up

// Event Listener
document.getElementById('search').addEventListener('click', characterSearch);

// Event Function
function characterSearch() {
    // Get Input Value (what character to look for?)
    let name = document.getElementById('input-name').value;
    name = name.toLowerCase();

    // Test Input Variable and update the page
    if (name == 'po') {
        displayCharacter('Po', 'Buddy, I am the Dragon Warrior.')
    } else if (name == 'tigress') {
        displayCharacter('Tigress', 'That was pretty hardcore!');
    } else if (name == 'mantis') {
        displayCharacter('Mantis', 'Fear the bug!');
    } else if (name == 'monkey') {
        displayCharacter('Monkey', 'We should hang out!');
    } else {
        displayQuestionMark();
    }
}

function displayCharacter(name, quote) {
    // Update page to new character info
    document.getElementById('main-img').src = 'images/' + name.toLowerCase() + '.png';
    document.getElementById('character-name').innerHTML = name;
    document.getElementById('quote').innerHTML = quote;
    document.getElementById('wiki-link').innerHTML = name + ' Wiki';
    document.getElementById('wiki-link').href = 'https://kungfupanda.fandom.com/wiki/' + name;
}

function displayQuestionMark() {
    // Update page to Question Mark
    document.getElementById('main-img').src = 'images/question-mark.png';
    document.getElementById('character-name').innerHTML = '?????';
    document.getElementById('quote').innerHTML = '"Character Not Found"';
    document.getElementById('wiki-link').innerHTML = 'Wiki Home';
    document.getElementById('wiki-link').href = 'https://kungfupanda.fandom.com/wiki/Kung_Fu_Panda_Wiki';
}
window.onload = function() {
    populateDropDown();
}

function populateDropDown() {
    db.ref('players').once('value', getPlayers, showError);
}

function getPlayers(db_data) {
    var players = db_data.val();
    var playerNames = Object.keys(players);
    for (var i = 0; i < playerNames.length; i++) {
        console.log(playerNames[i]);
        showPlayerToDropdown(playerNames[i]);
    }
}

function showPlayerToDropdown(name) {
    var tag = document.createElement("a");
    var text = document.createTextNode(name);
    tag.appendChild(text);
    tag.href = "main.html?name=" + name;
    var element = document.getElementById("myDropdown");
    element.appendChild(tag);
}

function showError(error) {
    console(error);
}
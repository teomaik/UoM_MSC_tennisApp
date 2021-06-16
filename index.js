window.onload = function() {
    populateDropDown();
}


document.getElementById("dropbtn").onclick = function() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


document.getElementById("addpl_btn").onclick = function() {
    window.location.href = "addplayer.html";
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
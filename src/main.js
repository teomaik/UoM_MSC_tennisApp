document.getElementById('rank_btn').addEventListener('click', function() { addRankRow(event) }, false);
document.getElementById('stat_btn').addEventListener('click', function() { addStatRow(event) }, false);
document.getElementById('inj_btn').addEventListener('click', function() { addInjRow(event) }, false);
document.getElementById('save_btn').addEventListener('click', function() { savePlayerToDB(event) }, false);

window.onload = function() {
    //alert('Page is loaded');
    showSelectedPlayer();

};

function showSelectedPlayer() {
    var playerName = '';

    //if (window.location.href.includes('name=')) {
    //    playerName = window.location.href.split('name=')[1].replace(/%20/g, ' ');
    //}
    playerName = localStorage["playerName"];

    if (playerName == '' || playerName == null) {
        alert("No player selected, you can always add a new one throught the main page");
        return;
    }
    db.ref('players/' + playerName).once('value', loadPlayerData, playerNotFound);
}

function loadPlayerData(data) {

    var player = data.val();

    document.getElementById("bio_name").innerHTML = player.name;
    document.getElementById("bio_nationality").innerHTML = player.nationality + " nationality";
    document.getElementById("bio_height").innerHTML = "Height: " + player.height;
    document.getElementById("bio_info").innerHTML = player.info;

    var fields = player.dateofbirth.split('/');
    if (fields.length >= 3) {
        this.dateOfBirthD = fields[0];
        this.dateOfBirthM = fields[1];
        this.dateOfBirthY = fields[2];
    }

    document.getElementById("misc_birth").innerHTML = player.facts.birth;
    document.getElementById("misc_fact").innerHTML = player.facts.career;
    document.getElementById("misc_title").innerHTML = player.facts.firsttitle;

    var rank = Object.keys(player.ranking);
    var stat = Object.keys(player.statistics);
    var inj = Object.keys(player.injuries);

    for (var i = 0; i < rank.length; i++) {
        this.rankings[i] = rank[i] + ":" + player.ranking[rank[i]];
    }
    for (var i = 0; i < stat.length; i++) {
        this.statistics[i] = stat[i] + ":" + player.statistics[stat[i]];
    }
    for (var i = 0; i < inj.length; i++) {
        this.injuries[i] = inj[i] + ":" + player.injuries[inj[i]];
    }

    populateTables();
    calcBio();
}

function savePlayerToDB(evt) {

    var rankTb = {};
    var tbrows = document.getElementById("ranking_tb").rows;
    for (var i = 1; i < tbrows.length; i++) {
        var value = "";
        for (var j = 1; j < tbrows[i].cells.length; j++) {
            value = value + tbrows[i].cells[j].innerHTML + ":";
        }
        value = value.replaceAll("<br>", "");
        value = value.slice(0, -1)
        rankTb[tbrows[i].cells[0].innerHTML] = value;
    }

    var statTb = {};
    var tbrows = document.getElementById("statistics_tb").rows;
    for (var i = 1; i < tbrows.length; i++) {
        var value = "";
        for (var j = 1; j < tbrows[i].cells.length; j++) {
            value = value + tbrows[i].cells[j].innerHTML + ":";
        }
        value = value.replaceAll("<br>", "");
        value = value.slice(0, -1)
        statTb[tbrows[i].cells[0].innerHTML] = value;
    }

    var injTb = {};
    var tbrows = document.getElementById("injuries_tb").rows;
    for (var i = 1; i < tbrows.length; i++) {
        var value = "";
        for (var j = 1; j < tbrows[i].cells.length; j++) {
            value = value + tbrows[i].cells[j].innerHTML + ":";
        }
        value = value.replaceAll("<br>", "");
        value = value.slice(0, -1)
        injTb[tbrows[i].cells[0].innerHTML] = value;
    }

    var nat = document.getElementById("bio_nationality").innerHTML.split(" ");
    var hght = document.getElementById("bio_height").innerHTML.split(" ");

    db.ref('players/' + document.getElementById("bio_name").innerHTML).set({
        name: document.getElementById("bio_name").innerHTML,
        dateofbirth: this.dateOfBirthD + "/" + this.dateOfBirthM + "/" + this.dateOfBirthY,
        nationality: nat[0],
        height: hght[hght.length - 1],
        facts: {
            birth: document.getElementById("misc_birth").innerHTML,
            career: document.getElementById("misc_fact").innerHTML,
            firsttitle: document.getElementById("misc_title").innerHTML
        },
        info: document.getElementById("bio_info").innerHTML,
        injuries: injTb,
        ranking: rankTb,
        statistics: statTb

    });

}

function playerNotFound(error) {
    console.log("player not found");
}

function addRankRow(etv) {
    var table = document.getElementById("ranking_tb");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "Year";
    cell2.innerHTML = "Rank";
}

function addStatRow(etv) {
    var table = document.getElementById("statistics_tb");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = "Year";
    cell2.innerHTML = "Wins";
    cell3.innerHTML = "Defeats";
    cell4.innerHTML = "Average points per game";
    cell5.innerHTML = "Number of Titles";
}

function addInjRow(etv) {
    var table = document.getElementById("injuries_tb");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = "Year";
    cell2.innerHTML = "Type";
    cell3.innerHTML = "Duration";
}


function calcBio() {
    //console.log(calculate_age(new Date(dateOfBirthY, dateOfBirthM, dateOfBirthD)));
    document.getElementById("bio_years").innerHTML = calculate_age(new Date(this.dateOfBirthY, this.dateOfBirthM, this.dateOfBirthD)) + " years old (Born " + dateOfBirthD + "/" + dateOfBirthM + "/" + dateOfBirthY + ")";

    document.getElementById("bio_ranking").innerHTML = "Current Ranking: " + getCurrentRanking();
    document.getElementById("bio_titles").innerHTML = "Total number of titles: " + getTitlesSum();
    document.getElementById("bio_wins_losses").innerHTML = "Total Wins/Losses: " + getWinsToLossesRatio();

}

function populateTables() {
    loadTables("./resources/Ranking.txt", "ranking_tbody", rankings);
    loadTables("./resources/Statistics.txt", "statistics_tbody", statistics);
    loadTables("./resources/Injuries.txt", "injuries_tbody", injuries);
}

function loadTables(filename, table_id, lines) {
    // Find a <table> element with id="myTable":
    var table = document.getElementById(table_id);

    for (var line = 0; line < lines.length; line++) {
        // Create an empty <tr> element and add it to the 1st position of the table:
        var row = table.insertRow(0);

        var fields = lines[line].split(':');
        for (var fld = 0; fld < fields.length; fld++) {
            var cell = row.insertCell(fld);
            cell.classList.add("col_" + fld);
            cell.innerHTML = fields[fld];
        }
    }
}

function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

function getCurrentRanking() {
    if (rankings.length == 0) {
        return 0;
    }
    var row = rankings[rankings.length - 1];
    var fields = row.split(':');

    return fields[fields.length - 1];
}

function getTitlesSum() {
    if (statistics.length == 0) {
        return 0;
    }
    var titles = 0;

    for (var i = 0; i < statistics.length; i++) {
        var row = statistics[i];
        var fields = row.split(':');
        titles += parseInt(fields[fields.length - 1]);
    }

    return titles;
}

function getWinsToLossesRatio() {
    if (statistics.length == 0) {
        return 0;
    }
    var wins = 0;
    var losses = 0;

    for (var i = 0; i < statistics.length; i++) {
        var row = statistics[i];
        var fields = row.split(':');
        wins += parseInt(fields[1]);
        losses += parseInt(fields[2]);
    }

    return wins + "/" + losses;
}

var mouseIsDown = false;
document.getElementById('statistics_tb').addEventListener('mousedown', function() { myFunction(event) }, false);

function myFunction() {
    mouseIsDown = true;
    var col = window.event.target.cellIndex;
    var row = window.event.target.parentNode.rowIndex;
    setTimeout(function() {
        if (mouseIsDown && (row == 0 && (col > 0 && col < 5))) {
            ////// mouse was held down for > x seconds
            columnHideShow(col);
        }
    }, 500);
}

window.addEventListener('mouseup', function() {
    mouseIsDown = false;
});


function columnHideShow(col) {

    let cells = document.getElementById('statistics_tb').getElementsByClassName("col_" + col);
    for (let i = 0; i < cells.length; ++i) {
        if (cells[i].style.visibility == 'collapse') {
            cells[i].style.visibility = 'visible';
            cells[i].style.width = "auto";
        } else {
            cells[i].style.visibility = 'collapse';
            cells[i].style.width = "3%";
        }
    }


}
const addButton = document.getElementById('addplbt');

document.getElementById('addplbt').addEventListener('click', function() { submintplayer(event) }, false);


function submintplayer(etv) {

    var flag = true;

    var lname = document.getElementById('lname').value;
    var fname = document.getElementById('fname').value;
    var nation = document.getElementById('country').value;
    var birthD = document.getElementById('birth').value;
    var height = document.getElementById('hght').value;


    if (insNullOrEmpty(lname) || insNullOrEmpty(fname) || insNullOrEmpty(nation) || insNullOrEmpty(birthD) || insNullOrEmpty(height)) {
        alert("some fields are empty");
        return;
    }

    const regexBD = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    if (!birthD.match(regexBD)) {
        alert("Invalid format for date of birth. Please use DD/MM/YYYY");
        return;
    }

    const regexHeight = /^[+-]?\d+(\.\d+)?$/
    if (!height.match(regexHeight)) {
        alert("Invalid format for height");
        return;
    }

    const regexLetterSpace = /^[a-zA-Z\s]*$/;
    if (!lname.match(regexLetterSpace)) {
        alert("Last Name must only contain letters and spaces");
        return;
    }
    if (!fname.match(regexLetterSpace)) {
        alert("First Name must only contain letters and spaces");
        return;
    }
    if (!nation.match(regexLetterSpace)) {
        alert("Nationality must only contain letters and spaces");
        return;
    }


    //console.log(lname + " " + fname + " " + nation);

    addPlayerToDB(fname, lname, nation, birthD, height);
    playerSubmited();

}

function playerSubmited() {
    console.log("Player submited");
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('country').value = '';
    document.getElementById('birth').value = '';
    document.getElementById('hght').value = '';

}

function addPlayerToDB(fname, lname, nation, birthD, height) {
    var name = fname + " " + lname;
    db.ref('players/' + name).set({
        name: name,
        dateofbirth: birthD,
        nationality: nation,
        height: height,
        facts: {
            birth: "Fact about birth place",
            career: "Fact about career",
            firsttitle: "Fact about first title"
        },
        info: "",
        injuries: {},
        ranking: {},
        statistics: {}

    });
}

function insNullOrEmpty(value) {
    if (value == null || value == '') {
        return true;
    }
    return false;
}
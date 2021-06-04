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
        flag = false;
    }

    //console.log(lname + " " + fname + " " + nation);

    if (!flag) {
        alert("some fields are empty");
        return;
    }

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
var rankings = [];
var statistics = [];
var injuries = [];

var dateOfBirthD = 0;
var dateOfBirthM = 0;
var dateOfBirthY = 0;

var mouseIsDown = false;

window.addEventListener('mousedown', function() {
    mouseIsDown = true;
    setTimeout(function() {
        if (mouseIsDown) {
            ////// mouse was held down for > 1 seconds
            //alert("mouse was held for 1+ seconds");
        }
    }, 1000);
});

window.addEventListener('mouseup', function() {
    mouseIsDown = false;
});

//--------FIELDS

/*
var field = document.getElementById("bio_years");
field.addEventListener('click', function(e) {

    var target = e.target;
    //test if clicked element is TD.
    if (target && target.tagName && target.tagName.toLowerCase() == "h3") {
        //make cell editable
        target.setAttribute('contenteditable', 'true');
        //on blur close the editable field and return to normal cell.
        target.onblur = function() { this.removeAttribute('contenteditable'); }
    }

});
*/

/*
var field = document.getElementById("bio_nationality");
field.addEventListener('click', function(e) {

    var target = e.target;
    //test if clicked element is TD.
    if (target && target.tagName && target.tagName.toLowerCase() == "h3") {
        //make cell editable
        target.setAttribute('contenteditable', 'true');
        //on blur close the editable field and return to normal cell.
        target.onblur = function() { this.removeAttribute('contenteditable'); }
    }

});
*/

/*
var field = document.getElementById("bio_height");
field.addEventListener('click', function(e) {

    var target = e.target;
    //test if clicked element is TD.
    if (target && target.tagName && target.tagName.toLowerCase() == "h3") {
        //make cell editable
        target.setAttribute('contenteditable', 'true');
        //on blur close the editable field and return to normal cell.
        target.onblur = function() { this.removeAttribute('contenteditable'); }
    }

});
*/

var field = document.getElementById("bio_info");
field.addEventListener('click', function(e) {

    var target = e.target;
    //test if clicked element is TD.
    if (target && target.tagName && target.tagName.toLowerCase() == "h3") {
        //make cell editable
        target.setAttribute('contenteditable', 'true');
        //on blur close the editable field and return to normal cell.
        target.onblur = function() { this.removeAttribute('contenteditable'); }
    }

});

var field = document.getElementById("misc_birth");
field.addEventListener('click', function(e) {

    var target = e.target;
    //test if clicked element is TD.
    if (target && target.tagName && target.tagName.toLowerCase() == "p") {
        //make cell editable
        target.setAttribute('contenteditable', 'true');
        //on blur close the editable field and return to normal cell.
        target.onblur = function() { this.removeAttribute('contenteditable'); }
    }

});

var field = document.getElementById("misc_fact");
field.addEventListener('click', function(e) {

    var target = e.target;
    //test if clicked element is TD.
    if (target && target.tagName && target.tagName.toLowerCase() == "p") {
        //make cell editable
        target.setAttribute('contenteditable', 'true');
        //on blur close the editable field and return to normal cell.
        target.onblur = function() { this.removeAttribute('contenteditable'); }
    }

});

var field = document.getElementById("misc_title");
field.addEventListener('click', function(e) {

    var target = e.target;
    //test if clicked element is TD.
    if (target && target.tagName && target.tagName.toLowerCase() == "p") {
        //make cell editable
        target.setAttribute('contenteditable', 'true');
        //on blur close the editable field and return to normal cell.
        target.onblur = function() { this.removeAttribute('contenteditable'); }
    }

});



//-----------------TABLES

var table = document.getElementById("ranking_tb");
table.addEventListener('click', function(e) {

    var target = e.target;
    //test if clicked element is TD.
    if (target && target.tagName && target.tagName.toLowerCase() == "td") {
        //make cell editable
        target.setAttribute('contenteditable', 'true');
        //on blur close the editable field and return to normal cell.
        target.onblur = function() { this.removeAttribute('contenteditable'); }
    }

});

var table = document.getElementById("statistics_tb");
table.addEventListener('click', function(e) {

    var target = e.target;
    //test if clicked element is TD.
    if (target && target.tagName && target.tagName.toLowerCase() == "td") {
        //make cell editable
        target.setAttribute('contenteditable', 'true');
        //on blur close the editable field and return to normal cell.
        target.onblur = function() { this.removeAttribute('contenteditable'); }
    }

});

var table = document.getElementById("injuries_tb");
table.addEventListener('click', function(e) {

    var target = e.target;
    //test if clicked element is TD.
    if (target && target.tagName && target.tagName.toLowerCase() == "td") {
        //make cell editable
        target.setAttribute('contenteditable', 'true');
        //on blur close the editable field and return to normal cell.
        target.onblur = function() { this.removeAttribute('contenteditable'); }
    }

});
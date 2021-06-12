'use strict';

// Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/UoM_MSC_tennisApp/sw.js').catch(function(error) {
        // registration failed
        console.log('Registration failed with ' + error);
    });
}

//window.addEventListener('beforeinstallprompt', function (ev) {
// Prevent some older browsers from popping the install prompt
//ev.preventDefault();
// Stash the event so it can be triggered later.

//});


var myApp = {};
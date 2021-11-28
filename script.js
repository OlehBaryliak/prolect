"use strict";

function first() {
    // do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(land, callback) {
    console.log(`Я вчу: ${land}`);
    callback();
}

function done() {
    console.log(`Я пройшов цей урок!`);}

learnJS(`JavaScript`, done);
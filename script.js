'use strict'

const userNameFirst = prompt('Enter your first name');
const userNameLast = prompt('Enter your last name');

function getUserName() {
    if (userNameFirst != 'Keian') {
        return document.write('Hello there, ' + userNameFirst + ' ' + userNameLast + ', and welcome to ');
    } else {
        return 0;
    }
}

function waterName() {
    if (userNameFirst == 'Water') {
        document.write('<img src="https://starecat.com/content/wp-content/uploads/when-you-drink-water-meme.jpg"/>')
    }
}

function adminName() {
    if (userNameFirst == 'Keian') {
        document.write('Welcome back ' + userNameFirst);
    }
}
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
        document.write('Welcome back, Administrator ');
    }
}

function websiteClearance() {
    alert('You must be over 21 years old to view this site.')
    let ageOfPerson = 0
    while (ageOfPerson < 21) {
        ageOfPerson = parseInt(prompt('How old are you?'))
    }
    return 0
}

let websiteRating = prompt('How many stars would you like to rate us out of 5?')

function askWebsiteRating() {
    for (let i = 0; i != websiteRating; i++) {
        document.write('<img src="Star.png"/>')
    }
    document.write("Thanks for rating us " + websiteRating + '/5 stars!')
}
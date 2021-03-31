/**
 * Components Loading
 */

$(document).ready(() => {
    $('nav').load('nav.html');
});

/**
 * Article loading
 */

//Loades the HTML Article
$(document).ready(function () {
    $("#html").load('html/html.html');
});

//Loades the CSS Article
$(document).ready(function () {
    $("#css").load('css/css.html');
});

//Loades the Javascript Article
$(document).ready(function () {
    $("#javascript").load('javascript/javascript.html');
});

//Loades the Mocha-Testing Article
$(document).ready(function () {
    $("#testingMocha").load('testing/testingMocha.html')
})

//Loades the Design Article
$(document).ready(function () {
    $('#design').load('design/design.html');
});

//Loades the Resource Article
$(document).ready(function () {
    $('#resources').load('resources/resources.html');
});

//Loades the React Article
$(document).ready(() => {
    $('#react').load('react/react.html');
});

//Loades the Redux Article
$(document).ready(() => {
    $('#redux').load('redux/redux.html');
});

//Loades the Jest Article
$(document).ready(() => {
    $('#jest').load('testing/testingJest.html')
});

//Loades the Enzyme Article
$(document).ready(() => {
    $('#testingEnzyme').load('testing/TestingEnzyme.html');
});

//Loades the Selenium Article
$(document).ready(() => {
    $('#selenium').load('testing/testingSelenium.html');
});


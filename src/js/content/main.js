/**
 * @file
 * Content Script Provides Input Form On HN Website
 * Allowing To Filter Posts By Votes and
 * Directly Navigate to Given Page Number
 *
 * @author Deekshith Allamaneni
 * @copyright 2016 Deekshith Allamaneni
 */
"use strict";

var hnPageTopElement = document.getElementsByClassName("pagetop");
hnPageTopElement[0].innerHTML = hnPageTopElement[0].innerHTML
    .concat(
        `
        |
        <form action="/over" class="hndude-form">
            votes <input id="hn-dude-votes-input" placeholder="votes" type="number" name="points" class="hndude-form-input" maxlength="4" size="4" min="1" max="9999" value="1">
            page <input id="hn-dude-page-input" placeholder="page" type="number" name="p" class="hndude-form-input" min="1" max="99" value="1">
            <input type="submit" value="Go!" class="hndude-form-submit">
        </form>
        `
    );

// Assign Current Votes Value To The Form Field
if(getUrlParameterByName("points", document.URL) !== null){
    document.getElementById("hn-dude-votes-input").value = getUrlParameterByName("points", document.URL);
}

// Assign Current Current Page Number Value To The Form Field
if(getUrlParameterByName("p", document.URL) !== null){
    document.getElementById("hn-dude-page-input").value = getUrlParameterByName("p", document.URL);
}

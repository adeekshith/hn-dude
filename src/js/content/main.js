/**
 * @file
 * Content Script Provides Input Form On HN Website
 * Allowing To Filter Posts By Votes and
 * Directly Navigate to Given Page Number
 *
 * @author Deekshith Allamaneni
 * @copyright 2016 Docs Online Viewer
 */
"use strict";

var hnPageTopElement = document.getElementsByClassName("pagetop");
hnPageTopElement[0].innerHTML = hnPageTopElement[0].innerHTML
    .concat(
        `
        |
        <form action="/over" style='display:inline; margin: 0; padding: 0;'>
            votes <input placeholder="votes" type="number" name="points" style="display: inline;" maxlength="4" size="4" min="1" max="9999" value="1">
            page <input placeholder="page" type="number" name="p" style="display: inline;" min="1" max="99" value="1">
            <input type="submit" value="Go!" style="display: inline;">
        </form>
        `
    );
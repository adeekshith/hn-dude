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
        <a href=\"#\"> test_string</a>
        `
    );
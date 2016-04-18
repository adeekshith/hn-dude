/**
 * @file
 * HN-Dude background script
 *
 * @author Deekshith Allamaneni
 * @copyright 2016 Deekshith Allamaneni
 */
"use strict";


/**
 * On Extension Install or Update
 */
chrome.runtime.onInstalled.addListener(function(details) {
    if (details.reason === "install") {
        // Open getting started page on extension install
        chrome.tabs.create({
            "url": "https://github.com/adeekshith/hn-dude",
            "active": true
        });
    }else if(details.reason === "update"){
        // Extension update task here.
    }
});

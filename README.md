# HN-Dude

Browser extension to easily filter *Hacker News* articles by **points** and navigate pages by page number.

### Add to [Chrome](https://chrome.google.com/webstore/detail/hn-dude/nclnbjejcfilldajkophjpboocnijcdl) / [Firefox](https://addons.mozilla.org/en-US/firefox/addon/hn-dude/)

[![Screenshot of hackerNews with HN-Buddy](assets/hndude-scr-1-annotated.png?raw=true "HN-Dude Screenshot")](https://chrome.google.com/webstore/detail/hn-dude/nclnbjejcfilldajkophjpboocnijcdl)

This inserts two input fields in the Hacker News top menu to enter points and page number as shown in the above screenshot.

## Features

- View articles with minimum number of points specified by you
- Directly go to any page by entering the page number
- Made for our friends
    - Minimum size
    - Minimum permissions
    - Minimum performance impact
    - Open source

## Instructions to Use

- Install the extension for your browser:
  - [Chrome](https://chrome.google.com/webstore/detail/hn-dude/nclnbjejcfilldajkophjpboocnijcdl)
  - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/hn-dude/)
- Open HackerNews: https://news.ycombinator.com/
- Set Minimum value of Points Or Page Number
- Press "Enter ↲" on your keyboard <br>
  (You should see all posts with greater than or equal to the points you have entered.)

## How It Works?

HN accepts two URL parameters **points** to set minimum number of points for the posts to be shown and **p** sets the page number to show.
This browser extension inserts two input fields to the HN nav bar making it easy to set those URL parameters.
We can also manually set those URL parameters by editing the URL but this extension makes it handy.
Also it only works for a few seconds when you load Hacker News and does not use up any system resources after that
so it does not add up to your browser bloat.

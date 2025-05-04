// ==UserScript==
// @name         Front-end switcher (Twitter -> Nitter)
// @namespace    https://github.com/Bit38
// @source       https://github.com/Bit38/user-scrips
// @license      MIT
// @version      1.0.0
// @description  Automatically switches from twitter to nitter (by default uses: xcancel.com)
// @author       Bit38
// @match        https://*x.com/*
// @match        https://*twitter.com/*
// @grant        none
// ==/UserScript==


(function() {
    'use strict';

    let url = new URL(window.location.href);
    url.host = 'xcancel.com';

    window.location.replace(url);
})();


// ==UserScript==
// @name         YouTube Screenshot
// @namespace    https://github.com/Bit38
// @source       https://github.com/Bit38/user-scrips
// @version      1.0.1
// @description  Downloads the current frame of a YouTube video as a png
// @author       Bit38
// @match        https://www.youtube.com/watch*
// @icon         data:image/png;base64,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
// @require      https://cdn.jsdelivr.net/npm/arrive@2.4.1/minified/arrive.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const screenshot_icon = `<svg width="100%" height="100%" fill="#e8eaed" version="1.1" viewBox="0 0 36 36"><path d="m21.3 23.625h4.4v-4.5h-1.65v2.8125h-2.75zm-11-6.75h1.65v-2.8125h2.75v-1.6875h-4.4zm3.3 10.125h-4.4c-0.605 0-1.1229-0.22031-1.5537-0.66094-0.43083-0.44062-0.64625-0.97031-0.64625-1.5891v-13.5c0-0.61875 0.21542-1.1484 0.64625-1.5891 0.43083-0.44062 0.94875-0.66094 1.5537-0.66094h17.6c0.605 0 1.1229 0.22031 1.5538 0.66094 0.43083 0.44062 0.64625 0.97031 0.64625 1.5891v13.5c0 0.61875-0.21542 1.1484-0.64625 1.5891-0.43083 0.44062-0.94875 0.66094-1.5538 0.66094h-4.4zm-4.4-2.25h17.6v-13.5h-17.6zm0 0v-13.5z" fill="#fff" stroke-width=".027811"/></svg>`
    const htmlPolicy = window.trustedTypes.createPolicy("ytscreenshotPolicy", {
            createHTML: (to_escape) => to_escape
    })

    const sanitize_file_name = (filename) => {
        const validchars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-.:;<=>?@[]^_`{|}~ \t";

        return filename.split('').filter((c) => validchars.indexOf(c) !== -1).join('');
    };

    const canvas = document.createElement("canvas");
    const screenshot_func = () => {
        const vid = document.querySelector("video");
        const title = document.querySelector("#title > h1 > yt-formatted-string").innerText;
        const duration = document.querySelector(".ytp-time-current").innerText;

        canvas.width = vid.videoWidth;
        canvas.height = vid.videoHeight;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(vid, 0, 0, vid.videoWidth, vid.videoHeight);
        let dataURL = canvas.toDataURL('image/png');

        var link = document.createElement('a');
        link.download = sanitize_file_name(`${title} ${duration} ${vid.videoWidth}x${vid.videoHeight}.png`);
        link.href = dataURL;
        link.click();
    }

    document.arrive('.ytp-right-controls', () => {
        const right_controls = document.querySelector(".ytp-right-controls");
        const miniplayer_btn = document.querySelector(".ytp-miniplayer-button");
        const screenshot_btn = document.createElement("button");

        screenshot_btn.classList.add("ytp-button");
        screenshot_btn.onclick = screenshot_func;

        screenshot_btn.innerHTML = htmlPolicy.createHTML(screenshot_icon);
        right_controls.insertBefore(screenshot_btn, miniplayer_btn);
    });
})();

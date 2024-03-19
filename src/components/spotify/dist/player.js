"use client";
"use strict";
exports.__esModule = true;
var Player = function () {
    var size = {
        width: "100%",
        height: 500
    };
    var view = "coverart"; // or 'coverart list'
    var theme = "black"; // or 'white'
    return (React.createElement("div", null,
        React.createElement("iframe", { 
            // style='border-radius:12px'
            src: 'https://open.spotify.com/embed/playlist/4Zjli1P13J5mmSCD5iKAXK?utm_source=generator', width: '100%', height: '352', frameBorder: '0', 
            // allowfullscreen=''
            allow: 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture', loading: 'lazy' })));
};
exports["default"] = Player;

"use client";
"use strict";
exports.__esModule = true;
var react_timer_hook_1 = require("react-timer-hook");
// const time = new Date();
// time.setSeconds(time.getSeconds() + 20);
var Timer = function (_a) {
    var expiryTimestamp = _a.expiryTimestamp;
    var _b = react_timer_hook_1.useTimer({
        expiryTimestamp: expiryTimestamp,
        onExpire: function () { return console.warn("onExpire called"); }
    }), totalSeconds = _b.totalSeconds, seconds = _b.seconds, minutes = _b.minutes, hours = _b.hours, days = _b.days, isRunning = _b.isRunning, start = _b.start, pause = _b.pause, resume = _b.resume, restart = _b.restart;
    return (React.createElement("div", { style: { textAlign: "center" } },
        React.createElement("h1", null, "react-timer-hook "),
        React.createElement("p", null, "Timer Demo"),
        React.createElement("div", { style: { fontSize: "100px", border: "2px solid black", borderRadius: '5px', background: 'linear-gradient(red, blue)' } },
            React.createElement("span", null, minutes),
            ":",
            React.createElement("span", null, seconds)),
        React.createElement("p", null, isRunning ? "Running" : "Not running"),
        React.createElement("button", { onClick: start }, "Start"),
        React.createElement("button", { onClick: pause }, "Pause"),
        React.createElement("button", { onClick: resume }, "Resume"),
        React.createElement("button", { onClick: function () {
                // Restarts to 5 minutes timer
                var time = new Date();
                time.setSeconds(time.getSeconds() + 300);
                restart(time);
            } }, "Restart")));
};
exports["default"] = Timer;

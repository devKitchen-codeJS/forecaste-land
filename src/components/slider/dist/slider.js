"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_slick_1 = require("react-slick");
require("slick-carousel/slick/slick.css");
require("slick-carousel/slick/slick-theme.css");
var material_1 = require("@mui/material");
var slider_module_scss_1 = require("./slider.module.scss");
var KeyboardArrowLeft_1 = require("@mui/icons-material/KeyboardArrowLeft");
var KeyboardArrowRight_1 = require("@mui/icons-material/KeyboardArrowRight");
// import arrowR from './'
var react_1 = require("react");
function SampleNextArrow(props) {
    var className = props.className, style = props.style, onClick = props.onClick;
    return (React.createElement("div", { className: className, style: __assign(__assign({}, style), { display: "block", background: "red" }), onClick: onClick },
        React.createElement(KeyboardArrowRight_1["default"], null)));
}
function SamplePrevArrow(props) {
    var className = props.className, style = props.style, onClick = props.onClick;
    return (React.createElement("div", { className: className, style: __assign(__assign({}, style), { display: "block", background: "green" }), onClick: onClick },
        React.createElement(KeyboardArrowLeft_1["default"], null)));
}
var CustomSlider = function () {
    var slider = react_1.useRef(null);
    var settings = {
        dots: true,
        infinite: true,
        speed: 650,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true
    };
    return (React.createElement(material_1.Box, { sx: { display: "block !important" }, className: slider_module_scss_1["default"].wrapper },
        React.createElement(react_slick_1["default"], __assign({}, settings, { className: slider_module_scss_1["default"].slider }),
            React.createElement("div", { className: slider_module_scss_1["default"].slide1 },
                React.createElement(material_1.Typography, { className: slider_module_scss_1["default"].text }, "Juniper is a great app for checking the weather. It's easy to use and has a beautiful interface. I love how it shows me the cloud patterns and predicts the weather for the next few days. It's like having a personal meteorologist in my pocket."),
                React.createElement(material_1.Box, { className: slider_module_scss_1["default"].customer },
                    React.createElement(material_1.Avatar, { alt: 'Remy Sharp' }),
                    React.createElement(material_1.Typography, { className: slider_module_scss_1["default"].customer_name }, "Monica"))),
            React.createElement("div", { className: slider_module_scss_1["default"].slide1 },
                React.createElement(material_1.Typography, { className: slider_module_scss_1["default"].text }, "Juniper is a great app for checking the weather. It's easy to use and has a beautiful interface. I love how it shows me the cloud patterns and predicts the weather for the next few days. It's like having a personal meteorologist in my pocket."),
                React.createElement(material_1.Box, { className: slider_module_scss_1["default"].customer },
                    React.createElement(material_1.Avatar, { alt: 'Remy Sharp' }),
                    React.createElement(material_1.Typography, { className: slider_module_scss_1["default"].customer_name }, "Monica"))),
            React.createElement("div", { className: slider_module_scss_1["default"].slide1 },
                React.createElement(material_1.Typography, { className: slider_module_scss_1["default"].text }, "Juniper is a great app for checking the weather. It's easy to use and has a beautiful interface. I love how it shows me the cloud patterns and predicts the weather for the next few days. It's like having a personal meteorologist in my pocket."),
                React.createElement(material_1.Box, { className: slider_module_scss_1["default"].customer },
                    React.createElement(material_1.Avatar, { alt: 'Remy Sharp' }),
                    React.createElement(material_1.Typography, { className: slider_module_scss_1["default"].customer_name }, "Monica"))))));
};
exports["default"] = CustomSlider;

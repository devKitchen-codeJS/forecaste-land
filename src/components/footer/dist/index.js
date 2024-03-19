"use strict";
exports.__esModule = true;
var customDivider_1 = require("../customDivider");
var footer_module_scss_1 = require("./footer.module.scss");
var material_1 = require("@mui/material");
var twitter_png_1 = require("../../../public/images/twitter.png");
var facebook_png_1 = require("../../../public/images/facebook.png");
var Instagram_png_1 = require("../../../public/images/Instagram.png");
var Telegram_1 = require("@mui/icons-material/Telegram");
var Footer = function () {
    return (React.createElement(material_1.Grid, { container: true, xs: 12, className: footer_module_scss_1["default"].wrapper },
        React.createElement(material_1.Grid, { className: footer_module_scss_1["default"].forcaste_icons, xs: 8 }),
        React.createElement(material_1.Grid, { item: true, container: true, className: footer_module_scss_1["default"].footer, xs: 12 },
            React.createElement(material_1.Grid, { item: true, container: true, xs: 8, className: footer_module_scss_1["default"].content1 },
                React.createElement(material_1.Grid, { item: true, className: footer_module_scss_1["default"].icon_wrapper, xs: 3 },
                    React.createElement("div", { className: footer_module_scss_1["default"].icon_container },
                        React.createElement("img", { src: twitter_png_1["default"].src, className: footer_module_scss_1["default"].brand_icon }),
                        React.createElement("img", { src: facebook_png_1["default"].src, className: footer_module_scss_1["default"].brand_icon }),
                        React.createElement("img", { src: Instagram_png_1["default"].src, className: footer_module_scss_1["default"].brand_icon }))),
                React.createElement(material_1.Grid, { item: true, className: footer_module_scss_1["default"].text_container1, xs: 2 },
                    React.createElement(material_1.Box, { className: footer_module_scss_1["default"].text_wrapper },
                        React.createElement(material_1.Typography, { className: footer_module_scss_1["default"].text1, color: 'primary' }, "Pages"),
                        React.createElement(material_1.Typography, { className: footer_module_scss_1["default"].text2 }, "Home"),
                        React.createElement(material_1.Typography, { className: footer_module_scss_1["default"].text2 }, "Info"),
                        React.createElement(material_1.Typography, { className: footer_module_scss_1["default"].text2 }, "Shop"),
                        React.createElement(material_1.Typography, { className: footer_module_scss_1["default"].text2 }, "TOS"))),
                React.createElement(material_1.Grid, { item: true, className: footer_module_scss_1["default"].text_container1, xs: 2 },
                    React.createElement(material_1.Box, { className: footer_module_scss_1["default"].text_wrapper },
                        React.createElement(material_1.Typography, { className: footer_module_scss_1["default"].text1, color: 'primary' }, "Platform"),
                        React.createElement(material_1.Typography, { className: footer_module_scss_1["default"].text2 }, "Android"),
                        React.createElement(material_1.Typography, { className: footer_module_scss_1["default"].text2 }, "IOS"),
                        React.createElement(material_1.Typography, { className: footer_module_scss_1["default"].text2 }, "Windows"),
                        React.createElement(material_1.Typography, { className: footer_module_scss_1["default"].text2 }, "Mac OS"))),
                React.createElement(material_1.Grid, { item: true, className: footer_module_scss_1["default"].text_container1, xs: 2 },
                    React.createElement(material_1.Box, { className: footer_module_scss_1["default"].text_wrapper },
                        React.createElement(material_1.Typography, { className: footer_module_scss_1["default"].text1, color: 'primary' }, "Support"),
                        React.createElement(material_1.Typography, { className: footer_module_scss_1["default"].text2 }, "Support request"),
                        React.createElement(material_1.Typography, { className: footer_module_scss_1["default"].text2 }, "Contact Us"))),
                React.createElement(material_1.Grid, { item: true, className: footer_module_scss_1["default"].text_container1, xs: 2 },
                    React.createElement(material_1.Box, { className: footer_module_scss_1["default"].text_wrapper },
                        React.createElement(material_1.Typography, { className: footer_module_scss_1["default"].text1, color: 'primary' }, "Subscribe"),
                        React.createElement(material_1.Button, { className: footer_module_scss_1["default"].btn_email, endIcon: React.createElement(Telegram_1["default"], null) }, "Enter your email"),
                        React.createElement(material_1.Typography, { className: footer_module_scss_1["default"].text3, color: 'primary' }, "Join our newsletter to stay up to date on features and releases"))),
                React.createElement(customDivider_1["default"], null),
                React.createElement(material_1.Grid, { className: footer_module_scss_1["default"].getnow_row },
                    React.createElement(material_1.Typography, { className: footer_module_scss_1["default"].juniper }, "Juniper"),
                    React.createElement(material_1.Button, { className: footer_module_scss_1["default"].btn_getnow }, "Get Now"))))));
};
exports["default"] = Footer;

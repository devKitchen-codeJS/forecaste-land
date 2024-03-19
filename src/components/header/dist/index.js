"use strict";
exports.__esModule = true;
var material_1 = require("@mui/material");
var react_1 = require("react");
var header_module_scss_1 = require("./header.module.scss");
var Search_1 = require("@mui/icons-material/Search");
var navigation_1 = require("next/navigation");
var Header = function () {
    var router = navigation_1.useRouter();
    return (react_1["default"].createElement(material_1.Box, { className: header_module_scss_1["default"].wrapper },
        react_1["default"].createElement(material_1.Grid, { container: true },
            react_1["default"].createElement(material_1.Grid, { className: header_module_scss_1["default"].header, item: true, xs: 12 },
                react_1["default"].createElement(material_1.Grid, { item: true, className: header_module_scss_1["default"].logo, xs: 1 }, "LOGO"),
                react_1["default"].createElement(material_1.Grid, { item: true, className: header_module_scss_1["default"].navigation, xs: 11 },
                    react_1["default"].createElement(material_1.Tabs, null,
                        react_1["default"].createElement(material_1.Tab, { label: 'Home', onClick: function () { return router.push("/"); } }),
                        react_1["default"].createElement(material_1.Tab, { label: 'Info', onClick: function () { return router.push("/"); } }),
                        react_1["default"].createElement(material_1.Tab, { label: 'Shop', onClick: function () { return router.push("/pages/shop"); } }),
                        react_1["default"].createElement(material_1.Tab, { label: 'TOS', onClick: function () { return router.push("/"); } }),
                        react_1["default"].createElement(material_1.Tab, { icon: react_1["default"].createElement(Search_1["default"], null) })))))));
};
exports["default"] = Header;

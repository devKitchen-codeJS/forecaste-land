"use client";
"use strict";
exports.__esModule = true;
var list_module_scss_1 = require("./list.module.scss");
var material_1 = require("@mui/material");
var CheckCircleOutlineOutlined_1 = require("@mui/icons-material/CheckCircleOutlineOutlined");
function CustomList() {
    return (React.createElement(material_1.Box, null,
        React.createElement(material_1.FormGroup, null,
            React.createElement(material_1.FormControlLabel, { className: list_module_scss_1["default"].one, checked: false, control: React.createElement(material_1.Checkbox, { icon: React.createElement(CheckCircleOutlineOutlined_1["default"], { className: list_module_scss_1["default"].one_check }), color: 'info' }), label: 'Share your weather stories and photos.' }),
            React.createElement(material_1.FormControlLabel, { className: list_module_scss_1["default"].one, checked: false, control: React.createElement(material_1.Checkbox, { icon: React.createElement(CheckCircleOutlineOutlined_1["default"], { className: list_module_scss_1["default"].one_check }), color: 'info' }), label: 'Custom weather alerts and notifications.' }),
            React.createElement(material_1.FormControlLabel, { className: list_module_scss_1["default"].one, checked: false, control: React.createElement(material_1.Checkbox, { icon: React.createElement(CheckCircleOutlineOutlined_1["default"], { className: list_module_scss_1["default"].one_check }), color: 'info' }), label: 'Smart weather integrations for your home.' }))));
}
exports["default"] = CustomList;

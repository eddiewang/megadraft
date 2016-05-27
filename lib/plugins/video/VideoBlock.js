"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VideoBlock = function VideoBlock(props) {
  return _react2.default.createElement("video", { controls: true, style: props.style, src: props.data.src, alt: "" });
}; /*
    * Copyright (c) 2016, Globo.com (https://github.com/globocom)
    *
    * License: MIT
    */

exports.default = VideoBlock;
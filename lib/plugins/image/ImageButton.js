"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /*
             * Copyright (c) 2016, Globo.com (https://github.com/globocom)
             *
             * License: MIT
             */

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _draftJs = require("draft-js");

var _radium = require("radium");

var _radium2 = _interopRequireDefault(_radium);

var _icons = require("../../icons");

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = (0, _radium2.default)(_class = function (_Component) {
  _inherits(BlockButton, _Component);

  function BlockButton() {
    _classCallCheck(this, BlockButton);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(BlockButton).apply(this, arguments));
  }

  _createClass(BlockButton, [{
    key: "onClick",
    value: function onClick(e) {
      e.preventDefault();
      var src = window.prompt("Enter a URL");
      if (!src) {
        return;
      }

      var entityKey = _draftJs.Entity.create("image", "IMMUTABLE", { src: src });

      this.props.onChange(_draftJs.AtomicBlockUtils.insertAtomicBlock(this.props.editorState, entityKey, "🍺"));
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "button",
        { style: this.props.style, onClick: this.onClick.bind(this) },
        _react2.default.createElement(_icons2.default.ImageIcon, null)
      );
    }
  }]);

  return BlockButton;
}(_react.Component)) || _class;
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

var _radium = require("radium");

var _radium2 = _interopRequireDefault(_radium);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _BlockStyle = require("../../styles/plugins/BlockStyle");

var _BlockStyle2 = _interopRequireDefault(_BlockStyle);

var _ImageBlockStyle = require("./ImageBlockStyle");

var _ImageBlockStyle2 = _interopRequireDefault(_ImageBlockStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = (0, _radium2.default)(_class = function (_Component) {
  _inherits(ImageBlock, _Component);

  function ImageBlock(props) {
    _classCallCheck(this, ImageBlock);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ImageBlock).call(this, props));

    _this._handleFocus = _this._handleFocus.bind(_this);
    _this._handleBlur = _this._handleBlur.bind(_this);
    _this._handleCaptionChange = _this._handleCaptionChange.bind(_this);
    _this._handleRightsHolderChange = _this._handleRightsHolderChange.bind(_this);

    _this.state = {
      caption: _this.props.data.caption,
      rightsHolder: _this.props.data.rightsHolder
    };
    return _this;
  }

  _createClass(ImageBlock, [{
    key: "_handleFocus",
    value: function _handleFocus() {
      this.props.setReadOnly(true);
    }
  }, {
    key: "_handleBlur",
    value: function _handleBlur() {
      this.props.setReadOnly(false);
    }
  }, {
    key: "_handleDataChange",
    value: function _handleDataChange(key, event) {
      var newState = {};
      newState[key] = event.target.value;
      this.setState(newState);
      this.props.updateEntity(newState);
    }
  }, {
    key: "_handleCaptionChange",
    value: function _handleCaptionChange(event) {
      this._handleDataChange("caption", event);
    }
  }, {
    key: "_handleRightsHolderChange",
    value: function _handleRightsHolderChange(event) {
      this._handleDataChange("rightsHolder", event);
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { style: _ImageBlockStyle2.default.wrapper },
        _react2.default.createElement(
          "div",
          { style: _ImageBlockStyle2.default.imageWrapper },
          _react2.default.createElement("img", { style: _ImageBlockStyle2.default.image, src: this.props.data.src, alt: "" })
        )
      );
    }
  }]);

  return ImageBlock;
}(_react.Component)) || _class;
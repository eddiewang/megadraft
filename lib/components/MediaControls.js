"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp; /*
                             * Copyright (c) 2016, Globo.com (https://github.com/globocom)
                             *
                             * License: MIT
                             */

var _radium = require("radium");

var _radium2 = _interopRequireDefault(_radium);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Dropdown = require("../components/Dropdown");

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _MediaControlsStyle = require("../styles/components/MediaControlsStyle");

var _MediaControlsStyle2 = _interopRequireDefault(_MediaControlsStyle);

var _MediaControlsActions = require("../components/MediaControlsActions");

var _MediaControlsActions2 = _interopRequireDefault(_MediaControlsActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = (0, _radium2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(MediaControls, _Component);

  function MediaControls() {
    _classCallCheck(this, MediaControls);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(MediaControls).apply(this, arguments));
  }

  _createClass(MediaControls, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { style: _MediaControlsStyle2.default.controls },
        _react2.default.createElement(_Dropdown2.default, {
          items: this.props.dropdownItems,
          selected: this.props.selectedFeatured,
          onChange: this.props.setFeatured }),
        _react2.default.createElement(_MediaControlsActions2.default, { items: this.props.actionsItems })
      );
    }
  }]);

  return MediaControls;
}(_react.Component), _class2.propTypes = {
  dropdownItems: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
    key: _react.PropTypes.string.isRequired,
    icon: _react.PropTypes.func.isRequired,
    label: _react.PropTypes.string.isRequired
  })),
  actionsItems: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
    key: _react.PropTypes.string.isRequired,
    icon: _react.PropTypes.func.isRequired,
    action: _react.PropTypes.func.isRequired
  })),
  selectedFeatured: _react.PropTypes.string.isRequired,
  setFeatured: _react.PropTypes.func.isRequired
}, _temp)) || _class;
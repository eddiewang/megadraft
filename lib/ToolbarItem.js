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

var _radium = require("radium");

var _radium2 = _interopRequireDefault(_radium);

var _Separator = require("./Separator");

var _Separator2 = _interopRequireDefault(_Separator);

var _ToolbarItemStyles = require("./styles/ToolbarItemStyles");

var _ToolbarItemStyles2 = _interopRequireDefault(_ToolbarItemStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = (0, _radium2.default)(_class = function (_Component) {
  _inherits(ToolbarItem, _Component);

  function ToolbarItem(props) {
    _classCallCheck(this, ToolbarItem);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ToolbarItem).call(this, props));
  }

  _createClass(ToolbarItem, [{
    key: "toggleAction",
    value: function toggleAction(action) {
      if (action.toggle) {
        action.toggle(!action.active);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var Icon = this.props.item.icon;

      if (this.props.item.type == "separator") {
        return _react2.default.createElement(_Separator2.default, null);
      }

      var style = [_ToolbarItemStyles2.default.base, this.props.active && _ToolbarItemStyles2.default.active];

      return _react2.default.createElement(
        "li",
        { style: style },
        _react2.default.createElement(
          "button",
          { onClick: function onClick() {
              return _this2.toggleAction(_this2.props);
            }, style: _ToolbarItemStyles2.default.button },
          _react2.default.createElement(Icon, null)
        )
      );
    }
  }]);

  return ToolbarItem;
}(_react.Component)) || _class;
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

var _DropdownItemStyle = require("../styles/components/DropdownItemStyle");

var _DropdownItemStyle2 = _interopRequireDefault(_DropdownItemStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = (0, _radium2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(DropdownItem, _Component);

  function DropdownItem() {
    _classCallCheck(this, DropdownItem);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(DropdownItem).apply(this, arguments));
  }

  _createClass(DropdownItem, [{
    key: "render",
    value: function render() {
      var Icon = this.props.item.icon;
      return _react2.default.createElement(
        "div",
        {
          style: [_DropdownItemStyle2.default.base, this.props.style],
          onClick: this.props.onClick,
          onMouseDown: this.props.onMouseDown,
          onMouseUp: this.props.onMouseDown },
        _react2.default.createElement(Icon, { style: _DropdownItemStyle2.default.icon }),
        _react2.default.createElement(
          "span",
          { style: _DropdownItemStyle2.default.text },
          this.props.item.label
        ),
        this.props.children
      );
    }
  }]);

  return DropdownItem;
}(_react.Component), _class2.propTypes = {
  item: _react.PropTypes.object.isRequired,
  style: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.array]),
  onClick: _react.PropTypes.func
}, _temp)) || _class;
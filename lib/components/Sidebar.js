"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopOverMenu = exports.ToggleButton = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _class3, _class4; /*
                                        * Copyright (c) 2016, Globo.com (https://github.com/globocom)
                                        *
                                        * License: MIT
                                        */

var _radium = require("radium");

var _radium2 = _interopRequireDefault(_radium);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _icons = require("../icons");

var _icons2 = _interopRequireDefault(_icons);

var _SidebarStyle = require("../styles/components/SidebarStyle");

var _SidebarStyle2 = _interopRequireDefault(_SidebarStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BlockStyles = (0, _radium2.default)(_class = function (_Component) {
  _inherits(BlockStyles, _Component);

  function BlockStyles() {
    _classCallCheck(this, BlockStyles);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(BlockStyles).apply(this, arguments));
  }

  _createClass(BlockStyles, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var style = [_SidebarStyle2.default.block, { maxHeight: this.props.open ? "100px" : 0 }];
      return _react2.default.createElement(
        "ul",
        { style: style },
        this.props.plugins.map(function (item) {
          var _context;

          var Button = item.buttonComponent;
          return _react2.default.createElement(
            "li",
            { key: item.type, style: _SidebarStyle2.default.listItem },
            _react2.default.createElement(Button, {
              style: _SidebarStyle2.default.button,
              editorState: _this2.props.editorState,
              onChange: (_context = _this2.props).onChange.bind(_context) })
          );
        })
      );
    }
  }]);

  return BlockStyles;
}(_react.Component)) || _class;

var ToggleButton = exports.ToggleButton = (0, _radium2.default)(_class2 = function (_Component2) {
  _inherits(ToggleButton, _Component2);

  function ToggleButton() {
    _classCallCheck(this, ToggleButton);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ToggleButton).apply(this, arguments));
  }

  _createClass(ToggleButton, [{
    key: "render",
    value: function render() {
      var Icon = _icons2.default.CrossIcon;

      var style = [_SidebarStyle2.default.button];

      if (this.props.open) {
        style.push(_SidebarStyle2.default.toggleClose);
      }

      return _react2.default.createElement(
        "button",
        { style: style, onClick: this.props.toggle },
        _react2.default.createElement(Icon, null)
      );
    }
  }]);

  return ToggleButton;
}(_react.Component)) || _class2;

var PopOverMenu = exports.PopOverMenu = (0, _radium2.default)(_class3 = function (_Component3) {
  _inherits(PopOverMenu, _Component3);

  function PopOverMenu(props) {
    _classCallCheck(this, PopOverMenu);

    var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(PopOverMenu).call(this, props));

    _this4.state = {
      open: false
    };
    return _this4;
  }

  _createClass(PopOverMenu, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        open: !this.state.open
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "li",
        { style: _SidebarStyle2.default.menu },
        _react2.default.createElement(ToggleButton, {
          toggle: this.toggle.bind(this),
          open: this.state.open }),
        _react2.default.createElement(BlockStyles, {
          editorState: this.props.editorState,
          plugins: this.props.plugins,
          open: this.state.open,
          onChange: this.props.onChange })
      );
    }
  }]);

  return PopOverMenu;
}(_react.Component)) || _class3;

function getSelectedBlockElement() {
  // Finds the block parent of the current selection
  // https://github.com/facebook/draft-js/issues/45
  var selection = window.getSelection();
  if (selection.rangeCount === 0) {
    return null;
  }
  var node = selection.getRangeAt(0).startContainer;

  do {
    if (node.getAttribute && node.getAttribute("data-block") == "true") {
      return node;
    }
    node = node.parentNode;
  } while (node != null);
}

exports.default = (0, _radium2.default)(_class4 = function (_Component4) {
  _inherits(SideBar, _Component4);

  function SideBar(props) {
    _classCallCheck(this, SideBar);

    var _this5 = _possibleConstructorReturn(this, Object.getPrototypeOf(SideBar).call(this, props));

    _this5.state = { top: 0 };
    return _this5;
  }

  _createClass(SideBar, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this6 = this;

      if (this.updatingPosition) {
        clearImmediate(this.updatingPosition);
      }
      this.updatingPosition = null;
      this.updatingPosition = setImmediate(function () {
        return _this6.setBarPosition();
      });
    }
  }, {
    key: "setBarPosition",
    value: function setBarPosition() {
      var container = _reactDom2.default.findDOMNode(this.refs.container);

      var element = getSelectedBlockElement();

      if (!element) {
        return;
      }

      var top = Math.floor(element.getBoundingClientRect().top - 21 - (container.getBoundingClientRect().top - document.documentElement.clientTop));

      if (this.state.top !== top) {
        this.setState({
          top: top
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _context2;

      return _react2.default.createElement(
        "div",
        { ref: "container", style: _SidebarStyle2.default.container },
        _react2.default.createElement(
          "div",
          { style: [_SidebarStyle2.default.popover, { top: this.state.top + "px" }] },
          _react2.default.createElement(
            "ul",
            { style: _SidebarStyle2.default.dropdown },
            _react2.default.createElement(PopOverMenu, {
              editorState: this.props.editorState,
              onChange: (_context2 = this.props).onChange.bind(_context2),
              plugins: this.props.plugins })
          )
        )
      );
    }
  }]);

  return SideBar;
}(_react.Component)) || _class4;
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

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _DropdownItem = require("./DropdownItem");

var _DropdownItem2 = _interopRequireDefault(_DropdownItem);

var _DropdownStyle = require("../styles/components/DropdownStyle");

var _DropdownStyle2 = _interopRequireDefault(_DropdownStyle);

var _icons = require("../icons");

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = (0, _radium2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(Dropdown, _Component);

  function Dropdown(props) {
    _classCallCheck(this, Dropdown);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dropdown).call(this, props));

    _this.state = {
      isOpen: false
    };
    _this.handleDocumentClick = _this.handleDocumentClick.bind(_this);
    return _this;
  }

  _createClass(Dropdown, [{
    key: "onChange",
    value: function onChange(selected) {
      this.props.onChange(selected);
    }
  }, {
    key: "renderItem",
    value: function renderItem(item) {
      var _this2 = this;

      return _react2.default.createElement(
        "li",
        { key: item.key },
        _react2.default.createElement(_DropdownItem2.default, { item: item,
          style: _DropdownStyle2.default.option,
          onClick: function onClick() {
            return _this2.onChange(item.key);
          } })
      );
    }
  }, {
    key: "preventSelection",
    value: function preventSelection(event) {
      event.preventDefault();
    }
  }, {
    key: "toggleDropDown",
    value: function toggleDropDown(event) {
      this.setState({ isOpen: !this.state.isOpen });
    }
  }, {
    key: "handleDocumentClick",
    value: function handleDocumentClick(event) {
      if (!_reactDom2.default.findDOMNode(this).contains(event.target)) {
        this.setState({ isOpen: false });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener("click", this.handleDocumentClick, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("click", this.handleDocumentClick, false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var selectedItem = this.props.items.filter(function (obj) {
        return obj.key === _this3.props.selected;
      })[0];

      var wrapperStyle = [_DropdownStyle2.default.wrapper, this.state.isOpen && _DropdownStyle2.default.wrapperOpened];

      var dropdownStyle = [_DropdownStyle2.default.dropdown, this.state.isOpen && _DropdownStyle2.default.dropdownOpened];

      var arrowStyle = [_DropdownStyle2.default.arrow, this.state.isOpen && _DropdownStyle2.default.arrowOpened];

      return _react2.default.createElement(
        "div",
        { style: wrapperStyle, onClick: this.toggleDropDown.bind(this) },
        _react2.default.createElement(
          _DropdownItem2.default,
          {
            item: selectedItem,
            style: _DropdownStyle2.default.selectedItem,
            onMouseDown: this.preventSelection.bind(this) },
          _react2.default.createElement(_icons2.default.DropdownArrow, { style: arrowStyle })
        ),
        _react2.default.createElement(
          "ul",
          { style: dropdownStyle },
          this.props.items.map(this.renderItem.bind(this))
        )
      );
    }
  }]);

  return Dropdown;
}(_react.Component), _class2.propTypes = {
  items: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
    key: _react.PropTypes.string.isRequired,
    icon: _react.PropTypes.func.isRequired,
    label: _react.PropTypes.string.isRequired
  })),
  selected: _react.PropTypes.string.isRequired,
  onChange: _react.PropTypes.func.isRequired
}, _temp)) || _class;
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

var _MediaControlsActionsStyle = require("../styles/components/MediaControlsActionsStyle");

var _MediaControlsActionsStyle2 = _interopRequireDefault(_MediaControlsActionsStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = (0, _radium2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(MediaControlsActionsItem, _Component);

  function MediaControlsActionsItem() {
    _classCallCheck(this, MediaControlsActionsItem);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(MediaControlsActionsItem).apply(this, arguments));
  }

  _createClass(MediaControlsActionsItem, [{
    key: "render",
    value: function render() {
      var Icon = this.props.item.icon;
      return _react2.default.createElement(
        "li",
        { style: _MediaControlsActionsStyle2.default.actionsGroupItem, onClick: this.props.item.action },
        _react2.default.createElement(Icon, { style: _MediaControlsActionsStyle2.default.actionsGroupItemIcon })
      );
    }
  }]);

  return MediaControlsActionsItem;
}(_react.Component), _class2.propTypes = {
  item: _react2.default.PropTypes.shape({
    key: _react.PropTypes.string.isRequired,
    icon: _react.PropTypes.func.isRequired,
    action: _react.PropTypes.func.isRequired
  })
}, _temp)) || _class;
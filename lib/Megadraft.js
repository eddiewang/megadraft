"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DraftJS = undefined;

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

var _draftJs = require("draft-js");

var _draftJs2 = _interopRequireDefault(_draftJs);

var _icons = require("./icons");

var _icons2 = _interopRequireDefault(_icons);

var _Toolbar = require("./Toolbar");

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Sidebar = require("./components/Sidebar");

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _Media = require("./components/Media");

var _Media2 = _interopRequireDefault(_Media);

var _MegadraftStyles = require("./styles/MegadraftStyles");

var _MegadraftStyles2 = _interopRequireDefault(_MegadraftStyles);

var _default = require("./plugins/default");

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = (0, _radium2.default)(_class = function (_Component) {
  _inherits(Megadraft, _Component);

  function Megadraft(props) {
    _classCallCheck(this, Megadraft);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Megadraft).call(this, props));

    _this.state = {
      readOnly: false
    };

    _this.setReadOnly = _this.setReadOnly.bind(_this);

    _this.actions = [{ type: "inline", label: "B", style: "BOLD", icon: _icons2.default.BoldIcon }, { type: "inline", label: "I", style: "ITALIC", icon: _icons2.default.ItalicIcon }, { type: "entity", label: "Link", style: "link", icon: _icons2.default.LinkIcon }, { type: "separator" }, { type: "block", label: "UL", style: "unordered-list-item", icon: _icons2.default.ULIcon }, { type: "block", label: "OL", style: "ordered-list-item", icon: _icons2.default.OLIcon }, { type: "block", label: "H2", style: "header-two", icon: _icons2.default.H2Icon }, { type: "block", label: "QT", style: "blockquote", icon: _icons2.default.BlockQuoteIcon }];

    _this.plugins = _this.props.plugins || _default2.default;
    return _this;
  }

  _createClass(Megadraft, [{
    key: "onChange",
    value: function onChange(editorState) {
      this.props.onChange(editorState);
    }
  }, {
    key: "handleKeyCommand",
    value: function handleKeyCommand(command) {
      var editorState = this.props.editorState;

      var newState = _draftJs.RichUtils.handleKeyCommand(editorState, command);
      if (newState) {
        this.props.onChange(newState);
        return true;
      }
      return false;
    }
  }, {
    key: "setReadOnly",
    value: function setReadOnly(readOnly) {
      this.setState({ readOnly: readOnly });
    }
  }, {
    key: "mediaBlockRenderer",
    value: function mediaBlockRenderer(block) {
      if (block.getType() === "atomic") {
        return {
          component: _Media2.default,
          editable: false,
          props: {
            plugins: this.plugins,
            onChange: this.onChange.bind(this),
            editorState: this.props.editorState,
            setReadOnly: this.setReadOnly
          }
        };
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props;
      var editorState = _props.editorState;
      var readOnly = _props.readOnly;

      var plugins = this.plugins;

      return _react2.default.createElement(
        "div",
        { className: "megadraft" },
        _react2.default.createElement(
          "div",
          {
            className: "megadraft-editor",
            style: _MegadraftStyles2.default.base,
            id: "megadraft-editor",
            ref: "editor" },
          _react2.default.createElement(_Sidebar2.default, {
            plugins: plugins,
            editorState: editorState,
            onChange: this.onChange.bind(this) }),
          _react2.default.createElement(_draftJs.Editor, {
            readOnly: this.props.readOnly ? this.props.readOnly : this.state.readOnly,
            plugins: plugins,
            blockRendererFn: this.mediaBlockRenderer.bind(this),
            handleKeyCommand: this.handleKeyCommand.bind(this),
            editorState: editorState,
            onChange: this.onChange.bind(this) }),
          _react2.default.createElement(_Toolbar2.default, {
            editor: this.refs.editor,
            editorState: editorState,
            onChange: this.onChange.bind(this),
            actions: this.actions })
        )
      );
    }
  }]);

  return Megadraft;
}(_react.Component)) || _class;
var DraftJS = exports.DraftJS = _draftJs2.default;
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

var _draftJs = require("draft-js");

var _icons = require("../icons");

var _icons2 = _interopRequireDefault(_icons);

var _MediaStyle = require("../styles/components/MediaStyle");

var _MediaStyle2 = _interopRequireDefault(_MediaStyle);

var _MediaControls = require("../components/MediaControls");

var _MediaControls2 = _interopRequireDefault(_MediaControls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = (0, _radium2.default)(_class = function (_Component) {
  _inherits(Media, _Component);

  function Media(props) {
    _classCallCheck(this, Media);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Media).call(this, props));

    _this.remove = _this.remove.bind(_this);
    _this.updateEntity = _this.updateEntity.bind(_this);
    _this.setFeatured = _this.setFeatured.bind(_this);

    _this.onChange = _this.props.blockProps.onChange;
    _this.block = _this.props.block;
    _this.entityKey = _this.block.getEntityAt(0);

    var entity = _draftJs.Entity.get(_this.entityKey);
    _this.state = {
      entityData: entity.getData()
    };

    _this.dropdownItems = [{ "key": "small", "icon": _icons2.default.MediaSmallIcon, "label": "SMALL" }, { "key": "medium", "icon": _icons2.default.MediaMediumIcon, "label": "MEDIUM" }, { "key": "big", "icon": _icons2.default.MediaBigIcon, "label": "BIG" }];
    _this.actionsItems = [{ "key": "crop", "icon": _icons2.default.CropIcon, "action": _this.crop }, { "key": "edit", "icon": _icons2.default.EditIcon, "action": _this.edit }, { "key": "delete", "icon": _icons2.default.DeleteIcon, "action": _this.remove }];
    _this.defaultFeatured = "medium";
    return _this;
  }

  _createClass(Media, [{
    key: "edit",
    value: function edit() {
      return;
    }
  }, {
    key: "crop",
    value: function crop() {
      return;
    }
  }, {
    key: "_refreshEditor",
    value: function _refreshEditor() {
      var editorState = this.props.blockProps.editorState;

      this.onChange(editorState);
    }
  }, {
    key: "remove",
    value: function remove() {
      var editorState = this.props.blockProps.editorState;

      var content = editorState.getCurrentContent();
      var targetRange = new _draftJs.SelectionState({
        anchorKey: this.block.key,
        anchorOffset: 0,
        focusKey: this.block.key,
        focusOffset: this.block.getLength()
      });

      var withoutMedia = _draftJs.Modifier.removeRange(content, targetRange, "backward");
      var resetBlock = _draftJs.Modifier.setBlockType(withoutMedia, withoutMedia.getSelectionAfter(), "unstyled");

      var newState = _draftJs.EditorState.push(editorState, resetBlock, "remove-range");
      var newEditorState = _draftJs.EditorState.forceSelection(newState, resetBlock.getSelectionAfter());
      this.onChange(newEditorState);
    }
  }, {
    key: "setFeatured",
    value: function setFeatured(key) {
      this.updateEntity({ featured: key });
    }
  }, {
    key: "updateEntity",
    value: function updateEntity(data) {
      // Entity doesn't change editor state
      // We have to merge data, update the local state and refresh the editor state
      var newEntity = _draftJs.Entity.mergeData(this.entityKey, data);
      this.setState({ entityData: newEntity.getData() });
      this._refreshEditor();
    }
  }, {
    key: "render",
    value: function render() {
      var entity = _draftJs.Entity.get(this.entityKey);
      var data = this.state.entityData;
      var type = entity.getType();
      var plugins = this.props.blockProps.plugins;
      var setReadOnly = this.props.blockProps.setReadOnly;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = plugins[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var plugin = _step.value;

          if (type === plugin.type) {
            var Block = plugin.blockComponent;
            return _react2.default.createElement(Block, {
              data: data,
              setReadOnly: setReadOnly,
              updateEntity: this.updateEntity });
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }]);

  return Media;
}(_react.Component)) || _class;
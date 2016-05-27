"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

exports.default = {
  base: {
    display: "inline-block",
    color: "#ccc",

    ":hover": {
      color: "#fff"
    }
  },
  active: {
    color: "#3192e7",
    ":hover": {
      color: "#3192e7"
    }
  },

  button: {
    padding: 0,
    color: "inherit",
    cursor: "pointer",
    border: 0,
    height: "56px",
    width: "40px",
    background: "transparent"
  }
};
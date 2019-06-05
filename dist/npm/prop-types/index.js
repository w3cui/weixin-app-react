/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
<<<<<<< HEAD
  var ReactIs = require("./npm/react-is/index.js");
=======
  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

  var isValidElement = function (object) {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  };
>>>>>>> 51c8217fc99247b5712c57e35f7900326285179e

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
<<<<<<< HEAD
  module.exports = require("./factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
=======
  module.exports = require("./factoryWithTypeCheckers.js")(isValidElement, throwOnDirectAccess);
>>>>>>> 51c8217fc99247b5712c57e35f7900326285179e
}
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("./index");

require("./pricingtable.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var basicFeatures = [{
  name: "Data Analysis",
  checked: true
}, {
  name: "Unlimited Users",
  checked: false,
  strikethrough: true
}];
var standardFeatures = [{
  name: "Data Analysis",
  checked: true
}, {
  name: "Unlimited Users",
  checked: false
}];
var customFeatures = ["Data Insertion", "Unlimited Brands"];

function PricingTableDisplay() {
  var _useState = (0, _react.useState)("1"),
      _useState2 = _slicedToArray(_useState, 1),
      priceInputValue = _useState2[0];

  var _useState3 = (0, _react.useState)({
    0: "1,000",
    1: "1,250",
    2: "1,500",
    3: "2,000",
    4: "2,500",
    5: "3,500",
    6: "6,000",
    7: "15,000",
    8: "50,000",
    9: "50,000+"
  }),
      _useState4 = _slicedToArray(_useState3, 1),
      priceInput = _useState4[0];

  var _useState5 = (0, _react.useState)({
    plan1: {
      0: ["", "Free", ""],
      1: ["$", "13", "/m"],
      2: ["$", "17", "/m"],
      3: ["$", "21", "/m"],
      4: ["$", "25", "/m"],
      5: ["$", "42", "/m"],
      6: ["$", "58", "/m"],
      7: ["$", "117", "/m"],
      8: ["$", "208", "/m"],
      9: ["", "Contact Us", ""]
    },
    plan2: {
      0: ["$", "13", "/m"],
      1: ["$", "17", "/m"],
      2: ["$", "21", "/m"],
      3: ["$", "25", "/m"],
      4: ["$", "42", "/m"],
      5: ["$", "58", "/m"],
      6: ["$", "117", "/m"],
      7: ["$", "208", "/m"],
      8: ["$", "333", "/m"],
      9: ["", "Contact Us", ""]
    }
  }),
      _useState6 = _slicedToArray(_useState5, 1),
      priceOutput = _useState6[0];

  var getPricingData = function getPricingData(obj, pos) {
    return pos !== undefined ? obj[priceInputValue][pos] : obj[priceInputValue];
  };

  var handleClick = function handleClick(title) {
    alert("".concat(title, " Plan Selected"));
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_index.PricingTable, null, /*#__PURE__*/_react.default.createElement(_index.PricingMenu, null, /*#__PURE__*/_react.default.createElement(_index.PricingMenuItem, null, /*#__PURE__*/_react.default.createElement(_index.PricingMenuItemContent, {
    body: '',
    title: "Basic",
    amount: "FREE",
    features: basicFeatures
  }, /*#__PURE__*/_react.default.createElement(_index.PricingTableButton, {
    onClick: function onClick() {
      return handleClick("Basic");
    }
  }))), /*#__PURE__*/_react.default.createElement(_index.PricingMenuItem, null, /*#__PURE__*/_react.default.createElement(_index.PricingMenuItemContent, {
    body: '',
    title: "Standard",
    amount: "5000",
    currency: "\u20A6",
    frequency: " /month",
    features: standardFeatures
  }, /*#__PURE__*/_react.default.createElement(_index.PricingTableButton, {
    onClick: function onClick() {
      return handleClick("Standard");
    }
  }))), /*#__PURE__*/_react.default.createElement(_index.PricingMenuItem, null, /*#__PURE__*/_react.default.createElement(_index.PricingMenuItemContent, {
    body: '',
    title: "Custom",
    amount: "15000",
    currency: "\u20A6",
    frequency: " /month",
    features: customFeatures
  }, /*#__PURE__*/_react.default.createElement(_index.PricingTableButton, {
    onClick: function onClick() {
      return handleClick("Custom");
    }
  }))))));
}

var _default = PricingTableDisplay;
exports.default = _default;
PricingTableDisplay.propTypes = {// backgroundColor: PropTypes.string,
  // label: PropTypes.string.isRequired,
  // onClick: PropTypes.func,
};
PricingTableDisplay.defaultProps = {// backgroundColor: null,
  // onClick: undefined,
};
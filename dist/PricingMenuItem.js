"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["children", "pricingMenuItemClass", "pricingMenuItemInnerClass", "pricingMenuItemStyle", "pricingMenuItemInnerStyle"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function PricingMenuItem(_ref) {
  var children = _ref.children,
      pricingMenuItemClass = _ref.pricingMenuItemClass,
      pricingMenuItemInnerClass = _ref.pricingMenuItemInnerClass,
      pricingMenuItemStyle = _ref.pricingMenuItemStyle,
      pricingMenuItemInnerStyle = _ref.pricingMenuItemInnerStyle,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: pricingMenuItemClass,
    style: pricingMenuItemStyle
  }, props), /*#__PURE__*/_react.default.createElement("div", {
    className: pricingMenuItemInnerClass,
    style: pricingMenuItemInnerStyle
  }, children));
}

var _default = PricingMenuItem;
exports.default = _default;
PricingMenuItem.propTypes = {
  backgroundColor: _propTypes.default.string,
  label: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func,
  pricingMenuItemClass: _propTypes.default.string,
  pricingMenuItemInnerClass: _propTypes.default.string,
  pricingMenuItemStyle: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.array]),
  pricingMenuItemInnerStyle: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.array])
};
PricingMenuItem.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
  pricingMenuItemClass: "pricing-item",
  pricingMenuItemInnerClass: "pricing-item-inner"
};
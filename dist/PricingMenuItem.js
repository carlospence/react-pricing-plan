"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./pricingtable.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PricingMenuItem(_ref) {
  var children = _ref.children,
      pricingMenuItemClass = _ref.pricingMenuItemClass,
      pricingMenuItemInnerClass = _ref.pricingMenuItemInnerClass,
      pricingMenuItemStyle = _ref.pricingMenuItemStyle,
      pricingMenuItemInnerStyle = _ref.pricingMenuItemInnerStyle;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: pricingMenuItemClass,
    style: pricingMenuItemStyle
  }, /*#__PURE__*/_react.default.createElement("div", {
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
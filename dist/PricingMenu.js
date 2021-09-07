"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./pricingtable.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PricingMenu(_ref) {
  var children = _ref.children,
      pricingMenuClass = _ref.pricingMenuClass,
      pricingMenuStyle = _ref.pricingMenuStyle;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: pricingMenuClass,
    style: pricingMenuStyle
  }, children);
}

var _default = PricingMenu;
exports.default = _default;
PricingMenu.propTypes = {
  backgroundColor: _propTypes.default.string,
  label: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func,
  pricingMenuClass: _propTypes.default.string,
  pricingMenuStyle: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.array])
};
PricingMenu.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
  pricingMenuClass: "pricing-items",
  pricingMenuStyle: {}
};
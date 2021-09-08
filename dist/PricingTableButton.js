"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PricingTableButton;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PricingTableButton(_ref) {
  var children = _ref.children,
      label = _ref.label,
      url = _ref.url,
      buttonClass = _ref.buttonClass,
      onClick = _ref.onClick;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: buttonClass,
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "button",
    href: url
  }, children && children !== undefined ? children : label && label ? label : ""));
}

PricingTableButton.propTypes = {
  backgroundColor: _propTypes.default.string,
  label: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func,
  url: _propTypes.default.string,
  buttonClass: _propTypes.default.string
};
PricingTableButton.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
  label: "Buy Now",
  url: "javascript:void(0)",
  buttonClass: "pricing-item-cta"
};
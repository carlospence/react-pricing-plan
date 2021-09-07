"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./pricingtable.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PricingTable(_ref) {
  var children = _ref.children,
      higlightColor = _ref.higlightColor,
      pricingTableClass = _ref.pricingTableClass,
      pricingTableStyle = _ref.pricingTableStyle;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: pricingTableClass,
    style: pricingTableStyle
  }, children);
}

var _default = PricingTable;
exports.default = _default;
PricingTable.propTypes = {
  backgroundColor: _propTypes.default.string,
  label: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func,
  pricingTableClass: _propTypes.default.string,
  pricingTableStyle: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.array])
};
PricingTable.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
  pricingTableClass: "pricing"
};
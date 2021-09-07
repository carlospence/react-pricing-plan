"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _PricingTableExample = _interopRequireDefault(require("./PricingTableExample"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Example/PricingTableExample',
  component: _PricingTableExample.default,
  argTypes: {}
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_PricingTableExample.default, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {//   label: 'My Pricing Table',
};
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PricingMenuItemContent(_ref) {
  var children = _ref.children,
      body = _ref.body,
      footer = _ref.footer,
      header = _ref.header,
      title = _ref.title,
      currency = _ref.currency,
      amount = _ref.amount,
      frequency = _ref.frequency,
      features = _ref.features,
      pricingItemTitleClass = _ref.pricingItemTitleClass,
      pricingItemPriceClass = _ref.pricingItemPriceClass,
      pricingItemPriceAmountClass = _ref.pricingItemPriceAmountClass,
      pricingItemPriceCurrencyClass = _ref.pricingItemPriceCurrencyClass,
      pricingItemFeaturesClass = _ref.pricingItemFeaturesClass,
      pricingItemFeaturesListClass = _ref.pricingItemFeaturesListClass;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "pricing-item-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "pricing-item-header center-content"
  }, header, /*#__PURE__*/_react.default.createElement("div", {
    className: pricingItemTitleClass
  }, title), /*#__PURE__*/_react.default.createElement("div", {
    className: pricingItemPriceClass
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: pricingItemPriceCurrencyClass
  }, currency), /*#__PURE__*/_react.default.createElement("span", {
    className: pricingItemPriceAmountClass
  }, amount), frequency)), /*#__PURE__*/_react.default.createElement("div", null, body), /*#__PURE__*/_react.default.createElement("div", {
    className: pricingItemFeaturesClass
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: pricingItemFeaturesListClass
  }, features && features.map(function (x) {
    return /*#__PURE__*/_react.default.createElement("li", {
      className: x.checked ? "is-checked" : x.strikethrough ? 'text-line-through' : x ? 'is-checked' : ''
    }, x.name ? x.name : x);
  }))), children, /*#__PURE__*/_react.default.createElement("div", null, footer));
}

var _default = PricingMenuItemContent;
exports.default = _default;
PricingMenuItemContent.propTypes = {
  backgroundColor: _propTypes.default.string,
  label: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func,
  features: _propTypes.default.array,
  pricingItemTitleClass: _propTypes.default.string,
  pricingItemPriceClass: _propTypes.default.string,
  pricingItemPriceAmountClass: _propTypes.default.string,
  pricingItemPriceCurrencyClass: _propTypes.default.string,
  pricingItemFeaturesClass: _propTypes.default.string,
  pricingItemFeaturesListClass: _propTypes.default.string
};
PricingMenuItemContent.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
  features: [],
  pricingItemTitleClass: "pricing-item-title",
  pricingItemPriceClass: "pricing-item-price",
  pricingItemPriceAmountClass: "pricing-item-price-amount",
  pricingItemPriceCurrencyClass: "pricing-item-price-currency",
  pricingItemFeaturesClass: "pricing-item-features",
  pricingItemFeaturesListClass: "pricing-item-features-list"
};
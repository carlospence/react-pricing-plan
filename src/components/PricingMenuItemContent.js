import React from 'react';
import PropTypes from 'prop-types';


function PricingMenuItemContent({ children, body, footer, header, title, currency, amount, frequency, features,
    pricingItemTitleClass, pricingItemPriceClass, pricingItemPriceAmountClass, pricingItemPriceCurrencyClass, pricingItemFeaturesClass,
    pricingItemFeaturesListClass
}) {

    return (
        <div className="pricing-item-content">
            <div className="pricing-item-header center-content">
                {header}
                <div className={pricingItemTitleClass}>{title}</div>
                <div className={pricingItemPriceClass}>
                    <span className={pricingItemPriceCurrencyClass}>
                        {currency}
                    </span>
                    <span className={pricingItemPriceAmountClass}>
                        {amount}
                    </span>
                    {frequency}
                </div>
            </div>
            <div>
                {body}
            </div>
            <div className={pricingItemFeaturesClass}>
                <ul className={pricingItemFeaturesListClass}>
                  {features && features.map(x => {
                      return <li className={x.checked ? `is-checked` : x.strikethrough ? 'text-line-through' : x ? 'is-checked' : ''}>{x.name ? x.name : x}</li>
                  })}
                </ul>
            </div>
           {children}
           <div>
               {footer}
           </div>
        </div>
    );
}

export default PricingMenuItemContent

PricingMenuItemContent.propTypes = {
    backgroundColor: PropTypes.string,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    features: PropTypes.array,
    pricingItemTitleClass: PropTypes.string, 
    pricingItemPriceClass: PropTypes.string, 
    pricingItemPriceAmountClass: PropTypes.string, 
    pricingItemPriceCurrencyClass: PropTypes.string, 
    pricingItemFeaturesClass: PropTypes.string,
    pricingItemFeaturesListClass: PropTypes.string
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
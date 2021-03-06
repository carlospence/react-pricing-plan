import React from 'react';
import PropTypes from 'prop-types';


function PricingMenuItem({ children, pricingMenuItemClass, pricingMenuItemInnerClass, pricingMenuItemStyle, pricingMenuItemInnerStyle, ...props  }) {

    return (
        <div className={pricingMenuItemClass} style={pricingMenuItemStyle} {...props}>
            <div className={pricingMenuItemInnerClass} style={pricingMenuItemInnerStyle}>
                {children}
            </div>
        </div>
    );
}

export default PricingMenuItem

PricingMenuItem.propTypes = {
    backgroundColor: PropTypes.string,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    pricingMenuItemClass: PropTypes.string,
    pricingMenuItemInnerClass: PropTypes.string,
    pricingMenuItemStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    pricingMenuItemInnerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

PricingMenuItem.defaultProps = {
    backgroundColor: null,
    onClick: undefined,
    pricingMenuItemClass: "pricing-item",
    pricingMenuItemInnerClass: "pricing-item-inner",
};
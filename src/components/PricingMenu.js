import React from 'react';
import PropTypes from 'prop-types';


function PricingMenu({ children, pricingMenuClass, pricingMenuStyle, ...props }) {

    return (
        <div className={pricingMenuClass} style={pricingMenuStyle} {...props}>
         {children}
        </div>
    );
}

export default PricingMenu

PricingMenu.propTypes = {
    backgroundColor: PropTypes.string,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    pricingMenuClass: PropTypes.string,
    pricingMenuStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

PricingMenu.defaultProps = {
    backgroundColor: null,
    onClick: undefined,
    pricingMenuClass: "pricing-items",
    pricingMenuStyle: {}
};
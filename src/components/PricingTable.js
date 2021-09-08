import React from 'react';
import PropTypes from 'prop-types';


function PricingTable({ children, higlightColor, pricingTableClass, pricingTableStyle, ...props }) {

    return (
        <div className={pricingTableClass} style={pricingTableStyle} {...props}>
           {children}
        </div>
    );
}

export default PricingTable

PricingTable.propTypes = {
    backgroundColor: PropTypes.string,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    pricingTableClass: PropTypes.string,
    pricingTableStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

PricingTable.defaultProps = {
    backgroundColor: null,
    onClick: undefined,
    pricingTableClass: "pricing",
};
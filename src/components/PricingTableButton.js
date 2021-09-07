import React from 'react';
import PropTypes from 'prop-types';

export default function PricingTableButton({ children, label, url, buttonClass, onClick }) {
  return (
   
    <div className={buttonClass} onClick={onClick}>
      <a className="button" href={url}>
      {label && label ? label : children}
      </a>
    </div>
  );
}

PricingTableButton.propTypes = {
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  url: PropTypes.string,
  buttonClass: PropTypes.string,
};

PricingTableButton.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
  label: "Buy Now",
  url: "javascript:void(0)",
  buttonClass: "pricing-item-cta"
};

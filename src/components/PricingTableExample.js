import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import {PricingTable, PricingMenu, PricingMenuItem, PricingMenuItemContent, PricingTableButton} from './index'

import './pricingtable.css';

const basicFeatures = [{name : "Data Analysis", checked : true}, {name : "Unlimited Users", checked : false, strikethrough: true}]
const standardFeatures = [{name : "Data Analysis", checked : true}, {name : "Unlimited Users", checked : false}]
const customFeatures = ["Data Insertion", "Unlimited Brands"]

function PricingTableDisplay({buttonLabel}) {

    const [priceInputValue] = useState("1");
    const [priceInput] = useState({
        0: "1,000",
        1: "1,250",
        2: "1,500",
        3: "2,000",
        4: "2,500",
        5: "3,500",
        6: "6,000",
        7: "15,000",
        8: "50,000",
        9: "50,000+"
    });
    const [priceOutput] = useState({
        plan1: {
            0: ["", "Free", ""],
            1: ["$", "13", "/m"],
            2: ["$", "17", "/m"],
            3: ["$", "21", "/m"],
            4: ["$", "25", "/m"],
            5: ["$", "42", "/m"],
            6: ["$", "58", "/m"],
            7: ["$", "117", "/m"],
            8: ["$", "208", "/m"],
            9: ["", "Contact Us", ""]
        },
        plan2: {
            0: ["$", "13", "/m"],
            1: ["$", "17", "/m"],
            2: ["$", "21", "/m"],
            3: ["$", "25", "/m"],
            4: ["$", "42", "/m"],
            5: ["$", "58", "/m"],
            6: ["$", "117", "/m"],
            7: ["$", "208", "/m"],
            8: ["$", "333", "/m"],
            9: ["", "Contact Us", ""]
        }
    })

    const getPricingData = (obj, pos) => {
        return pos !== undefined
            ? obj[priceInputValue][pos]
            : obj[priceInputValue];
    };

    const handleClick = (title) => {
        alert(`${title} Plan Selected`)
    }

    return (
        <div>
          <PricingTable>
              <PricingMenu>
                  <PricingMenuItem style={{flexBasis: "344px", maxWidth: "344px"}}>
                     
                     <PricingMenuItemContent  body={''} title="Basic" amount="FREE" features={basicFeatures}>
                     <PricingTableButton onClick={() => handleClick("Basic")}></PricingTableButton>
                     </PricingMenuItemContent>
                  </PricingMenuItem>
                  <PricingMenuItem>
                     <PricingMenuItemContent body={ ''} title="Standard" amount="5000" currency="₦" frequency={` /month`} features={standardFeatures} >
                     <PricingTableButton label={buttonLabel} onClick={() => handleClick("Standard")}></PricingTableButton>
                     </PricingMenuItemContent>
                    
                  </PricingMenuItem>
                  <PricingMenuItem>
                     <PricingMenuItemContent body={ ''} title="Custom" amount="15000" currency="₦" frequency={` /month`} features={customFeatures} >
                     <PricingTableButton label="Sign up" onClick={() => handleClick("Custom")}>
                         
                     </PricingTableButton>
                     </PricingMenuItemContent>
                    
                  </PricingMenuItem>
              </PricingMenu>
          </PricingTable>
        </div>
    );
}

export default PricingTableDisplay

PricingTableDisplay.propTypes = {
    // backgroundColor: PropTypes.string,
    buttonLabel: PropTypes.string.isRequired,
    // onClick: PropTypes.func,
};

PricingTableDisplay.defaultProps = {
    // backgroundColor: null,
    // onClick: undefined,
    buttonLabel: "Buy Now"
};
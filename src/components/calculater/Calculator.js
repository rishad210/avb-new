import React, { useState } from "react";
// import CalculatorApi from '../apis/CalculetorApi';
import "./Calculator.css";

import categoryData from "./categoryData"; // Import the categoryData

const Calculator = () => {
//req
const [isRequiredShipping, setIsRequiredShipping] = useState(false);
const [isRequiredSubcategory, setIsRequiredSubcategory] = useState(false);
const [isRequiredLandingprice, setIsRequiredLandingprice] = useState(false);

const [isRequiredCategory, setIsRequiredCategory] = useState(false);
const [isButtonPressed, setIsButtonPressed] = useState(false);

  const [landingPrice, setLandingPrice] = useState("");
  const [gst, setGst] = useState("");
  const [estimatedMonthlyUnitsSold, setEstimatedMonthlyUnitsSold] =
    useState("");
  const [faultyReturnsPercent, setFaultyReturnsPercent] = useState("");
  const [shippingPrice, setShippingPrice] = useState("");
  const [miscellaneousCosts, setMiscellaneousCosts] = useState("");
  const [estimatedReturnedPercent, setEstimatedReturnedPercent] = useState("");
  const [targetProfitMarginPercent, setTargetProfitMarginPercent] =
    useState("");
  // const [selectedChannel, setSelectedChannel] = useState("");
  // const [selectedProduct, setSelectedProduct] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  //drop
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [referralFeePercentage, setReferralFeePercentage] = useState("");
  const [referralFee, setReferralFee] = useState("");
  const [priceToBeSoldAt, setPriceToBeSoldAt] = useState("");
  const [amazoneFee, setAmazoneFee] = useState(" 0.00");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedSubcategory("");
    setReferralFeePercentage("");
    console.log(event.target.value);
  };

  const handleSubcategoryChange = (event) => {
    setSelectedSubcategory(event.target.value);
    setReferralFeePercentage(
      getReferralFeePercentage(selectedCategory, event.target.value)
    );
  };

  const getReferralFeePercentage = (category, subcategory) => {
    // Get the referral fee percentage based on the selected category and subcategory
    let referralFeePercentage = "";
    if (categoryData[category] && categoryData[category][subcategory]) {
      referralFeePercentage = categoryData[category][subcategory];
    } else if (categoryData[category]) {
      referralFeePercentage = categoryData[category];
    }

    return referralFeePercentage;
  };

  const categoryOptions = Object.keys(categoryData).map((category) => (
    <option key={category} value={category}>
      {category}
    </option>
  ));

  const subcategoryOptions =
    selectedCategory &&
    Object.keys(categoryData[selectedCategory]).map((subcategory) => (
      <option key={subcategory} value={subcategory}>
        {subcategory}
      </option>
    ));
  //drop

  const handleToggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "landingPrice":
        setLandingPrice(parseFloat(value));
        break;
      case "gstPercent":
        setGst(parseFloat(value));
        break;
      case "estimatedMonthlyUnitsSold":
        setEstimatedMonthlyUnitsSold(parseFloat(value));
        break;
      case "faultyReturnsPercent":
        setFaultyReturnsPercent(parseFloat(value));
        break;
      case "shippingPrice":
        setShippingPrice(parseFloat(value));
        break;
      case "miscellaneousCosts":
        setMiscellaneousCosts(parseFloat(value));
        break;
      case "estimatedReturnedPercent":
        setEstimatedReturnedPercent(parseFloat(value));
        break;
      case "targetProfitMarginPercent":
        setTargetProfitMarginPercent(parseFloat(value));
        break;
      default:
        break;
    }
  };

  // const handleChannelChange = (event) => {
  //   setSelectedChannel(event.target.value);
  // };

  // const handleProductChange = (event) => {
  //   setSelectedProduct(event.target.value);
  //   console.log(event.target.value);
  //   console.log(landingPrice + "ssss");
  // };

  // function calculateReferralFee() {
  //   const referralFee =
  //     (landingPrice * parseFloat(referralFeePercentage)) / 100;
  //   PriceToSoldAt();
  //   console.log(referralFee + "referralFee");
  //   console.log(referralFeePercentage + "referralFeePercentage");
  //   setReferralFee(referralFee);
  // }

  // function PriceToSoldAt() {
  //   const priceToBeSoldAt = referralFee + shippingPrice;
  //   console.log(priceToBeSoldAt + " priceToBeSoldAt");
  //   setPriceToBeSoldAt(priceToBeSoldAt);
  // }

  const calculatePrice = () => {
    const price = landingPrice + shippingPrice + gst;
    const amazoneFee = price * (referralFeePercentage / 100);
    const priceToBeSoldAt = price * ((100 + targetProfitMarginPercent) / 100);
    setAmazoneFee(amazoneFee);
    setPriceToBeSoldAt(priceToBeSoldAt);
    // You can use the calculated values in your UI or log them to the console
    console.log("Price:", price);
    console.log("Amazone Fee:", amazoneFee);
    console.log("Product to be Sold at:", priceToBeSoldAt);

    setIsButtonPressed(true);

    if (shippingPrice === '') {
      setIsRequiredShipping(true);
    } else {
      setIsRequiredShipping(false);
    }

    if (selectedSubcategory === '') {
      setIsRequiredSubcategory(true);
    } else {
      setIsRequiredSubcategory(false);
    }

    if (selectedCategory === '') {
      setIsRequiredCategory(true);
    } else {
      setIsRequiredCategory(false);
    }

    if (landingPrice === '') {
      setIsRequiredLandingprice(true);
    } else {
      setIsRequiredLandingprice(false);
    }
  };

  return (
    <div className="Container">
      <div className="row">
        <div className=" row column-border">
          <div className="column">
            <div>
              <div className="InputField">
                <label htmlFor="category">Category:</label>

                <select
                  id="category"
                  className={`select-field${isRequiredCategory && isButtonPressed ? ' required' : ''}`}
         
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  required
                >
                  <option value="">Select Category</option>
                  {categoryOptions}
                </select>
                {isRequiredCategory && isButtonPressed && <div className="required-text">Required</div>}
   
              </div>
              <div className=" InputField">
                <label htmlFor="subcategory">Subcategory:
                <select
                  id="subcategory"
                  className={`select-field${isRequiredSubcategory && isButtonPressed ? ' required' : ''}`}
                  value={selectedSubcategory}
                  onChange={handleSubcategoryChange}
                  disabled={!selectedCategory}
                  required
                >
                  <option value="">Select Subcategory</option>
                  {subcategoryOptions}
                </select>
                {isRequiredSubcategory && isButtonPressed && <div className="required-text">Required</div>}
                </label>
              </div>
            </div>

            {/* ---- Channel Inpupt ---- */}

            {/* <div className="InputField  custom-select ">
              <label>
                Channel:
                <select value={selectedChannel} onChange={handleChannelChange}>
                  <option value="">Select Channel</option>
                  <option value="Amazon">Amazon</option>
                  <option value="eBay">eBay</option>
                  <option value="Walmart">Walmart</option>
                </select>
              </label>
            </div> */}

            <div className="InputField ">
              <label>
                Landing Price:
                <input
                  className={`select-field${isRequiredLandingprice && isButtonPressed ? ' required' : ''}`}
                  type="number"
                  name="landingPrice"
                  value={landingPrice}
                  onChange={handleInputChange}
                  required
                />
                 {isRequiredLandingprice && isButtonPressed && <div className="required-text">Required</div>}
              </label>
            </div>

            <div className="InputField ">
              <label>
                Estimated Monthly Units Sold:
                <input
                  className="select-field"
                  type="number"
                  name="estimatedMonthlyUnitsSold"
                  value={estimatedMonthlyUnitsSold}
                  onChange={handleInputChange}
                />
              </label>
            </div>

            <div className="InputField ">
              <label>
                Faulty Returns %:
                <input
                  className="select-field"
                  type="number"
                  name="faultyReturnsPercent"
                  value={faultyReturnsPercent}
                  onChange={handleInputChange}
                />
              </label>
            </div>

            <div className="InputField ">
              <label>
                TargetProfit Margin %:
                <input
                  className="select-field"
                  type="number"
                  name="targetProfitMarginPercent"
                  value={targetProfitMarginPercent}
                  onChange={handleInputChange}
                />
              </label>
            </div>
          </div>{" "}
          <div className="column">
            {/* ---- Product Input ---- */}
            {/* <div className="InputField ">
              <label>
                Product:
                <select value={selectedProduct} onChange={handleProductChange}>
                  <option value="">Select Product</option>
                  <option value="Product1">Product1</option>
                  <option value="Product2">Product2</option>
                  <option value="Product3">Product3</option>
                </select>
              </label>
            </div> */}

            <div className="InputField ">
              <label>
                GST %:
                <input
                  className="select-field"
                  type="number"
                  name="gstPercent"
                  value={gst}
                  onChange={handleInputChange}
                />
              </label>
            </div>

            <div className="InputField ">
              <label>
                Shipping Price:
                <input
                    className={`select-field${isRequiredShipping && isButtonPressed ? ' required' : ''}`}
                    type="number"
                  name="shippingPrice"
                  value={shippingPrice}
                  onChange={handleInputChange}
                  required
                />
                 {isRequiredShipping && isButtonPressed && <div className="required-text">Required</div>}
              </label>
            </div>

            <div className="InputField ">
              <label>
                Miscellaneous Costs:
                <input
                  className="select-field"
                  type="number"
                  name="miscellaneousCosts"
                  value={miscellaneousCosts}
                  onChange={handleInputChange}
                />
              </label>
            </div>

            <div className="InputField ">
              <label>
                Estimated Returned %:
                <input
                  className="select-field"
                  type="number"
                  name="estimatedReturnedPercent"
                  value={estimatedReturnedPercent}
                  onChange={handleInputChange}
                />
              </label>
            </div>
          </div>
        </div>

        <div className="rightField">
          <div className="dropdownDev">
            <p>
              Amazone fee { amazoneFee}
              <span
                onClick={handleToggleDropdown}
                className={`dropdown-button ${showDropdown ? "open" : ""}`}
              >
                {showDropdown ? " ▲ " : " ▼ "}
              </span>
            </p>
            {showDropdown && (
              <div>
                <p className="fee-item">
                  Referral Fee: <span className="currency">INR</span> 0
                </p>
                <p className="fee-item">
                  Variable Closing Fee: <span className="currency">INR</span> 0
                </p>
                <p className="fee-item">
                  Per Item Fee: <span className="currency">INR</span>0
                </p>
                <p className="fee-item">
                  Tax Amount: <span className="currency">INR</span> 0
                </p>
                <p className="fee-item">
                  Total Fees: <span className="currency">INR</span> 0
                </p>
              </div>
            )}
          </div>

          <div className="right-field-bottom">
            {/* <p>
              <b>Total Expenditure:</b>{" "}
              {(
                ((landingPrice +
                  gstPercent +
                  miscellaneousCosts +
                  shippingPrice +
                  fees.feeDetailList[0].FinalFee.Amount) *
                  estimatedMonthlyUnitsSold +
                  (shippingPrice + fees.feeDetailList[0].TaxAmount.Amount) *
                    estimatedReturnedPercent) /
                estimatedMonthlyUnitsSold
              ).toFixed(2)}
            </p> */}

            {/* <h5><span className="span">ToTal Expenditure:</span> 326.47</h5> */}
            <h5>
              <span className="span">Price to be sold at: </span>
              { priceToBeSoldAt}
            </h5>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          <span className="span">Profit Per Unit:</span> 0
        </div>
        <div>
          <span className="span">Return Of Invesment:</span>0
        </div>
      </div>
      <h1>{referralFee}</h1>
      <button onClick={calculatePrice}>OK</button>
    </div>
  );
};

export default Calculator;

// import React, { useState, useEffect } from 'react';

// function CalculatorApi() {
//   const [fees, setFees] = useState({});
//   console.log(  fees.FeeDetailList)
    
//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch('https://demoapi.pointnxt.com/api/v1/auth/mcm/channel/3/product/38/priceRequest', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer 141|kBeB4nwynC5ktklZrjtBwp05TufKegzqQdYXA5Xt'
//         },
//         body: JSON.stringify({
//           "listing_price": 0,
//           "shipping_price": 10,
//           "miscellaneous_cost": 0,
//           "target_profit": 0,
//           "monthly_unitssold": 1,
//           "monthly_unitsreturned": 0,
//           "gst": 0,
//           "e_faultyreturns": 0
//         })
//       });
//       const data = await response.json();
//       setFees(data.result.payload.FeesEstimateResult.FeesEstimate);
//     };
//     fetchData();
    
//   }, []);

//   return (
 

// <div>
//   {  (
//     <div>
//       <p><b>Total Expenditure:</b> {(((((inputValue.listing_price + inputValue.gst + inputValue.miscellaneous_cost + inputValue.shipping_price + feeDetailList[0].FinalFee.Amount) * inputValue.e_monthly_unitssold) + ((inputValue.shipping_price + feeDetailList[0].TaxAmount.Amount) * inputValue.e_monthly_unitsreturned)) / inputValue.e_monthly_unitssold)).toFixed(2)}</p>

//       <p><b>Price to be sold at:</b> {(((((inputValue.listing_price + inputValue.gst + inputValue.miscellaneous_cost + inputValue.shipping_price + feeDetailList[0].FinalFee.Amount) * inputValue.e_monthly_unitssold) + ((inputValue.shipping_price + feeDetailList[0].TaxAmount.Amount) * inputValue.e_monthly_unitsreturned) + ((inputValue.listing_price + inputValue.gst + inputValue.miscellaneous_cost)*inputValue.e_faultyreturns))/ inputValue.e_monthly_unitssold) * ((100 + inputValue.target_profit) / 100)).toFixed(2)}</p>

//       <p><b>Profit Per Unit:</b> {((((((inputValue.listing_price + inputValue.gst + inputValue.miscellaneous_cost + inputValue.shipping_price + feeDetailList[0].FinalFee.Amount) * inputValue.e_monthly_unitssold) + ((inputValue.shipping_price + feeDetailList[0].TaxAmount.Amount) * inputValue.e_monthly_unitsreturned) + ((inputValue.listing_price + inputValue.gst + inputValue.miscellaneous_cost)*inputValue.e_faultyreturns))/ inputValue.e_monthly_unitssold) * ((100 + inputValue.target_profit) / 100)) - (((((inputValue.listing_price + inputValue.gst + inputValue.miscellaneous_cost + inputValue.shipping_price + feeDetailList[0].FinalFee.Amount) * inputValue.e_monthly_unitssold) + ((inputValue.shipping_price + feeDetailList[0].TaxAmount.Amount) * inputValue.e_monthly_unitsreturned)+((inputValue.listing_price + inputValue.gst + inputValue.miscellaneous_cost)*inputValue.e_faultyreturns)) / inputValue.e_monthly_unitssold))).toFixed(2)}</p>

//       <p><b>Return of Investment:</b> {((((inputValue.listing_price + inputValue.gst + inputValue.miscellaneous_cost + inputValue.shipping_price + feeDetailList[0].FinalFee.Amount) * ((100 + inputValue.target_profit) / 100)) - (inputValue.listing_price + inputValue.gst + inputValue.miscellaneous_cost + inputValue.shipping_price + feeDetailList[0].FinalFee.Amount))*(inputValue.e_monthly_unitssold)).toFixed(2)}</p>
//     </div>
//   )}
// </div>



//     // <div>
//     //   <h5>Total Fees Estimate: {fees.TotalFeesEstimate?.Amount}</h5>
//     //   <h5>Referral Fee: {fees.FeeDetailList?.[0].FeeAmount?.Amount}</h5>
//     //   <h5>Variable Closing Fee: {fees.FeeDetailList?.[1].FeeAmount?.Amount}</h5>
//     //   <h5>Per Item Fee: {fees.FeeDetailList?.[2].FeeAmount?.Amount}</h5>
//     // </div>
//   );
  
// }

// export default CalculatorApi;

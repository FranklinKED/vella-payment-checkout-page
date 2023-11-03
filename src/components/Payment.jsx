import React from "react";

export default function Payment() {
  return (
    <div className="payment">
      <div className="circle-container">
        <h2 className="circle-text">VD</h2>
      </div>
      <div className="rectangle-container">
        <p className="first-para">New payment link from</p>
        <p className="second-para">Vella Store Demo</p>
        <p className="third-para">MARK TEST EBOOK</p>
        <h6 className="text">
          This is a sample payment link generated to test Vella’s payment
          gateway. All payments are live.
        </h6>
      </div>
      <div className="amount-to-pay">
        <p className="amount">Amount to pay</p>
        <h6 className="price">₦2,000</h6>
      </div>
      <h6 className="copyright">
        Powered by <span>Vella</span>
      </h6>
    </div>
  );
}

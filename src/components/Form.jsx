import React from "react";

export default function Form() {
  return (
    <div className="container-form">
      <h2 className="form-heading">Customer Information</h2>
      <form action="" className="form">
        <input
          type="text"
          placeholder="first Name"
          className="first-name"
          required
        />
        <input
          type="text"
          placeholder="last Name"
          className="last-name"
          required
        />
        <input
          type="email"
          placeholder="email address"
          className="email"
          required
        />
        <label htmlFor="currency">currency NGN</label>
        <input
          type="number"
          id="currency"
          className="number"
          placeholder="2,000"
        />
        <button className="btn">Pay</button>
      </form>
      <p className="confirm">
        By confirming , you allow Vella to charge you for this payment.
      </p>
      <div className="footer">
        <p>Terms and conditions</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  );
}

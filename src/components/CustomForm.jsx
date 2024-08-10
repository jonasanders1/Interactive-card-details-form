import React, { useState } from "react";
import "./CustomForm.css";

const CustomForm = ({
  setCardNumber,
  cardNumber,
  setCardHolderName,
  cardholderName,
  setExpiryMonth,
  expiryMonth,
  setExpiryYear,
  expiryYear,
  setCvc,
  cvc,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Basic validation (this can be expanded)
    if (cardholderName && cardNumber && expiryMonth && expiryYear && cvc) {
      console.log("Form submitted", {
        cardholderName,
        cardNumber,
        expiryMonth,
        expiryYear,
        cvc,
      });
    } else {
      console.log("Please fill in all fields");
    }
  };

  // Function to format the card number input with spaces
  const handleCardNumberChange = (e) => {
    const formattedNumber = e.target.value
      .replace(/\D/g, "")
      .replace(/(\d{4})/g, "$1 ")
      .trim();
    setCardNumber(formattedNumber);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form__field">
        <label htmlFor="cardholderName">Cardholder Name</label>
        <input
          type="text"
          id="cardholderName"
          placeholder="e.g. Jane Appleseed"
          value={cardholderName}
          onChange={(e) => setCardHolderName(e.target.value)}
          required
          aria-label="Cardholder Name"
        />
      </div>

      <div className="form__field">
        <label htmlFor="cardNumber">Card Number</label>
        <input
          type="text"
          id="cardNumber"
          placeholder="e.g. 1234 5678 9123 0000"
          value={cardNumber}
          onChange={handleCardNumberChange}
          maxLength="19"
          required
          aria-label="Card Number"
        />
      </div>

      <div className="row">
        <div className="form__field">
          <label htmlFor="expiryDate">Exp. Date (MM/YY)</label>
          <div className="expiry">
            <input
              type="text"
              id="expiryMonth"
              placeholder="MM"
              value={expiryMonth}
              onChange={(e) => setExpiryMonth(e.target.value)}
              maxLength="2"
              required
              aria-label="Expiration Month"
            />
            <input
              type="text"
              id="expiryYear"
              placeholder="YY"
              value={expiryYear}
              onChange={(e) => setExpiryYear(e.target.value)}
              maxLength="2"
              required
              aria-label="Expiration Year"
            />
          </div>
        </div>

        <div className="form__field">
          <label htmlFor="cvc">CVC</label>
          <input
            type="text"
            id="cvc"
            placeholder="e.g. 123"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            maxLength="3"
            required
            aria-label="CVC"
          />
        </div>
      </div>

      <button className="confirm-btn" type="submit">Confirm</button>
    </form>
  );
};

export default CustomForm;

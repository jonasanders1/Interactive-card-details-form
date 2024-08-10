import { useState } from "react";
import CustomForm from "./components/CustomForm";
import "./App.css";

function App() {
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [cardHolderName, setCardHolderName] = useState("Jane Appleseed");
  const [expiryMonth, setExpiryMonth] = useState("00");
  const [expiryYear, setExpiryYear] = useState("00");
  const [cvc, setCvc] = useState("000");

  return (
    <div className="container">
      <div className="card-section">
        <div className="cards">
          <div className="card-front">
            <span className="card-number">{cardNumber}</span>
            <div className="card-details">
              <span className="card-holder">{cardHolderName}</span>
              <span className="card-expiration-date">
                {expiryMonth}/{expiryYear}
              </span>
            </div>
          </div>
          <div className="card-back">
            <span className="cvc">{cvc}</span>
          </div>
        </div>
      </div>
      <div className="form-section">
        <CustomForm
          setCardNumber={setCardNumber}
          setCardHolderName={setCardHolderName}
          setExpiryMonth={setExpiryMonth}
          setExpiryYear={setExpiryYear}
          setCvc={setCvc}
          cardNumber={cardNumber}
          cardHolderName={cardHolderName}
          expiryMonth={expiryMonth}
          expiryYear={expiryYear}
          cvc={cvc}
        />
      </div>
    </div>
  );
}

export default App;

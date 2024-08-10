import { useState } from "react";
import CustomForm from "./components/CustomForm";
import "./App.css";

function App() {
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [cardHolderName, setCardHolderName] = useState("Jane Appleseed");
  const [expiryDate, setExpiryDate] = useState("00/00");
  const [cvc, setCvc] = useState("000");

  return (
    <div className="container">
      <div className="card-section">
        <div className="cards">
          <div className="card-front">
            <span className="card-number">{cardNumber}</span>
            <div className="card-details">
              <span className="card-holder">{cardHolderName}</span>
              <span className="card-expiration-date">{expiryDate}</span>
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
          setExpiryDate={setExpiryDate}
          setCvc={setCvc}
          cardNumber={cardNumber}
          cardHolderName={cardHolderName}
          expiryDate={expiryDate}
          cvc={cvc}
        />
      </div>
    </div>
  );
}

export default App;

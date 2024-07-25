import React from "react";
import { useState } from "react";

const messages = [
  "Research job market",
  "Apply for jobs",
  "Invest your new income",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <React.Fragment>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button style={{ backgroundColor: "#7950f2", color: "#fff" }}>
              Previous
            </button>
            <button style={{ backgroundColor: "#7950f2", color: "#fff" }}>
              Next
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

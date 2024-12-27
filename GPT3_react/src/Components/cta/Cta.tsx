import React from "react"
import "./Cta.css"
const Cta:React.FC = () => {
  return (
    <div className="gpt3_cta" id="cta">
      <div className="gpt3_cta-content">
        <p>
          Request Early Access
        </p>
        <h3>
          Register today to get early access to our latest AI models
        </h3>
      </div>
      <div className="gpt3_cta-btn">
        <button type="button">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Cta

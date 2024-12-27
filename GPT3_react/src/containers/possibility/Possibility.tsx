import React from "react";
import possibilityImg from "../../assets/ai.jpg";
import "./possibility.css";
const Possibility: React.FC = () => {
  return (
    <div className="gpt3_possibility section_padding " id="possibility">
      <div className="gpt3_possibility-img">
        <img src={possibilityImg} alt="Possibilty Image" />
      </div>
      <div className="gpt3_possibility-content">
        <h4>Request Early Access to Get started</h4>
        <h1 className="gradient_text">
          The possibilties beyond your imagination.
        </h1>
        <p>
          Yet bed any for travelling indulgence upleasing . Not thoughts all
          exercise blessing. Indulgence way everything joy alteration boisterous
          the attachment. Party we years to order allow asked of.
        </p>
        <h4>Apply Early to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;

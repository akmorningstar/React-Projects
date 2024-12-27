import React from "react";
import { Feature } from "../../Components";
import "./Features.css";
const FeaturesList = [
  {
    title: "Creative Writing",
    text: "Generate stories, poems, scripts, or even brainstorming ideas for creative projects using GPT-3's advanced text generation capabilities."
  },
  {
    title: "Language Translation",
    text: "Use GPT-3 to provide seamless translations between multiple languages while retaining the original context and meaning."
  },
  {
    title: "Code Assistance",
    text: "Boost productivity by using GPT-3 as a coding assistant for writing, debugging, and explaining code snippets."
  },
  {
    title: "Healthcare Support",
    text: "Integrate GPT-3 in healthcare systems to assist with patient query resolution, symptom checking, and medical record summarization."
  }
];

const Features:React.FC = () => {
  return (
    <div className="gpt3_features section__padding " id="features">
      <div className="gpt3_features-heading">
        <h1 className="gradient_text">
        The Future is Now and You just Need To Embrace It. Step into the Future with GPT-3
        </h1>
        
        <p>
        Request early access to the GPT-3 API and start building the future today.
        </p>
      </div>
      <div className="gpt3_features-container">
        {
          FeaturesList.map((feature, index)=>{
            return <Feature key={index}  title={feature.title} text={feature.text}/>
          })
        }
      </div>
    </div>
  )
}

export default Features
import React from "react"
import "./Feature.css"
interface FeatureProps{
  title:string
  text: string
}

const Feature:React.FC<FeatureProps> = ({title="GPT3 INFO", text="Gpt 3 is a LLM which can be used to dgenerate text."}) => {
  return (
    <div className="gpt3_feautures-container_feature">
      <div className="gpt3_features-container_feature-title">
        <div>

        </div>
        <h1>{title}</h1>
      </div>
      <div className="gpt3_features-container_feature-text">
        <p>
          {text}
        </p>
      </div>
    </div>
  )
}

export default Feature

import { Feature } from '../../Components'
import './Whatgpt3.css'

const Whatgpt3 = () => {
  return (
    <div className="gpt3_whatgpt3 section_padding" id="whatgpt3">
      <div className="gpt3_whatgpt3-feature">
        <Feature title='What is GPT3?' text="GPT-3, or Generative Pre-trained Transformer 3, is a state-of-the-art language processing AI model developed by OpenAI. It can generate human-like text, understand context, and perform a wide range of language tasks such as translation, summarization, and question-answering, making it a revolutionary tool in the world of artificial intelligence."/>
      </div>
      <div className="gpt3_whatgpt3-heading">
        <h1 className="gradient-text">
          The possibilities are beyond imagination
        </h1>
        <p>
          Explore the libraary
        </p>
      </div>
      <div className="gpt3_whatgpt3-container">
        <div className='gpt3_features-container_feature' >
        <Feature title='Chat Bots?' text="Chatbots powered by GPT-3 offer conversational capabilities that closely mimic human interactions. They can assist customers, provide information, and handle a wide range of queries with context-aware responses, enhancing user experience and streamlining business communications."></Feature>
        </div>
        <div className='gpt3_features-container_feature'>
        <Feature title='Education?' text="GPT-3 is transforming education by providing personalized learning experiences. It helps in creating interactive learning tools, generating practice questions, and explaining complex topics in simple terms, making education accessible and engaging for learners of all ages."></Feature>
        </div>
        <div  className='gpt3_features-container_feature'>
        <Feature title='Knowledgebase' text=" GPT-3 serves as an intelligent knowledgebase, capable of retrieving and summarizing vast amounts of information. Its ability to process natural language queries allows it to provide precise and detailed answers, making it invaluable for research, support systems, and decision-making processes."></Feature></div>
      </div>
      
    </div>
  )
}

export default Whatgpt3

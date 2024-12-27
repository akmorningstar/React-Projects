import ai from '../../assets/ai2.jpg'
import people from '../../assets/people.png'
import './Header.css'
const Header = () => {
  return (
    <div className="gpt3_header section_padding" id="home">
      <div className="gpt3_header-content" >
        <h1 className="gradient_text">
          Let's Build Something amazing with GPT-3 Open AI
        </h1>
        <p style={{color:"var(--color-subtext)"}}>
          GPT-3 is the most powerful language model ever created, capable of generating human-like text, answering questions, and more. It's now available to everyone through OpenAI's API. Let's see what we can build with it!
        </p>
        <div className="gpt3_header-content_input">
          <input type="email" placeholder="Enter your email address" />
          <button type="button" className="gradient_btn">Get Started</button  >
        </div>
        <div className="gpt3_header-content_people">
          <img src={people} alt="people" />
          <p>
            <span>100,000+</span> developers have already signed up to use GPT-3
          </p>
        </div>
        
      </div>
      <div className="gpt3_header-image">
          <img src={ai} alt="ai" />
        </div>
    </div>
  )
}

export default Header

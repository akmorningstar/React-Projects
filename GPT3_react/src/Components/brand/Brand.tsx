import "./Brand.css"
import { atlassian, dropbox, google, slack } from "./import"
const Brand = () => {
  return (
    <div className="gpt3_brand section_padding">
      <div>
        <img src={google} alt="" />
      </div>
      <div>
        <img src={slack} alt="" />
      </div>
      <div>
        <img src={dropbox} alt="" />
      </div>
      <div>
        <img src={atlassian} alt="" />
      </div>
    </div>
  )
}

export default Brand

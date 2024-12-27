import React from "react";
import Article from "../../Components/article/Article";
import { blog1, blog2, blog3 } from "../../Components/brand/import";
import "./Blog.css";
const Blog:React.FC = () => {
  return (
    <div className="gpt3_blog section_padding" id="blog">
      <div className="gpt3_blog-heading">
        <h1 className="gradient_text">
          A lot is happening, We are blogging about it
        </h1>
      </div>
        <div className="gpt3_blog-container">
          <div className="gpt3_blog-container_groupA">
            <Article image={blog1} date="January 15, 2024" title="The Rise of Generative AI: How Machines Are Becoming Creators"></Article>
          </div>
          <div className="gpt3_blog-container_groupB">
            <Article image={blog2} date="March 10, 2024" title="AI in Healthcare: Revolutionizing Diagnosis and Treatment"></Article>
            <Article image={blog3} date=" June 5, 2024" title="Exploring Explainable AI: Making Machine Decisions Transparent"></Article>
            <Article image={blog1} date="September 20, 2024" title="AI and the Future of Work: Friend or Foe?"></Article>
            <Article image={blog2} date="December 25, 2024" title="The Future of AI: What to Expect in the Next Decade"></Article>
          </div>
        
      </div>
    </div>
  )
};

export default Blog;

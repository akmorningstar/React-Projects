import './App.css'
import { Brand, Cta, Navbar } from './Components'
import { Blog, Features, Footer, Header, Possibility, Whatgpt3 } from './containers'

function App() {
  

  return (
    <div className='App'>
      <div className="gradient_bg">
        <Navbar/>
        <Header/>
        </div>
        <div>
        <Brand/>
        <Whatgpt3/>
        <Features/>
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>
      </div>
      
    </div>
  )
}

export default App

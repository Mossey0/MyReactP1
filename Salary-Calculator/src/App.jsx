
import Main from '/src/components/Main.jsx'
import Footer from '/src/components/Footer.jsx'
import Header from '/src/components/Header.jsx'
import SalaryFunc from './components/SalaryFunc'
import './App.css'

function App() {

  return (
    <div className='page'>
      <div className='content-box'>
        <Header />
        <Main />
      </div>
      <Footer />
    </div>  
  )
}

export default App


import './App.css'
import Brands from './components/Brands'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Header from './components/Header'
import Marqueetag from './components/Marqueetag'
import Newsletter from './components/Newsletter'
import OurCollections from './components/OurCollections'
import OurServices from './components/OurServices'
import WhyUs from './components/WhyUs'

function App() {

  return (
    <>
      <Header/>
      <WhyUs/>
      <Brands/>
      <OurCollections/>
      <OurServices/>
      <Newsletter/>
      <Marqueetag/>
      <Faq/>
      <Footer/>
    </>
  )
}

export default App

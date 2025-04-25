import Body from './components/body'
import Customer from './components/custtomer'
import Demo from './components/demo'
import Design from './components/designCmp'
import Footer from './components/footer'
import Groups from './components/group'
import Header from './components/header'
import Hero from './components/hero'
import Marketing from './components/marketing'

import './style.css'


function App() {
  return (
    <>
      <Header />
      <Hero />
      <Body />
      <Groups/>
      <Design />
      <Customer />
      <Marketing />
      <Demo />
      <Footer />
    </>
  )
}


export default App
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import MainImage from './components/Shop/MainImage/MainImage'
import Products from './components/Shop/Products/Products'
import Footer from './components/Footer/Footer'

function Shop() {
  return (
    <> 
      <Header />
      <MainImage />
      <Products />
      <Footer />
    </>
  )
}

function Home() {
  return (
    <>
    <Header /> 
    </>
  )
}

function App() {
  return (
    <>
    <BrowserRouter> 
      <Routes>
        <Route path='/shop' element={<Shop />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

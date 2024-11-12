import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'

function Shop() {
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
        <Route path='/' element={<Shop />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

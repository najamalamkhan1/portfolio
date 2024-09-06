import { Routes, Route } from 'react-router-dom'
import './App.scss'
import Layout from './Components/Layout/Index'
import Home from './Components/Home/Index'
import About from './Components/About/Index'
import Contact from './Components/Contact/Index'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

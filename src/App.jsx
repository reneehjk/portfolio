import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import About from './pages/About'
import CaseStudy from './pages/CaseStudy'
import Aisle from './pages/case-studies/Aisle'
import Pochi from './pages/case-studies/Pochi'
import Plotd from './pages/case-studies/Plotd'
import ScrollToTop from './components/ScrollToTop'
import CustomCursor from './components/CustomCursor'
import { Analytics } from '@vercel/analytics/react'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/case-study/aisle" element={<Aisle />} />
        <Route path="/case-study/pochi" element={<Pochi />} />
        <Route path="/case-study/plotd" element={<Plotd />} />
        <Route path="/case-study/:slug" element={<CaseStudy />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  )
}

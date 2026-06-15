import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import About from './pages/About'
import CaseStudy from './pages/CaseStudy'
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
        <Route path="/case-study/:slug" element={<CaseStudy />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  )
}

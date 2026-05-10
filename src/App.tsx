import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Stocks from './pages/Stocks'
import Watchlist from './pages/Watchlist'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/stocks" element={<Stocks />} />
          <Route path="/watchlist" element={<Watchlist />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
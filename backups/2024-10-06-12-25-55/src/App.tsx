import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { Heart } from 'lucide-react'
import Home from './components/Home'
import Gallery from './components/Gallery'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary flex flex-col">
        <header className="bg-secondary p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold flex items-center text-heading">
              <Heart className="mr-2 text-heading heart-animation" /> Silvia & Gerard <Heart className="ml-2 text-heading heart-animation" />
            </Link>
            <div>
              <Link to="/" className="love-button mr-4 text-sm">Inicio</Link>
              <Link to="/gallery" className="love-button text-sm">Galería</Link>
            </div>
          </nav>
        </header>

        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>

        <footer className="bg-secondary p-4 text-center">
          <p className="text-text">&copy; 2024 Hecho con <Heart className="inline heart-animation" size={16} /> para ti</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
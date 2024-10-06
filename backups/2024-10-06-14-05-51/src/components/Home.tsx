import React from 'react'
import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'

const Home = () => {
  return (
    <div className="text-center max-w-4xl mx-auto px-4">
      <h1 className="romantic-title mt-10 mb-8 flex items-center justify-center">
        <Heart className="inline-block mr-2 text-accent heart-animation" size={40} /> 
        ol mamir te amo 
        <Heart className="inline-block ml-2 text-accent heart-animation" size={40} />
      </h1>
      
      <div className="romantic-container mb-8">
        <p className="romantic-text">
          Mimamir, amor de mi vida, cada día a tu lado es un regalo. Has llenado mi mundo de luz y alegría. Contigo, he descubierto el verdadero significado del amor. Me has cambiado la vida de formas que nunca imaginé posibles. Te quiero más de lo que las palabras pueden expresar.
        </p>
      </div>

      <div className="romantic-container qualities-container">
        <h2 className="romantic-title text-2xl mb-6">Eres la persona más:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {['Cariñosa', 'Atenta', 'Considerada', 'Trabajadora', 'Detallista', 'Guapa', 'Sexy', 'Graciosa', 'Divertida'].map((quality, index) => (
            <div key={index} className="quality-item">
              <Heart className="inline-block mr-2 text-accent" size={20} />
              <span>{quality}</span>
            </div>
          ))}
        </div>
      </div>

      <Link to="/gallery" className="love-button inline-block mt-8">
        Ver nuestra galería de amor
      </Link>
    </div>
  )
}

export default Home
import React from 'react'
import { Heart } from 'lucide-react'

const BestGirlfriend = () => {
  return (
    <div className="romantic-container mb-4">
      <h2 className="romantic-title text-2xl mb-6">La Mejor Novia del Mundo</h2>
      <p className="romantic-text">
        Eres sin duda la mejor novia que podría desear. Cada día me demuestras lo afortunado que soy de tenerte a mi lado. Te quiero muchísimo, más de lo que las palabras pueden expresar.
      </p>
      <div className="flex justify-center mt-4">
        <Heart className="text-accent heart-animation" size={32} />
      </div>
    </div>
  )
}

export default BestGirlfriend
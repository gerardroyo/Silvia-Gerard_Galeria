import React, { useState } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root') // This line is important for accessibility

const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState('')

  const images = [
    'https://ibb.co/qNhkJLF',
    'https://ibb.co/VHWpMJJ',
    'https://ibb.co/87fpDmh',
    'https://ibb.co/3CTP3y1',
    'https://ibb.co/x7K6HvC',
    'https://ibb.co/w6kLbfr',
    'https://ibb.co/r0VCNZF',
    'https://ibb.co/wdR7yYZ',
    'https://ibb.co/bRGY4y3'
  ]

  const openModal = (image: string) => {
    setSelectedImage(image)
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: 'var(--color-heading)' }}>Nuestra galería</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg cursor-pointer" onClick={() => openModal(image)}>
            <img 
              src={image} 
              alt={`Imagen ${index + 1}`} 
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110" 
            />
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Imagen Ampliada"
        className="modal"
        overlayClassName="overlay"
      >
        <img src={selectedImage} alt="Imagen Ampliada" className="max-w-full max-h-full" />
        <button onClick={closeModal} className="close-button">Cerrar</button>
      </Modal>
    </div>
  )
}

export default Gallery
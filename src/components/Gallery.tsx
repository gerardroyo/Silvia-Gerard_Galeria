import React, { useState } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root') // This line is important for accessibility

const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState('')

  const images = [
    'https://i.postimg.cc/50HPV41C/1.png',
    'https://i.postimg.cc/bNfm7f5Z/2.jpg',
    'https://i.postimg.cc/tCdBym02/3.jpg',
    'https://i.postimg.cc/P52Kvp5D/4.jpg',
    'https://i.postimg.cc/XvqLfjrz/5.png',
    'https://i.postimg.cc/1zdHMk65/6.jpg',
    'https://i.postimg.cc/LXZVWxBk/7.jpg',
    'https://i.postimg.cc/wM8kYD0C/8.jpg',
    'https://i.postimg.cc/tRW5tmgp/9.jpg'
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
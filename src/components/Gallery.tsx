import React, { useState } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root') // This line is important for accessibility

const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState('')

  const images = [
    'https://www.educaciontrespuntocero.com/wp-content/uploads/2020/04/mejores-bancos-de-imagenes-gratis.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png',
    'https://cdn.discordapp.com/attachments/781949410322022482/1292448930323238982/4.jpg?ex=6703c65d&is=670274dd&hm=099bbf52df736d2239c932f671a7221bd93de69e10a9343a2325026ab59835b4&',
    'https://cdn.discordapp.com/attachments/781949410322022482/1292449151975690280/5.png?ex=6703c692&is=67027512&hm=18c0b8856d54aa3bb811d19c597be30c6d38f03b5557caf2cc02e6f09d5c51d0&',
    'https://cdn.discordapp.com/attachments/781949410322022482/1292449360822538250/6.jpg?ex=6703c6c4&is=67027544&hm=51102540703c786e7b692a2cb5c761629a089906ec6c2d2e0a31134042122ac7&',
    'https://cdn.discordapp.com/attachments/781949410322022482/1292447320675454976/1.png?ex=67090add&is=6707b95d&hm=2fdc691e0056db3580edb70bd6787ca644f312167a0746a822eddb1bdd4217c8&',
    'https://cdn.discordapp.com/attachments/781949410322022482/1292499401117270086/7.jpg?ex=6703f55e&is=6702a3de&hm=53f6538635fcb4ff97b13b7276f5c0a831663e66563e6702901bcb399108f5ae&',
    'https://cdn.discordapp.com/attachments/781949410322022482/1292501766973427825/8.jpg?ex=6703f792&is=6702a612&hm=402135ccdf37ee19a6533b58c0e056c392a67963412192c39b4be0fbbedf80b5&',
    'https://cdn.discordapp.com/attachments/781949410322022482/1292501784983638026/9.jpg?ex=6703f797&is=6702a617&hm=31a3ab1973554e4e4fbfb8e912cf4f88869c4aa9c1d6800dbb5da127e8aa0c92&'
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
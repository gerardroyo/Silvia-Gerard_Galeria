import React, { useState } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root') // This line is important for accessibility

const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState('')

  const images = [
    'https://cdn.discordapp.com/attachments/1294326230534852702/1294326305885519944/2.jpg?ex=670a9ace&is=6709494e&hm=45c16d1f1df02a636e6d7ef0ce52e01b967f1ec40f41a82dce6bd5375af99987&',
    'https://cdn.discordapp.com/attachments/1294326230534852702/1294326305114030183/3.jpg?ex=670a9ace&is=6709494e&hm=2d054ec184114756d828f62eb4469308bc97b4b985c91bbc76245486b7a00f78&',
    'https://cdn.discordapp.com/attachments/1294326230534852702/1294326304748867658/4.jpg?ex=670a9ace&is=6709494e&hm=3bf891731394675da9b305bb450c171c1a8d3e5af15e9be5d86edc1834545f04&',
    'https://cdn.discordapp.com/attachments/1294326230534852702/1294326304380026951/5.png?ex=670a9ace&is=6709494e&hm=d80eac102a45dbeaa04d9f2a32a2b9a3f8f01cea1817dce83662de49922f1649&',
    'https://cdn.discordapp.com/attachments/1294326230534852702/1294326303973183539/6.jpg?ex=670a9ace&is=6709494e&hm=b50ccee243db47538550e82147d4c4ee9a9e3c3fe7599ab423128a3152cebc6a&',
    'https://cdn.discordapp.com/attachments/1294326230534852702/1294326303624790149/1.png?ex=670a9ace&is=6709494e&hm=4cdae3d6889c71eee3baeb007295b178324a7062a6245d6cd49b5438fed018cd&',
    'https://cdn.discordapp.com/attachments/1294326230534852702/1294326302656036947/7.jpg?ex=670a9acd&is=6709494d&hm=60b19a899a89413d847a4fa771e20671eeb0230252648fce7f0e7cf58699cd35&',
    'https://cdn.discordapp.com/attachments/1294326230534852702/1294326303335518229/8.jpg?ex=670a9ace&is=6709494e&hm=c25913120dfd22f7fe22213f9efdb7a11c95c9097e9684839f9803ea7b05b642&',
    'https://cdn.discordapp.com/attachments/1294326230534852702/1294326302991454268/9.jpg?ex=670a9ace&is=6709494e&hm=9dbe76d2bafee0859661625c084f35b26f3b1699f65afb41512b425ae0dfe00d&'
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
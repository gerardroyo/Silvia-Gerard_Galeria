import React, { useState } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root') // This line is important for accessibility

const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState('')

  const images = [
    'https://cdn.discordapp.com/attachments/781949410322022482/1292448264880394311/2.jpg?ex=67090bbe&is=6707ba3e&hm=6afa0f12fb575fbf41cf441799bd961628f31b6c04e8679f0731b0f34996a8e6&',
    'https://cdn.discordapp.com/attachments/781949410322022482/1292448659895615538/3.jpg?ex=67090c1d&is=6707ba9d&hm=57d3761878ebed3c1080bb4fcfb60a5dff7cdfcbdab8a74b91c2998e4da6a894&',
    'https://cdn.discordapp.com/attachments/781949410322022482/1292448930323238982/4.jpg?ex=67090c5d&is=6707badd&hm=77bb797a96e33405cea9273e918d698428ecc5f460bf9251ab8aa8cdce1cc325&',
    'https://cdn.discordapp.com/attachments/781949410322022482/1292449151975690280/5.png?ex=67090c92&is=6707bb12&hm=47a98fb14c40424a25d906991636b823a89eacfa99aad55365396b095e6471bc&',
    'https://cdn.discordapp.com/attachments/781949410322022482/1292449360822538250/6.jpg?ex=67090cc4&is=6707bb44&hm=e4c6d276d98b0273ad05606bfae0e7ba61931bf92231d0701dc0221e165816b0&',
    'https://cdn.discordapp.com/attachments/781949410322022482/1292447320675454976/1.png?ex=67090add&is=6707b95d&hm=2fdc691e0056db3580edb70bd6787ca644f312167a0746a822eddb1bdd4217c8&',
    'https://cdn.discordapp.com/attachments/781949410322022482/1292499401117270086/7.jpg?ex=6708929e&is=6707411e&hm=3b9799bbb9351198472f0d9815ecae69a605dc85b330a0ee1f31f7dc06014819&',
    'https://cdn.discordapp.com/attachments/781949410322022482/1292501766973427825/8.jpg?ex=670894d2&is=67074352&hm=034b7e6a93348400e79071efe79bd69f30f842448707010d99ccca0d60953985&',
    'https://cdn.discordapp.com/attachments/781949410322022482/1292501784983638026/9.jpg?ex=670894d7&is=67074357&hm=0c4afa0721454a034b4e97fb88a62b875f290a2ecc89d8df4d954eb8a67d1227&'
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
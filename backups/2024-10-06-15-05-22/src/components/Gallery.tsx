import React from 'react'

const Gallery = () => {
  const images = [
    'https://cdn.discordapp.com/attachments/781949410322022482/1292448264880394311/2.jpg?ex=6703c5be&is=6702743e&hm=b40270dbf608a01a3b3f8634f778e120b78683ad90c4117e20de53e6467c5168&',
    'https://cdn.discordapp.com/attachments/781949410322022482/1292448659895615538/3.jpg?ex=6703c61d&is=6702749d&hm=d72c6a910f46cd76d4559befd7957c2226afa7dc7ec71c388e4bb29c12dc6d99&',
    'https://cdn.discordapp.com/attachments/781949410322022482/1292448930323238982/4.jpg?ex=6703c65d&is=670274dd&hm=099bbf52df736d2239c932f671a7221bd93de69e10a9343a2325026ab59835b4&',
    'https://cdn.discordapp.com/attachments/781949410322022482/1292449151975690280/5.png?ex=6703c692&is=67027512&hm=18c0b8856d54aa3bb811d19c597be30c6d38f03b5557caf2cc02e6f09d5c51d0&',
    'https://cdn.discordapp.com/attachments/781949410322022482/1292449360822538250/6.jpg?ex=6703c6c4&is=67027544&hm=51102540703c786e7b692a2cb5c761629a089906ec6c2d2e0a31134042122ac7&',
    'https://cdn.discordapp.com/attachments/781949410322022482/1292447320675454976/1.png?ex=6703c4dd&is=6702735d&hm=ece3bc48f231dfdd5a852593ef604541aa691d08d7a78b1d867b01ea317e8cb4&',
    'https://cdn.discordapp.com/attachments/781949410322022482/1292499401117270086/7.jpg?ex=6703f55e&is=6702a3de&hm=53f6538635fcb4ff97b13b7276f5c0a831663e66563e6702901bcb399108f5ae&',
    'https://cdn.discordapp.com/attachments/781949410322022482/1292501766973427825/8.jpg?ex=6703f792&is=6702a612&hm=402135ccdf37ee19a6533b58c0e056c392a67963412192c39b4be0fbbedf80b5&',
    'https://cdn.discordapp.com/attachments/781949410322022482/1292501784983638026/9.jpg?ex=6703f797&is=6702a617&hm=31a3ab1973554e4e4fbfb8e912cf4f88869c4aa9c1d6800dbb5da127e8aa0c92&'
  ]

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: 'var(--color-heading)' }}>Nuestra galería</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img 
              src={image} 
              alt={`Imagen ${index + 1}`} 
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110" 
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
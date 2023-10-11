import { useState } from 'react'
import './App.css'
import imgCover from "./assets/imgCover.jpg"
import arrowIcon from "./assets/arrow.svg"
import galleryItems from './assets/img-dataSource/data-source'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImg = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
  }

  const prevImg = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryItems.length) % galleryItems.length);
  }

  const selectImg = (index) => {
    setCurrentIndex(index);
  }

  return (
    <div className='gallery-container'>
      <div className='title-container'>
        <h1>FOTOS & VíDEOS</h1>
        <p className='subtitle'> Confira como foi o evento de pré-estreia do último filme da série Trolls.
          A première aconteceu em 14/9, no Morro da Urca.</p>
      </div>
      <div className='gallery-Row1'>
        <img src={arrowIcon} alt="" className='arrow arrowLeft' onClick={prevImg} />
        <img src={galleryItems[currentIndex].imgUrl} alt="guy pointing to text 'ordenar array de objetos'" className='gallery_cover' />
        <img src={arrowIcon} alt="" className='arrow arrowRight' onClick={nextImg} />
      </div>
      <div className='gallery_imgList-container'>
        {galleryItems.map((item, index) => (
          <img
            src={item.imgUrl}
            alt={item.alt}
            className='gallery_item'
            key={index}
            onClick={() => selectImg(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default App

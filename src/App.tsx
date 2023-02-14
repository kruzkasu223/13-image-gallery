import { MouseEvent, useState } from "react"
import { ImageType, IMAGE_DATA } from "./data"

function App() {
  const [image, setImage] = useState<ImageType | undefined>()

  const handleOnClick = (image: ImageType) => {
    setImage(image)
  }

  const handleClose = () => {
    setImage(undefined)
  }

  const handleStopClose = (
    e: MouseEvent<HTMLImageElement, globalThis.MouseEvent>
  ) => {
    e.stopPropagation()
    e.preventDefault()
  }

  return (
    <div className="App">
      <h1>13/27 - Image Gallery</h1>
      <div className="container">
        <div className="gallery">
          {IMAGE_DATA.map((image) => (
            <img
              className="image"
              onClick={() => handleOnClick(image)}
              key={image.id}
              src={image.src}
              alt={image.alt}
            />
          ))}
        </div>
      </div>
      {image && (
        <div onClick={handleClose} className="slides_container">
          <div onClick={handleClose} className="close">
            x
          </div>
          <img
            onClick={handleStopClose}
            className="slide"
            src={image.src}
            alt={image.alt}
          />
        </div>
      )}
    </div>
  )
}

export default App

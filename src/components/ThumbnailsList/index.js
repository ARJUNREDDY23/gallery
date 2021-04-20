// Write your code here.

import './index.css'

const ThumbnailsList = props => {
  const {photoData, onClickThumbnailImage, selectedImageId} = props
  const {id, imageUrl, imageAltText} = photoData
  const selected = () => {
    onClickThumbnailImage(id)
  }
  const cssClassName =
    selectedImageId === id ? 'selected-image' : 'normal-image'
  return (
    <img
      src={imageUrl}
      alt={imageAltText}
      onClick={selected}
      className={cssClassName}
    />
  )
}

export default ThumbnailsList

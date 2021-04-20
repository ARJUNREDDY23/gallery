// Write your code here.
import {Component} from 'react'

import './index.css'

import ThumbnailsList from '../ThumbnailsList'

class Gallery extends Component {
  state = {selectedImageId: 0}

  onSelect = id => {
    this.setState({selectedImageId: id})
  }

  renderThumbnail = () => {
    const {selectedImageId} = this.state
    const {photosData} = this.props
    const photoContent = photosData.filter(
      photoData => photoData.id === selectedImageId,
    )
    const {thumbnailUrl, thumbnailAltText} = photoContent
    return <img src={thumbnailUrl} alt={thumbnailAltText} key={id} />
  }

  render() {
    const {selectedImageId} = this.state
    const {photosData} = this.props
    return (
      <div>
        {this.renderThumbnail()}
        <h1>Nature Photography</h1>
        <p>Nature photography by ARJUN</p>
        <div>
          {photosData.map(photoData => (
            <ThumbnailsList
              photoData={photoData}
              key={photoData.id}
              selectedImageId={selectedImageId}
              onClickThumbnailImage={this.onSelect}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Gallery

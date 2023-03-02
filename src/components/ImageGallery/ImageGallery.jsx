import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

function ImageGallery({ images, openModal }) {
  return (
    <ul>
      {images.map(({ id, tags, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          description={tags}
          smallImage={webformatURL}
          largeImage={largeImageURL}
          openModal={openModal}
        />
      ))}
    </ul>
  );
}

export default ImageGallery;

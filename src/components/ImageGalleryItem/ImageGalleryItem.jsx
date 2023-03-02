// import PropTypes from 'prop-types';

function imageGalleryItem({ description, smallImage, largeImage, openModal }) {
  return (
    <li onClick={() => openModal(largeImage, description)}>
      <img src={smallImage} alt={description} data-large={largeImage} />
    </li>
  );
}

export default imageGalleryItem;

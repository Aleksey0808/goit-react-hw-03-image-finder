// import PropTypes from 'prop-types';
import { Item, Image } from './imageGalleryItem.styled';

function imageGalleryItem({ description, smallImage, largeImage, openModal }) {
  return (
    <Item onClick={() => openModal(largeImage, description)}>
      <Image src={smallImage} alt={description} data-large={largeImage} />
    </Item>
  );
}

export default imageGalleryItem;

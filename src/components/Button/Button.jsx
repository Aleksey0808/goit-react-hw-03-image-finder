import PropTypes from 'prop-types';
import { BiPlusMedical } from 'react-icons/bi';

function Button({ loadMore }) {
  return (
    <button type="button" onClick={loadMore}>
      Load more <BiPlusMedical />
    </button>
  );
}

Button.prototype = {
  onNextFetch: PropTypes.func.isRequired,
};

export default Button;

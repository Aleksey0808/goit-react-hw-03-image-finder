import PropTypes from 'prop-types';
import { BiPlusMedical } from 'react-icons/bi';

function Button({ onNextFetch }) {
  return (
    <button type="button" onClick={onNextFetch}>
      Load more <BiPlusMedical />
    </button>
  );
}

Button.prototype = {
  onNextFetch: PropTypes.func.isRequired,
};

export default Button;

import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as yup from 'yup';

// const schema = yup.object().shape({
//   onSubmit: yup.func().required(),
// });

const Searchbar = ({ onSubmit }) => {
  // const onChangeInput = e => {
  //   this.setState({ query: e.currentTarget.value });
  // };

  // const onSubmitForm = e => {
  //   e.preventDefault();

  //   const { onSubmit } = this.props;
  //   const { query } = this.state;

  //   if (query.trim() === '') {
  //     toast.error('Enter a search term.');
  //     return;
  //   }

  //   onSubmit(query);
  // };

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  const initialValues = {
    query: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      // validationSchema={schema}
    >
      <Form>
        <label>
          <Field type="text" name="query" />
          <ErrorMessage name="query" component="div" />
        </label>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

Searchbar.prototype = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;

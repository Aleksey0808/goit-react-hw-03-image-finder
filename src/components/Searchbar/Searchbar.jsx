import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  query: yup.string().required(),
});

const Searchbar = ({ onSubmit }) => {
  const handleSubmit = (query, { resetForm }) => {
    onSubmit(query);
    resetForm();
  };

  const initialValues = {
    query: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form>
        <label>
          <Field type="text" name="query" />
          <ErrorMessage name="query" component="div" />
        </label>

        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};

Searchbar.prototype = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;

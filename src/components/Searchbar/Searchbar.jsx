import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import styled from '@emotion/styled';
import { Forma, Label, Input, Button, ErrorText } from './Searchbar.styled';

const schema = yup.object().shape({
  query: yup.string().required(),
});

// const FormError = ({ name }) => {
//   return (
//     <ErrorMessage
//       name={name}
//       render={message => <ErrorText>{message}</ErrorText>}
//     />
//   );
// };

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
      <Forma>
        <Label>
          <Input type="text" name="query" />
          <ErrorText name="query" component="div" />
        </Label>

        <Button type="submit">Search</Button>
      </Forma>
    </Formik>
  );
};

Searchbar.prototype = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;

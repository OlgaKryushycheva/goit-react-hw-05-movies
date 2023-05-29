import { useState } from 'react';
import { useSearchParams } from 'react-router-dom/dist';
import { Field, Form } from './SearchForm.styled';

const SearchForm = () => {
  const [, setSearchParams] = useSearchParams();
  const [value, setValue] = useState('');

  const handleChange = evt => {
    setValue(evt.target.value.trim());
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    let searchQuery = evt.target.elements.serchInput.value.trim();
    if (searchQuery === '') {
      setSearchParams({});
      return;
    }
    setSearchParams({ query: searchQuery });

    setValue('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Field
        type="text"
        name="serchInput"
        value={value}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </Form>
  );
};

export default SearchForm;

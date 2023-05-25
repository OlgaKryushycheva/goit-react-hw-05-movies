import { useState } from 'react';
import { useSearchParams } from 'react-router-dom/dist';

const Search = () => {
  // колекцию хранить в состоянии компонена!
  const [searchParams, setSearchParams] = useSearchParams();
  // let value = searchParams.get('query') ?? '';
  // console.log(value);
  const [value, setValue] = useState('');

  const handleChange = evt => {
    setValue(evt.target.value);
  };

  const updateQueryString = evt => {
    if (evt.target.value === '') {
      setSearchParams({});
      return;
    }
    setSearchParams({ query: evt.target.value });

    // console.log(value);
  };

  // const handleChange = evt => {
  //   setSearchParams({ query: evt.target.value });
  //   // const value2 = evt.target.value;
  //   // console.log(value2);
  //   // return value2;
  // };

  // строка меняется только при сабмите!
  // очищается инпут, но строка не меняется!
  // const [value, setValue] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();

    let searchQuery = evt.target.elements.serchInput.value;
    if (searchQuery === '') {
      setSearchParams({});
      return;
    }
    setSearchParams({ query: searchQuery });

    // setSearchParams({ query: evt.target.value });
    // console.log(evt.target.value);
    // console.log(value);
    // console.log(serchInput.value);
    // console.log(evt.currentTarget.value);
    // console.log(evt.currentTarget.elements);
    // console.log(evt.currentTarget.elements.serchInput);
    // console.log(evt.currentTarget.elements.serchInput.value);
    console.log(searchQuery);
    setSearchParams({ query: searchQuery });

    setValue('');
    // console.log(element);

    // return (value = '');
  };

  // console.log(searchParams);

  return (
    <form onSubmit={handleSubmit}>
      {/* <input type="text" /> */}
      <input
        type="text"
        name="serchInput"
        value={value}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;

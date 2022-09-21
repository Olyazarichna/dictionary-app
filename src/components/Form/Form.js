import { useState } from "react";
import Result from "../Result/Result";
import { findWord } from "../../services/api";

export const Form = (props) => {
  console.log(props);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState(null);

  const handleChange = (event) => {
    setSearch(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('search', search);
    findWord(search);
    setSearch("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search"
          autoFocus={true}
          onChange={handleChange}
          value={search}
        />
        <button>Search</button>
      </form>
      <Result />
    </>
  );
};
export default Form;

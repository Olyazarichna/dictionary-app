import { useState } from "react";
import Result from "../Result/Result";
// import { findWord } from "../../services/api";
import axios from "axios";
export const Form = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState(null);

  const handleChange = (event) => {
    setSearch(event.currentTarget.value);
  };

  const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  const findWord = (word) => {
    axios.get(`${URL}${word}`).then(handleResp);
  };

  const handleResp = (response) => {
    setResults(response.data);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

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
      <Result info={results} />
    </>
  );
};
export default Form;

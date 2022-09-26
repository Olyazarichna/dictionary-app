import { useState } from "react";
import Result from "../Result/Result";
import axios from "axios";
import css from "./Form.module.css";

export const Form = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState(null);

  const handleChange = (event) => {
    setSearch(event.currentTarget.value);
  };

  const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  const findWord = async (word) => {
    const resp = await axios.get(`${URL}${word}`).then(handleResp);
    return resp;
  };

  const handleResp = (response) => {
    setResults(response.data[0]);
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
          className={css.input}
          type="search"
          placeholder="Search"
          autoFocus={true}
          onChange={handleChange}
          value={search}
        />
        <button className={css.btn}>Search</button>
      </form>
      <Result data={results} />
    </>
  );
};
export default Form;

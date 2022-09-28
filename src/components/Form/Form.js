import { useState } from "react";
import Result from "../Result/Result";
import axios from "axios";
import css from "./Form.module.css";
import { Pictures } from "../Pictures/Pictures";

export const Form = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);

  const handleChange = (event) => {
    setSearch(event.currentTarget.value);
  };

  const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

  const findWord = (word) => {
    axios.get(`${URL}${word}`).then(handleResp);
    const pexelsApiKey =
      "563492ad6f9170000100000161f8cbe1db27454c8fb43e89023ce692";
    const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=6`;

    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handleRespPictures);
  };

  const handleRespPictures = (response) => {
    setPhotos(response.data.photos);
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
      <section className={css.formSection}>
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
      </section>

      <Pictures pictures={photos} />

      <Result data={results} />
    </>
  );
};
export default Form;

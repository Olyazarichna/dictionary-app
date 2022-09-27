import { Meanings } from "../../Meanings/Meanings";
import { Phonetics } from "../Phonetics/Phonetics";
import css from "./Result.module.css";

export const Result = ({ data }) => {
  return (
    <>
      <div>
        {data ? (
          <>
            <h2 className={css.word}>{data.word}</h2>
            {data.phonetics ? (
              data.phonetics.map((phonetic, index) => {
                return (
                  <ul>
                    <li key={index}>
                      <Phonetics phonetic={phonetic} />
                    </li>
                  </ul>
                );
              })
            ) : (
              <p className={css.word}>{data.phonetic}</p>
            )}

            {data.meanings.map((meaning, index) => {
              return <Meanings key={index} meaning={meaning} />;
            })}
          </>
        ) : (
          <p className={css.text}>Search a word</p>
        )}
      </div>
    </>
  );
};
export default Result;

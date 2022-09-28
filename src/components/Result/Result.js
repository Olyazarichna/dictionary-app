import { Meanings } from "../../Meanings/Meanings";
import { Phonetics } from "../Phonetics/Phonetics";
import css from "./Result.module.css";
import { nanoid } from "nanoid";
export const Result = ({ data }) => {
  return (
    <>
      {data && (
        <>
          <section className={css.formSection}>
            <h2 className={css.word}>{data.word}</h2>
            <ul>
              {data.phonetics ? (
                data.phonetics.map((phonetic) => {
                  return (
                    <li key={nanoid()}>
                      <Phonetics phonetic={phonetic} />
                    </li>
                  );
                })
              ) : (
                <p className={css.word}>{data.phonetic}</p>
              )}
            </ul>
          </section>
          <section className={css.formSection}>
            {data.meanings.map((meaning, index) => {
              return <Meanings key={index} meaning={meaning} />;
            })}
          </section>
        </>
      )}
    </>
  );
};
export default Result;

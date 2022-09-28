import { Meanings } from "../../Meanings/Meanings";
import { Phonetics } from "../Phonetics/Phonetics";
import css from "./Result.module.css";

export const Result = ({ data }) => {
  return (
    <>
      {data && (
        <>
        <section className={css.formSection}>
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
          </section>
          <section className={css.formSection}>
            {data.meanings.map((meaning, index) => {
              return <Meanings key={index} meaning={meaning} />;
            })}
          </section>
        </>
      ) 
    
      }
    </>
  );
};
export default Result;

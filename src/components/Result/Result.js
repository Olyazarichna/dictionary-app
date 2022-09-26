import { Meanings } from "../../Meanings/Meanings";
import css from "./Result.module.css";
export const Result = ({ data }) => {
  return (
    <>
      <div>
        {data ? (
          <>
            <h2 className={css.word}>{data.word}</h2>
            <p className={css.word}>{data.phonetic}</p>

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

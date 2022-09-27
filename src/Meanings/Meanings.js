import css from "./Meanings.module.css";
import { Synonyms } from "../components/Synonyms/Synonyms";
export const Meanings = ({ meaning }) => {
  console.log("meaning", meaning);
  return (
    <>
      <h3 className={css.title}>{meaning.partOfSpeech}</h3>
      <ul className={css.meaningList}>
        {meaning.definitions.map((definition, index) => {
          return (
            <li key={index} className={css.meaningListItem}>
              <p>{definition.definition}</p>
              {definition.example && (
                <p className={css.example}>
                 <strong>Example:</strong>  {definition.example}
                </p>
              )}
            </li>
          );
        })}{" "}
      </ul>
<Synonyms synonyms={meaning.synonyms}/>
      {/* {
        meaning.synonyms &&(<p>Synonyms: {meaning.synonyms}</p>)
      } */}
      
    </>
  );
};

export default Meanings;

import {Meanings} from '../../Meanings/Meanings';
import css from './Result.module.css';
export const Result = ({data}) => {

  return ( 
    <>
      <div>
        {data ? (
          <>
            <h2 className={css.word}>{data.word}</h2>
            <p className={css.word}>{data.phonetic}</p>
            {/* <ul> */}
                 {data.meanings.map((meaning, index)=>{
              return(
                // <li key={index}>
                  <Meanings key={index} meaning={meaning}/>
                // </li>
              )
            })}
            {/* </ul> */}
        
            </>
        ) : (
          <p>Search a word</p>
        )
        }
      </div>
    </>
  );
};
export default Result;

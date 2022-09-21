export const Result = (props) => {
  console.log("props", props);
  const results = props.info;
  console.log("results", results);
  return (
    <>
      <div>
        {results ? (
          <>
            <p>{results[0].word}</p>
  
            
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

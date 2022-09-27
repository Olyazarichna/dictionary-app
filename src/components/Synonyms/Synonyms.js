export const Synonyms = ({ synonyms }) => {

  return (
    <ul>
      Synonyms:
      {synonyms.length > 0 ? (
        synonyms.map((synonym, index) => {
          return <li key={index}>{synonym}</li>;
        })
      ) : (
        <p>Can't find any synonyms</p>
      )}
    </ul>
  );
};
export default Synonyms;

export const Synonyms = ({ synonyms }) => {
  console.log(synonyms);
  return (
    <ul>
      Synonyms:
      {synonyms &&
        synonyms.map((synonym, index) => {
          return <li key={index}> {synonym}</li>;
        })}
    </ul>
  );
};
export default Synonyms;

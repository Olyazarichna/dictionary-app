import css from "./Synonims.module.css";

export const Synonyms = ({ synonyms }) => {
  return (
    <section className={css.section}>
      <ul className={css.list}>
        Synonyms:
        {synonyms.length > 0 ? (
          synonyms.map((synonym, index) => {
            return (
              <li key={index} className={css.listItem}>
                {synonym}
              </li>
            );
          })
        ) : (
          <p>Can't find any synonyms</p>
        )}
      </ul>
    </section>
  );
};
export default Synonyms;

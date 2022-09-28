import css from "./Picture.module.css";
export const Pictures = ({ pictures }) => {
  console.log(pictures);
  return (
    <>
      {pictures && (
        <section className={css.formSection}>
          <ul className={css.list}>
            {pictures &&
              pictures.map((picture) => {
                return (
                  <li key={picture.id}>
                    <a
                      href={picture.src.original}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img
                        src={picture.src.landscape}
                        alt={picture.alt}
                        className={css.picture}
                        width="300"
                      />
                    </a>
                  </li>
                );
              })}
          </ul>
        </section>
      )}
    </>
  );
};
export default Pictures;

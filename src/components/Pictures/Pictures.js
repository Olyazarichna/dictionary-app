import css from "./Picture.module.css";
export const Pictures = ({ pictures }) => {
  console.log(pictures);
  return (
    <section className={css.formSection}>
      {pictures &&
        pictures.map((picture, index) => {
          return (
            <ul>
              <li key={index}>
                <a
                  href={picture.src.original}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src={picture.src.landscape}
                    alt={picture.alt}
                    className={css.picture}
                  />
                </a>
              </li>
            </ul>
          );
        })}
    </section>
  );
};
export default Pictures;

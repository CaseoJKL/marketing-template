import styles from "../styles/Card.module.css";

const Card = (props) => {
  return (
    <>
      <div className={styles["card"]}>
        <h2 className={styles["header"]}>{props.header}</h2>
        <h3 className={styles["header2"]}>{props.header2}</h3>
        <article className={styles["article"]}>{props.article}</article>
      </div>
    </>
  );
};

export default Card;

import styles from "../styles/Home.module.css";
import Image from "next/image";

const Figure = (props) => {
  return (
    // <figure className={styles[props.figClassName]}>
    //   <Image
    //     className={styles[props.imgClassName]}
    //     width={props.width}
    //     height={props.height}
    //     alt={props.alt}
    //     src={props.src}
    //   ></Image>
    //   <figcaption>{props.caption}</figcaption>
    // </figure>
    <figure className={styles["item-wrapper"]}>
      <Image
        className={styles["item"]}
        width={400}
        height={300}
        alt={props.alt}
        src={props.src}
      ></Image>
      <figcaption className={styles.figCaption}>{props.caption}</figcaption>
    </figure>
  );
};

export default Figure;

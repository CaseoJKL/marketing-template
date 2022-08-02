import Head from "next/head";
import styles from "../styles/Contact.module.css";
import Image from "next/image";
import Card from "../components/Card";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Brand | Contact</title>
      </Head>
      <div className={styles.content}>
        <div className={styles["image-wrapper"]}>
          <Image
            src={`/contact.jpg`}
            alt="woman ordering online with a tablet"
            layout="fill"
            priority
          ></Image>
        </div>

        <Card
          header="Call +61 424 662 155"
          header2="info@example.com"
          article="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
        minima nesciunt molestias dicta mollitia rem earum! Libero cumque
        aliquid ratione beatae aliquam illum voluptas, hic repellat optio
        sit? Accusantium, dolorum."
        >
          <button className={styles.btn}>
            <h4>Contact Us</h4>
          </button>
        </Card>

        {/* <h2>Call +61 424662155</h2>
        <p>or</p>
        <h3>info@example.com</h3>
        <article>
          <p className={styles.p}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            minima nesciunt molestias dicta mollitia rem earum! Libero cumque
            aliquid ratione beatae aliquam illum voluptas, hic repellat optio
            sit? Accusantium, dolorum.
          </p>
        </article>
        <button className={styles.btn}>
          <h4>Contact Us</h4>
        </button> */}
      </div>
    </>
  );
};

export default Contact;

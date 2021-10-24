import Head from "next/head";
import styles from "../styles/Contact.module.css";
import Image from "next/image";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Brand | Contact</title>
      </Head>
      <div className={styles.content}>
        <Image
          src={`/contact.jpg`}
          alt="woman ordering online with a tablet"
          width={1600}
          height={900}
        ></Image>

        <h2>Call +61 424662155</h2>
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
        </button>
      </div>
    </>
  );
};

export default Contact;

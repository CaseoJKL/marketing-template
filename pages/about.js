import Head from "next/head";
import Link from "next/link";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <>
      <Head>
        <title>Brand | About</title>
      </Head>
      <div className={styles.content}>
        <h1 className={styles.header}>About</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
          fugiat provident dolore dolores minima delectus? Facere, reiciendis
          aperiam vitae, earum quas maxime suscipit, placeat veritatis
          praesentium sequi sed debitis ducimus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          aperiam aspernatur fugit molestias accusamus dolor quae natus est nam
          mollitia, maxime recusandae voluptas modi voluptates officia, vitae,
          omnis similique. Perspiciatis!
        </p>
        <h1 className={styles.header}>TinySquad</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed neque non
          distinctio voluptates excepturi culpa libero dolores rerum hic, fugit
          aliquid atque dignissimos repellendus repudiandae placeat ipsum iure,
          minus dolorum.
        </p>
        <small>
          <Link href="/sponsors">
            <a>Sponsors</a>
          </Link>
        </small>
      </div>
    </>
  );
};

export default About;

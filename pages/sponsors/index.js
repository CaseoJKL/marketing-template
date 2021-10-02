import styles from "../../styles/Sponsors.module.css";
import Link from "next/link";
import Head from "next/head";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { sponsors: data },
  };
};

const Sponsors = ({ sponsors }) => {
  return (
    <>
      <Head>
        <title>Brand | Sponsors</title>
      </Head>
      <div>
        <h1>Sponsors list</h1>
        {sponsors.map((sponsor) => (
          <Link href={"/sponsors/" + sponsor.id} key={sponsor.id}>
            <a className={styles.single}>
              <h3>{sponsor.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Sponsors;

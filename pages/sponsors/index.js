import styles from "../../styles/Sponsors.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { sponsors: data },
  };
};

const Sponsors = ({ sponsors }) => {
  return (
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
  );
};

export default Sponsors;

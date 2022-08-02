import styles from "../../styles/Sponsors.module.css";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map((sponsor) => {
    return {
      params: { id: sponsor.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { sponsor: data },
  };
};

const Details = ({ sponsor }) => {
  return (
    <div className={"sponsor-wrapper " + styles["sponsor-wrapper"]}>
      <h1>{sponsor.name}</h1>
      <p>{sponsor.email}</p>
      <p>{sponsor.website}</p>
    </div>
  );
};

export default Details;

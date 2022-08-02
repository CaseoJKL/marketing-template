import Head from "next/head";
import Image from "next/image";
import Figure from "../components/Figure";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="" />
        <meta httpEquiv="Cache-control" content="public" max-age={31536000} />
        <title>Brand | Home</title>
      </Head>
      <div className={styles.content}>
        <div className={styles.bg}>
          <Image
            src={`/restaurant-lg.jpg`}
            alt="A restaurant"
            width={1600}
            height={900}
          ></Image>
        </div>

        <div className={styles["items-container"]}>
          <Figure
            src="/burger-lg.jpg"
            alt="Cheeseburger"
            caption="Double Cheeseburger"
          />

          <Figure src={"/kebab-lg.jpg"} alt="Kebab" caption="Turkish Kebab" />

          <Figure src={"/sushi-lg.jpg"} alt="Sushi" caption="Sushi" />

          <Figure src={"/fries-lg.jpg"} alt="Fries" caption="Fries" />

          <Figure src={"/taco-lg.jpg"} alt="Taco" caption="Tacos" />

          <Figure src={"/kebab-lg.jpg"} alt="Kebab" caption="Turkish Kebab" />

          <Figure src={"/kebab-lg.jpg"} alt="Kebab" caption="Turkish Kebab" />

          <Figure src={"/kebab-lg.jpg"} alt="Kebab" caption="Turkish Kebab" />

          <Figure src={"/kebab-lg.jpg"} alt="Kebab" caption="Turkish Kebab" />

          <Figure src={"/taco-lg.jpg"} alt="Taco" caption="Tacos" />

          <Figure src={"/taco-lg.jpg"} alt="Taco" caption="Tacos" />

          <Figure src={"/sushi-lg.jpg"} alt="Sushi" caption="Sushi" />
        </div>
      </div>
    </>
  );
}

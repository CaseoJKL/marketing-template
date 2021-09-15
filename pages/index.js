import Head from "next/head";
import Image from "next/image";
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
      <div>
        <h1>This is the homepage.</h1>
      </div>
    </>
  );
}

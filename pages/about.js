import Head from "next/head";
import Link from "next/link";

const About = () => {
  return (
    <>
      <Head>
        <title>Brand | About</title>
      </Head>
      <div>
        <h1>About</h1>
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

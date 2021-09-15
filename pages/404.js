import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <>
      <Head>
        <title>404 | Not Found</title>
      </Head>
      <div className="not-found">
        <h1>Ooooops...</h1>
        <h2>That page cannot be found</h2>
        <p>
          Going back to the{" "}
          <Link href="/">
            <a>Homepage</a>
          </Link>{" "}
          in 3 seconds.
        </p>
      </div>
    </>
  );
};

export default NotFound;

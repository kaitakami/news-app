import Head from "next/head";
import Link from "next/link";
import styles from "../styles/PageLayout.module.css";

const PageLayout = ({ children, title = "NewsApp" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="NewsApp - the best website to read news"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div>
          <Link href="/home">🗞️ NewsApp</Link>
        </div>
        <div>
          <Link href="/about">About</Link>
        </div>
      </header>

      <main>{children}</main>
    </>
  );
};

export default PageLayout;

import Head from "next/head";
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
      <header className={styles.header}>🗞️ NewsApp</header>
      <main>{children}</main>
    </>
  );
};

export default PageLayout;

import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import PageLayout from "../components/PageLayout";

export default function Home() {
  return (
    <PageLayout title="NewsApp - Home">
      <div className={styles.container}>
        <Head>
          <title>NewsApp - Home</title>
        </Head>
        <h1>Learning nextjs from 0</h1>
        <Link href="/about">Go to about</Link>
      </div>
    </PageLayout>
  );
}

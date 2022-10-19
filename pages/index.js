import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import PageLayout from "../components/PageLayout";

export default function Home({ articles }) {
  console.log(articles);
  return (
    <PageLayout title="NewsApp - Home">
      <div className={styles.container}>
        {articles.length === 0 && <p>No articles results</p>}
        {articles.length > 0 &&
          articles.map((article, index) => (
            <div key={index}>
              <Image
                width={450}
                height={300}
                layout="responsive"
                src={article.urlToImage}
                alt={`Image for the article: ${article.title}`}
              />
              <h2>{article.title}</h2>
              <p>{article.description}</p>
            </div>
          ))}
      </div>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=a06dc1c969d04637b43bb11bb59d116d`;
  const response = await fetch(url);
  const { articles } = await response.json();
  return {
    props: {
      articles,
    },
  };
}

// export async function getServerSideProps() {
//   const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=a06dc1c969d04637b43bb11bb59d116d`;
//   const response = await fetch(url);
//   const { articles } = await response.json();
//   return {
//     props: {
//       articles,
//     },
//   };
// }

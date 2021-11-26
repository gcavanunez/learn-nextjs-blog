import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost({ data }) {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <ul>
        {data.data.map((row) => {
          return (
            <li>
              <a href={row.url} target="_blank">
                {row.title}
              </a>
              <p>{row.content}</p>
              <p>
                {row.time} {row.date}
              </p>
            </li>
          );
        })}
      </ul>
      <h2>
        <Link href="/">
          <a className="foo" target="_self" rel="noopener noreferrer">
            Back to home
          </a>
        </Link>
      </h2>
    </Layout>
  );
}
export async function getServerSideProps() {
  const res = await fetch(
    'https://inshortsapi.vercel.app/news?category=technology'
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

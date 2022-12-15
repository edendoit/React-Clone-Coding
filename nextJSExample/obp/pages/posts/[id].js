// pages/posts/[id].js

import Link from "next/link";

export async function getStaticPaths() {
  const res = await fetch(
    "https://api.upbit.com/v1/market/all?isDetails=false"
  );
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.market },
  }));

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://api.upbit.com/v1/ticker?markets=${params.id}`
  );
  const posts = await res.json();
  const postData = JSON.stringify(posts);

  return { props: { postData } };
}

export default function Post({ postData }) {
  return (
    <>
      <h1>현재가 정보</h1>
      <p>{postData}</p>
      <p>
        <Link href="/market">Back to Market</Link>
      </p>
    </>
  );
}

// pages/market.js

import Link from "next/link";

function Market({ posts }) {
  return (
    <main>
      <h1>마켓 코드 조회</h1>
      <ul>
        {posts.map(({ market, korean_name, english_name }) => (
          <li key={market}>
            <Link href={`/posts/${market}`}>
              {market} : {korean_name} : {english_name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://api.upbit.com/v1/market/all?isDetails=false"
  );
  const posts = await res.json();

  return { props: { posts } };
}

export default Market;

// pages/page.js

function Page({ data }) {
  return (
    <main>
      <h1>비트코인 현재가 정보</h1>
      <ul>
        {data.map(
          ({ market, opening_price, high_price, low_price, trade_time }) => (
            <li>
              {market}
              <p>
                시가 : {opening_price} <br /> 고가 : {high_price} <br /> 저가 :{" "}
                {low_price} <br /> 최근 거래시간 : {trade_time}
              </p>
            </li>
          )
        )}
      </ul>
    </main>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://api.upbit.com/v1/ticker?markets=KRW-BTC");
  const data = await res.json();

  return { props: { data } };
}

export default Page;

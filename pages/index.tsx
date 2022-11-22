import { Product, HeroBanner, FooterBanner } from "../components";
import { client } from "../lib/client";
import { GetServerSideProps } from "next";

type Props = {
  products: {
    _id: string;
    _type: string;
    details: string;
    image: {}[];
    name: string;
    price: number;
    slug: { _type: string; current: "string" };
  }[];
  bannerData: [
    {
      _id: string;
      _type: string;
      buttonText: string;
      desc: string;
      discount: string;
      image: string;
      largeText1: string;
      largeText2: string;
      midText: string;
      product: string;
      saleTime: string;
      smallText: string;
    }
  ];
};

export default function Home({ products, bannerData }: Props) {
  return (
    <>
      <HeroBanner bannerData={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>speakers of many variations</p>
      </div>
      <div className="products-container">
        {products.map((product) => product.name)}
      </div>
      <FooterBanner />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  // console.log(bannerData);

  return {
    props: { products, bannerData },
  };
};

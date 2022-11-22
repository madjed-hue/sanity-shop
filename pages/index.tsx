import { Product, HeroBanner, FooterBanner } from "../components";
import { client } from "../lib/client";
import { GetServerSideProps } from "next";
import { BannerData, ProductData } from "../utils/types";

type Props = {
  products: ProductData[];
  bannerData: BannerData;
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
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  // console.log(products);

  return {
    props: { products, bannerData },
  };
};

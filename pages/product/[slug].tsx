import { GetStaticProps } from "next";
import Image from "next/image";
import React, { useState } from "react";
import { client, urlFor } from "../../lib/client";
import { ProductDetails } from "../../utils/types";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { Product } from "../../components";
import { useStateContext } from "../../context/StateContext";

type Props = {
  product: ProductDetails;
  products: ProductDetails[];
};

const ProductDetails = ({ product, products }: Props) => {
  const { image, name, details, price } = product;
  // const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const [index, setIndex] = useState<number>(0);
  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <Image
              src={`${urlFor(image && image[index])}`}
              className="product-detail-image"
              alt={name}
              width={350}
              height={350}
            />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <Image
                key={i}
                src={`${urlFor(item)}`}
                className={
                  i === index ? "small-image selected-image" : "small-image"
                }
                onMouseEnter={() => setIndex(i)}
                alt={name}
                width={70}
                height={70}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className="price">${price}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={() => {}}>
                <AiOutlineMinus />
              </span>
              <span className="num">10</span>
              <span className="plus" onClick={() => {}}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart" onClick={() => {}}>
              Add to Cart
            </button>
            <button type="button" className="buy-now" onClick={() => {}}>
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;
  const products = await client.fetch(query);
  const paths = products.map((product: ProductDetails) => ({
    params: {
      slug: product.slug.current,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params!.slug;
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product },
  };
};

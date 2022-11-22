import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";
import { ProductData, ProductDetails } from "../utils/types";
import Image from "next/image";

type Props = {
  product: ProductData | ProductDetails;
};

const Product = ({ product }: Props) => {
  const { image, name, details, price, slug } = product;

  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <Image
            src={`${urlFor(image && image[0])}`}
            alt={name}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name"> {name} </p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;

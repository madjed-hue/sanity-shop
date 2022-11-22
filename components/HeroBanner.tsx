import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/client";

type Props = {
  bannerData: {
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
  };
};

const HeroBanner = ({ bannerData }: Props) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo"> {bannerData.smallText} </p>
        <h3 className="mid-text">{bannerData.midText}</h3>
        <h1>{bannerData.largeText1}</h1>
        <img
          className="hero-banner-image"
          src={urlFor(bannerData.image)}
          alt="head-phone"
        />
        <div>
          <Link href={`/product/${bannerData.product}`}>
            <button type="button">{bannerData.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{bannerData.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/client";
import { BannerProps } from "../utils/types";

type Props = {
  bannerData: BannerProps;
};

const HeroBanner = ({ bannerData }: Props) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo"> {bannerData.smallText} </p>
        <h3 className="mid-text">{bannerData.midText}</h3>
        <h1>{bannerData.largeText1}</h1>
        <Image
          className="hero-banner-image"
          src={`${urlFor(bannerData.image)}`}
          alt="head-phone"
          width={450}
          height={450}
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

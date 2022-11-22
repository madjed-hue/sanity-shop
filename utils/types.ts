export type ProductData = {
  _id: string;
  _type: string;
  details: string;
  image: string;
  name: string;
  price: number;
  slug: { _type: string; current: string };
};
export type BannerData = [
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

export type BannerProps = {
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

export type ProductDetails = {
  _id: string;
  _type: string;
  details: string;
  image: [];
  name: string;
  price: number;
  slug: { _type: string; current: string };
};

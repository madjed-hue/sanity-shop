export type ProductData = {
  _id: string;
  _type: string;
  details: string;
  image: string;
  name: string;
  price: number;
  slug: { _type: string; current: string };
  quantity: number;
};

export type CartData = ProductData & {
  quantity: number;
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

export type CartContextType = {
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: ProductData[] | null;
  totalPrice: number;
  totalQuantities: number;
  qty: number;
  incQty: () => void;
  decQty: () => void;
  onAdd: (product: ProductData, quantity: number) => void;
  toggleCartItemQuanitity: (id: string, value: string) => void;
  onRemove: (product: { _id: string }) => void;
  setCartItems: React.Dispatch<React.SetStateAction<ProductData[] | null>>;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
  setTotalQuantities: React.Dispatch<React.SetStateAction<number>>;
};

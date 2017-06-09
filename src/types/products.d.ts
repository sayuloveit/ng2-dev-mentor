interface IProduct {
    name: string;
    imageUrl: string;
    price: number;
    promoted?: boolean;
    tags?: string[];
}

interface ISort {
  property: string;
  reverse: boolean;
}


interface IOrder {
  name: string;
  surname: string;
  address: string;
  email: string;
  productName: string;
  productCount: number;
}
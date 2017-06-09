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
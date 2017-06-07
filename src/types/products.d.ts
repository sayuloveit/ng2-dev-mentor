interface IProduct {
    name: string;
    description: string;
    price: number;
    promoted?: boolean;
    tags?: string[];
}

interface ISort {
  property: string;
  reverse: boolean;
}
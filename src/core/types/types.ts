export type Headers = {
  method: string;
  url: string;
  headers: {
    [key: string]: any;
  };
};

type Item = {
  id:number;
  unitPrice: number;
  quantity: number;
  discription: string;
};

export type itemReduserType = {
  items: [Item];
};

import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Sortby from './Sortby';
import Product from './Product';

const key = process.env.REACT_APP_VPLUMB_API_KEY;
const URL = `https://spanishinquisition.victorianplumbing.co.uk/interviews/listings?apikey=${key}`;
const payload = {
  query: 'toilets',
  pageNumber: 0,
  size: 0,
  additionalPages: 0,
  sort: 1,
};

function ProductSummary() {
  return <div className="font-bold text-xs">results</div>;
}

const productArr = [
  {
    name: 'product',
  },
];

const testProducts = [
  ...productArr,
  ...productArr,
  ...productArr,
  ...productArr,
];

function ProductList() {
  const {
    isPending,
    error,
    data: productData,
  } = useQuery({
    queryKey: ['productData'],
    queryFn: () => axios.post(URL, payload).then(res => res.data),
  });

  if (isPending) return <div>loading...</div>;
  if (error) return <div>error loading data!</div>;

  console.log('data? ', productData);

  return (
    <div className="container">
      <div className="flex flex-col w-full">
        <div className="flex flex-row justify-between w-full items-center p-4">
          <Sortby />
          <ProductSummary />
        </div>
        <div className="grid grid-cols-3 gap-2 pl-4">
          {testProducts.map(product => {
            return <Product name={product.name} />;
          })}
        </div>
      </div>
    </div>
  );
}

export { ProductList };

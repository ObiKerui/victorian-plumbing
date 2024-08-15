import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Sortby from './Sortby';
import Product from './ProductCard/Product';
import { useSearchParams } from 'react-router-dom';
import {
  tProductPayload,
  URL as PRODUCT_URL,
  DEFAULT_SORT_BY,
  sortByOptions,
} from '../Utils/ProductQuery';

type tProduct = {
  id: string;
};

type tPagination = {
  total: number;
};

type tAPIResponse = {
  products: tProduct[];
  pagination: tPagination;
};

async function loadData(url: string, payload: object) {
  try {
    const response = await axios.post(url, payload);
    if (response.status !== 200) {
      throw new Error(response.statusText);
    }
    return response.data as tAPIResponse;
  } catch (error) {
    throw new Error(`Unexpected error: ${error}`);
  }
}

function createParams(sortBy: number) {
  const payload = {
    query: 'toilets',
    pageNumber: 0,
    size: 0,
    additionalPages: 0,
    sort: sortBy,
  } as tProductPayload;
  return payload;
}

function ProductList() {
  const [searchParams] = useSearchParams();

  const sortBy = +(searchParams.get('sortBy') ?? DEFAULT_SORT_BY);

  const {
    isPending,
    error,
    data: productData,
  } = useQuery({
    queryKey: ['productData', sortBy],
    queryFn: () => loadData(PRODUCT_URL, createParams(sortBy)),
    refetchOnMount: false,
    staleTime: 1000 * 60 * 5, // Data is considered fresh for 5 minutes
    enabled: sortBy >= 1 && sortBy <= Array.from(sortByOptions.keys()).length,
  });

  if (isPending) return <div>loading...</div>;
  if (error || !productData.products || !productData.pagination)
    return <div>error loading data!</div>;

  return (
    <div className="container">
      <div className="flex flex-col w-full">
        <div className="flex flex-row justify-between w-full items-center p-4">
          <Sortby />
          <div className="font-bold text-xs">
            {productData.pagination.total} results
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-2 gap-y-8 pl-4">
          {productData.products.map(product => {
            return (
              <div key={product.id}>
                <Product product={product as unknown} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export { ProductList };

import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Sortby from './Sortby';
import Product from './ProductCard/Product';

const key = process.env.REACT_APP_VPLUMB_API_KEY;
const URL = `https://spanishinquisition.victorianplumbing.co.uk/interviews/listings?apikey=${key}`;
const payload = {
  query: 'toilets',
  pageNumber: 0,
  size: 0,
  additionalPages: 0,
  sort: 1,
};

// const apiResponse = z.object({
//   //   pagination: z.array(z.unknown()),
//   //   facets: z.array(z.unknown()),
//   products: z.array(productSchema),
// });

// async function loadData(url: string, payload: object) {
//   try {
//     const response = await axios.post(URL, payload);
//     if (response.status !== 200) {
//       throw new Error(response.statusText);
//     }
//     console.log('response data: ', response.data);
//     const parsed = apiResponse.parse(response.data);
//     return parsed;
//   } catch (error) {
//     if (error instanceof z.ZodError) {
//       // Handle Zod validation errors
//       console.error('Validation errors:', error.errors);
//       throw new Error(`Validation error: ${JSON.stringify(error.errors)}`);
//     } else {
//       // Handle other errors
//       throw new Error(`Unexpected error: ${error}`);
//     }
//   }
// }

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
    const response = await axios.post(URL, payload);
    if (response.status !== 200) {
      throw new Error(response.statusText);
    }
    console.log('response data: ', response.data);
    return response.data as tAPIResponse;
  } catch (error) {
    throw new Error(`Unexpected error: ${error}`);
  }
}

function ProductList() {
  const {
    isPending,
    error,
    data: productData,
  } = useQuery({
    queryKey: ['productData'],
    queryFn: () => loadData(URL, payload),
    refetchOnMount: false,
    staleTime: 1000 * 60 * 5, // Data is considered fresh for 5 minutes
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

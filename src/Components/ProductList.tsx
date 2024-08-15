import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const key = process.env.REACT_APP_VPLUMB_API_KEY;
const URL = `https://spanishinquisition.victorianplumbing.co.uk/interviews/listings?apikey=${key}`;
const payload = {
  query: 'toilets',
  pageNumber: 0,
  size: 0,
  additionalPages: 0,
  sort: 1,
};

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

  return <div>product list</div>;
}

export { ProductList };

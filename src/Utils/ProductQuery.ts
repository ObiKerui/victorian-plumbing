const DEFAULT_SORT_BY = 1;

const sortByOptions = new Map<number, string>([
  [1, 'Recommended'],
  [2, 'Price Low To High'],
  [3, 'Price High To Low'],
  [4, 'Largest Discount'],
]);

const key = process.env.REACT_APP_VPLUMB_API_KEY;
const URL = `https://spanishinquisition.victorianplumbing.co.uk/interviews/listings?apikey=${key}`;

type tProductPayload = {
  query: string;
  pageNumber: number;
  size: number;
  additionalPages: number;
  sort: number;
};

export { DEFAULT_SORT_BY, sortByOptions, URL };
export type { tProductPayload };

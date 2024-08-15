import { maxLenString } from '../../Utils/Utils';
import Rating from './Rating';
import SaleInfo from './SaleInfo';
import StockStatus from './StockStatus';

const MAX_STR_LENGTH = 60;
const BrandDims = {
  width: 80,
  height: 30,
};

type tProductProps = {
  product: any;
};

function Product(props: tProductProps) {
  const { product } = props;
  if (!product) return <div>no product</div>;

  const trimmedDesc = maxLenString(product.productName, MAX_STR_LENGTH);
  const {
    isOnPromotion,
    discountPercentage,
    wasPriceIncTax,
  }: {
    isOnPromotion: boolean;
    discountPercentage: number;
    wasPriceIncTax: number;
  } = product.price;

  return (
    <div className="card bg-base-100 w-80 shadow-xl p-0 min-h-[500px] h-[500px] rounded-none">
      {isOnPromotion && (
        <div className="absolute top-1 left-1">
          <SaleInfo discountPercentage={discountPercentage ?? 0} />
        </div>
      )}
      <figure className="h-80 w-full">
        <img src={product.image.url} alt={product.image.imageAltText} />
      </figure>
      <div className="card-body pt-1 px-4">
        <img
          src={product.brand.brandImage.url}
          alt={product.brand.brandName}
          width={BrandDims.width}
          height={BrandDims.height}
        />
        <div>
          <span className="text-sm font-semibold">{trimmedDesc}</span>
        </div>
        <div className="flex flex-row gap-2 items-baseline">
          <span className="text-red-700 text-lg font-extrabold">
            &#163;{product.price.priceIncTax}
          </span>
          <span className="text-sm">
            {isOnPromotion && (
              <span className="line-through">Was &#163;{wasPriceIncTax}</span>
            )}
          </span>
        </div>
        <div>
          <StockStatus />
        </div>
        <div>
          <Rating
            rating={product.averageRating ?? 0}
            reviewsCount={product.reviewsCount ?? 0}
          />
        </div>
      </div>
    </div>
  );
}

export default Product;

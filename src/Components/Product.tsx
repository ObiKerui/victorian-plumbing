// image
// over image -
// topleft - if sale
// topright - space saver
// across bottom - best seller
// left - brand
// left - description - right - heart
// left - price (was)
// left - in stock
// left - rating (number)

type tProductDetail = {
  imageSrc?: string;
  onSale?: boolean;
  spaceSaver?: boolean;
  bestSeller?: boolean;
  brand?: string;
  description?: string;
  price?: string;
  previousPrice?: string;
  inStock?: boolean;
  rating?: number;
};

type tRatingProps = {
  rating: number;
};

function Rating(props: tRatingProps) {
  return (
    <div className="flex flex-row gap-2 align-bottom">
      <div className="flex flex-row items-center">
        {[0, 1, 2, 3, 4].map(elem => {
          return (
            <div className="rating rating-xs">
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          );
        })}
      </div>
      <div className="flex flex-row items-center">
        <span className="text-xs">{props.rating}</span>
      </div>
    </div>
  );
}

function Product(props: tProductDetail) {
  return (
    <div className="card bg-base-100 w-80 shadow-xl">
      <figure>
        <img src={props.imageSrc} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.brand}</h2>
        <p>{props.description}</p>
        <p>{props.price}</p>
        <p>{props.inStock}</p>
        <p>
          <Rating rating={props.rating ?? 0} />
        </p>
      </div>
    </div>
  );
}

Product.defaultProps = {
  imageSrc:
    'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
  onSale: false,
  spaceSaver: false,
  bestSeller: false,
  brand: 'brand',
  description: 'description',
  price: '0.00',
  previousPrice: '0.00',
  inStock: false,
  rating: 0,
};

export default Product;
